export interface IResponse<T> {
  success: boolean
  statusCode: number
  data: T
  message: string
}
