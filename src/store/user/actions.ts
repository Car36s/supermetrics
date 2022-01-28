import {
  InitializeUserDone,
  InitializeUserDonePayload,
  LogOut,
  RegisterUserFailed,
  RegisterUserFailedPayload,
  RegisterUserStarted,
  RegisterUserStartedPayload,
  RegisterUserSuccess,
  RegisterUserSuccessPayload,
} from '../../types/user'

export enum userActionTypes {
  userRegisterStarted = 'userRegisterStarted',
  userRegisterFailed = 'userRegisterFailed',
  userRegisterSuccess = 'userRegisterSuccess',
  userInitialize = 'userInitialize',
  userInitializeDone = 'userInitializeDone',
  logOut = 'logOut',
}

export const registerStarted = (payload: RegisterUserStartedPayload): RegisterUserStarted => ({
  type: userActionTypes.userRegisterStarted,
  payload,
})

export const registerFailed = (payload: RegisterUserFailedPayload): RegisterUserFailed => ({
  type: userActionTypes.userRegisterFailed,
  payload,
})

export const registerSucess = (payload: RegisterUserSuccessPayload): RegisterUserSuccess => ({
  type: userActionTypes.userRegisterSuccess,
  payload,
})

export const initializeUser = () => ({
  type: userActionTypes.userInitialize,
})

export const initializeUserDone = (payload: InitializeUserDonePayload): InitializeUserDone => ({
  type: userActionTypes.userInitializeDone,
  payload,
})

export const logOut = (): LogOut => ({
  type: userActionTypes.logOut,
})
