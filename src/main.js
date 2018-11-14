import { foo } from "./foo.css";
import { bar } from "../Src/bar.css";

import { bar as alsoBar } from "../src/bar.css";

console.log({ foo, bar, alsoBar });