import * as array from "./array";
import * as object from "./object";

import { chunk, compact, pop } from "./array";

import { get, chainable } from "./object";
const _ = {
  ...array,
  ...object,
};

export { chunk, compact, get, chainable, pop };

export default _;
