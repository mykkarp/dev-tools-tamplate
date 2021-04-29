import { createLogger } from "../logger.js";

it("should return stored logs", () => {
  const logger = createLogger("userName");

  expect(logger.getLogs()).toEqual([]);
});

it("should save log message", () => {
  const logger = createLogger("userName");

  logger.log("message");
  expect(logger.getLogs()).toEqual(["log - userName - message"]);
});

it("should save error message", () => {
  const logger = createLogger("userName");

  logger.error("errorMessage");
  expect(logger.getLogs()).toEqual(["error - userName - errorMessage"]);
});