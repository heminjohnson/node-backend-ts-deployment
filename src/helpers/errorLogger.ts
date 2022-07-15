const errorLogger = (
  fileName: string,
  functionName: string,
  error: Error
): void => {
  console.error(
    "\x1b[31m",
    `File: [${fileName}]\t Function: [${functionName}]\t Error: [name: ${error.name}, message: ${error.message}]`,
    "\x1b[0m"
  );
};

export default errorLogger;
