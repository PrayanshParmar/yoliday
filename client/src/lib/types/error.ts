export class MyError extends Error {
  code: number;
  info: { message: string; error: any };

  constructor(
    message: string,
    code: number,
    errorData: { message: string; error: any }
  ) {
    super(message);
    this.name = "MyError";
    this.code = code;
    this.info = errorData;
  }
}
