import * as array from "./array";
import * as object from "./object";

import { chunk } from "./array";
import { get } from "./object";
const _ = {
  ...array,
  ...object,
};

export { chunk, get };

export default _;
