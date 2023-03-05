type ActiveityLog = {
  lastEvent: Date;
  events: {
    id: string;
    timestamp: Date;
    type: "Read" | "Write";
    mapList: {
      id: number;
      list: any[];
    };
  };
};

type Get = {
  <O extends object, K1 extends keyof O>(obj: O, key: K1): O[K1];
  <O extends object, K1 extends keyof O, K2 extends keyof O[K1]>(
    obj: O,
    key1: K1,
    key2: K2
  ): O[K1][K2];
  <
    O extends object,
    K1 extends keyof O,
    K2 extends keyof O[K1],
    K3 extends keyof O[K1][K2]
  >(
    obj: O,
    key1: K1,
    key2: K2,
    key3: K3
  ): O[K1][K2][K3];
};

const get: Get = (obj: any, ...keys: string[]) => {
  let result = obj;
  keys.forEach((item) => (result = result[item]));
  return result;
};

const activeityLog: ActiveityLog = {
  lastEvent: new Date(),
  events: {
    id: "__123",
    timestamp: new Date(),
    type: "Read",
    mapList: {
      id: 1,
      list: [1, 2, 3],
    },
  },
};

const res = get(activeityLog, "lastEvent"); // Date;

const res1 = get(activeityLog, "events"); // {id: string, timestamp: Date, type: "Read" | "Write"}

const res2 = get(activeityLog, "events", "id"); // string

const res3 = get(activeityLog, "events", "type"); // Read | Write

const res4 = get(activeityLog, "events", "mapList", "id"); // number

const res5 = get(activeityLog, "events", "mapList", "list"); // any[]

export default get;
