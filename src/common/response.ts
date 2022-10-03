interface ResponseData {
  status: Number
  message: string
  data: object
  error: boolean
}

export class Response {
  status: Number
  message: string
  data: object
  error: boolean

  constructor(data: Partial<ResponseData>) {
    Object.assign(this, data)
  }
}
