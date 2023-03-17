import * as array from "./array";
import * as object from "./object";
import * as string from "./string";

import { chunk, compact, pop } from "./array";

import { get, chainable, lookup } from "./object";

import { trimLeft } from "./string";
const _ = {
  ...array,
  ...object,
  ...string,
};

export { chunk, compact, get, chainable, pop, lookup, trimLeft };

export default _;
