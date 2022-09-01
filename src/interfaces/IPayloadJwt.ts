export interface IPayloadJwt {
  email: string
  id: number
}

export interface IDecodedToken {
  data: IPayloadJwt
}
