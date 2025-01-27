interface HttpError {
  message: string;
  input: object;
}
interface HttpResponse {
  content?: object;
  error?: HttpError;
}

class ErrorResponse implements HttpResponse {
  error: HttpError;

  constructor(message: string, input: object) {
    this.error = {
      message,
      input,
    };
  }
}

class SuccessResponses implements HttpResponse {
  content?: object;

  constructor(content: object) {
    this.content = content;
  }
}

export { ErrorResponse, SuccessResponses };
