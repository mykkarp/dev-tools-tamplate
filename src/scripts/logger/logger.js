export const createLogger = (name) => {
  const logs = [];
  const obj = { name: "Mike", age: 21 };
  const { objName, objAge } = obj;
  const newObj = { ...obj };
  const flattedArr = [1, 2, 3, [4, 5, 6]].flat();

  return {
    log(message) {
      logs.push(`log - ${name} - ${message}`);
    },
    error(errorText) {
      logs.push(`error - ${name} - ${errorText}`);
    },
    getLogs() {
      return logs;
    }
  }
}