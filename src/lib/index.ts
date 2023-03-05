import * as array from "./array";
import * as object from "./object";

import { chunk, compact } from "./array";

import { get } from "./object";
const _ = {
  ...array,
  ...object,
};

export { chunk, compact, get };

export default _;
