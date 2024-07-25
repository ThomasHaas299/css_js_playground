// Import from one module to another
import { uppercase, reverse } from "./module03.js";

// Exporting a constant ...
const anyConst = uppercase("Hello, World!");

// ... and a function
// with a different name
export { anyConst as mod4AnyConst, reverse as mod4Reverse };
