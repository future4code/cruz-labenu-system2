export class ApiError {
  constructor(public code: number, public message: any) {}

  static wrongParams(message: string) {
    return new ApiError(406, message)
  }

  static badRequest(message: any) {
    return new ApiError(400, message)
  }

  static notFound(message: string) {
    return new ApiError(404, 'Cant found what you want!')
  }

  static internal() {
    return new ApiError(500, 'Internal error')
  }
}
