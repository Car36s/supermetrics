import {
  RegisterUserFailed,
  RegisterUserFailedPayload,
  RegisterUserStarted,
  RegisterUserStartedPayload,
  RegisterUserSuccess,
  RegisterUserSuccessPayload
} from '../../types/user'

export enum userActionTypes {
  userRegisterStarted = 'userRegisterStarted',
  userRegisterFailed = 'userRegisterFailed',
  userRegisterSuccess = 'userRegisterSuccess'
}

export const registerStarted = (payload: RegisterUserStartedPayload): RegisterUserStarted => ({
  type: userActionTypes.userRegisterStarted,
  payload
})

export const registerFailed = (payload: RegisterUserFailedPayload): RegisterUserFailed => ({
  type: userActionTypes.userRegisterFailed,
  payload
})

export const registerSucess = (payload: RegisterUserSuccessPayload): RegisterUserSuccess => ({
  type: userActionTypes.userRegisterSuccess,
  payload
})
