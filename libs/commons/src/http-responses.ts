interface HttpError {
  message: string;
  input: {};
}
interface HttpResponse {
  content?: {};
  error?: HttpError;
}

class ErrorResponse implements HttpResponse {
  error: HttpError;

  constructor(message: string, input: {}) {
    this.error = {
      message,
      input,
    };
  }
}

class SuccessResponses implements HttpResponse {
  content?: {};

  constructor(content: {}) {
    this.content = content;
  }
}

export { ErrorResponse, SuccessResponses };
