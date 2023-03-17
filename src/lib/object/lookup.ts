type Types = "cat" | "dog" | "pig";

interface Cat {
  type: "cat";
  breed: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  color: "brown" | "white" | "black";
}

interface Pig {
  type: "pig";
  color: "pink" | "back";
}

const isMap = new Map<Types, Cat | Dog | Pig>();

isMap.set("cat", {
  type: "cat",
  breed: "Abyssinian",
});

isMap.set("dog", {
  type: "dog",
  color: "brown",
});

isMap.set("pig", {
  type: "pig",
  color: "pink",
});


function lookup<U extends Types>(type: U, maps = isMap) {
  if (maps.has(type)) {
    return maps.get(type);
  } else {
    return undefined;
  }
}

const res1 = lookup("cat");

export default lookup;
