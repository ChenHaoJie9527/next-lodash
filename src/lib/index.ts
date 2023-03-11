import * as array from "./array";
import * as object from "./object";

import { chunk, compact } from "./array";

import { get, chainable } from "./object";
const _ = {
  ...array,
  ...object,
};

export { chunk, compact, get, chainable };

export default _;
