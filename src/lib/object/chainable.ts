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

function chainable<
  K extends string,
  U extends any,
  T extends Record<string, any> = {}
>(target: T, _key?: K, _value?: U): Config<T> {
  const config: Config<T> = {
    option(key, value) {
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
        return {
          ...target,
        };
      }
    },
  };

  return config;
}

export default chainable;
