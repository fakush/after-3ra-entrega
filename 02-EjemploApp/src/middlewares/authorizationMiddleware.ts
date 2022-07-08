import { Request, Response, NextFunction } from 'express'

export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  console.log('Is Authenticated')
  console.log(req.isAuthenticated())
  if (!req.isAuthenticated()) return res.status(401).json({ msg: 'Unathorized' })
  next()
}

export const isAdmin = (req: any, res: Response, next: NextFunction) => {
  console.log('Is Admin Middleware')
  console.log(req.user)
  if (!req.user.admin) return res.status(401).json({ msg: 'Unathorized - Admin Only' })
  next()
}
