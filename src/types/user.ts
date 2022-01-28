import { userActionTypes } from '../store/user/actions'

export interface UserState {
  isLoading: boolean
  email: string
  name: string
  client_id: string
  sl_token: string
  error: string
}

export interface RegisterUserStartedPayload {
  email: string
  name: string
}

export interface RegisterUserFailedPayload {
  error: string
}

export interface RegisterUserSuccessPayload {
  client_id: string
  email: string
  sl_token: string
}
export interface InitializeUserDonePayload {
  name: string
  email: string
  sl_token: string
}

export interface RegisterUserStarted {
  type: typeof userActionTypes.userRegisterStarted
  payload: RegisterUserStartedPayload
}

export type RegisterUserFailed = {
  type: typeof userActionTypes.userRegisterFailed
  payload: RegisterUserFailedPayload
}

export type RegisterUserSuccess = {
  type: typeof userActionTypes.userRegisterSuccess
  payload: RegisterUserSuccessPayload
}

export type InitializeUser = {
  type: typeof userActionTypes.userInitialize
}

export type InitializeUserDone = {
  type: typeof userActionTypes.userInitializeDone
  payload: InitializeUserDonePayload
}

export type LogOut = {
  type: typeof userActionTypes.logOut
}

export type userActions =
  | RegisterUserStarted
  | RegisterUserFailed
  | RegisterUserSuccess
  | InitializeUser
  | InitializeUserDone
  | LogOut
