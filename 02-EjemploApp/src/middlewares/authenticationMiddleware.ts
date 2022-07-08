import passport from 'passport'
import { Strategy as LocalStrategy, IStrategyOptionsWithRequest, VerifyFunctionWithRequest } from 'passport-local'
import { Request, Response, NextFunction } from 'express'
import usersAPI from '../apis/usersAPI'
import logger from '../utils/logger'

const strategyOptions: IStrategyOptionsWithRequest = {
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}

const login: VerifyFunctionWithRequest = async (req: Request, email: string, password: string, done: any) => {
  const user = await usersAPI.getUserByEmail(email)
  const validPassword = await usersAPI.validateUserPassword(user, password)
  if (!user || !validPassword) {
    logger.warn('User not found: ' + email)
    return done(null, false, { message: 'Invalid Username/Password' })
  }
  logger.warn('User logged: ' + email)
  return done(null, user)
}

const signup: VerifyFunctionWithRequest = async (req: Request, email: string, password: string, done: any) => {
  try {
    const { firstName, lastName, email, age, isAdmin, password } = req.body
    const user = { firstName, lastName, email, age, isAdmin, password }
    const newUser = await usersAPI.postUser(user)
    logger.warn('User created successfully', newUser)
    return done(null, newUser)
  } catch (error: any) {
    logger.error('Error while creating new user:', error)
    return done(null, false, { message: error.message })
  }
}

export const loginFunc = new LocalStrategy(strategyOptions, login)
export const signUpFunc = new LocalStrategy(strategyOptions, signup)

passport.serializeUser((user: any, done) => {
  done(null, user.email)
})

passport.deserializeUser((email, done) => {
  usersAPI.getUserByEmail(email).then((user) => {
    return done(null, user)
  })
})

export default passport