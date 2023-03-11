type MyOmit<T, K> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type Config<T = {}> = {
  option<K extends string, V extends any>(
    key: K extends keyof T ? never : K,
    value: V
  ): Config<MyOmit<T, K> & { [P in K]: V }>;
  get(): T;
};

const mapOption = new Map();

function chainable<
  K extends string,
  U extends any,
  T extends Record<string, any> = {}
>(target: T, _key?: K, _value?: U): Config<T> {
  const config: Config<T> = {
    option(key, value) {
      if (!mapOption.has(key)) {
        mapOption.set(key, value);
      }
      return {
        ...config,
        [key]: value,
      };
    },
    get() {
      if (_key && _value) {
        return {
          ...target,
          [_key]: _value,
        };
      } else {
        const size = mapOption.size;
        const _target = getOption(size, target, mapOption);
        return {
          ..._target,
        };
      }
    },
  };

  return config;
}

function getOption<T, K, U extends Map<any, any>>(
  size: T,
  target: K,
  mapOption: U
) {
  if (size) {
    const option = [...mapOption.entries()].reduce(
      (obj: Record<string, any>, [key, value]) => {
        obj[key] = value;
        return obj;
      },
      {}
    );
    return {
      ...target,
      ...option,
    };
  }
  return {
    ...target,
  };
}

export default chainable;
