import { errorLogger } from "../index";

const errorMock = {
  name: "TypeError",
  message: "res.status(...).json1 is not a function",
};

describe("ErrorLogger", () => {
  test("errorLogger should successfully run the console.log()", () => {
    console.error = jest.fn();
    errorLogger("filename", "functionName", errorMock);
    expect(console.error).toHaveBeenCalledWith(
      "\x1b[31m",
      "File: [filename]\t Function: [functionName]\t Error: [name: TypeError, message: res.status(...).json1 is not a function]",
      "\x1b[0m"
    );
  });
});
