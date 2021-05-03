import { createLogger } from "./scripts/logger/logger.js";
import { sum, mul } from "./scripts/calculator/calculator.js";

console.log(createLogger("name"));
console.log("sum of 2 and 3", sum(3, 2));
console.log("mul of 2 and 3", mul(3, 2));