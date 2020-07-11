import dotenv from "dotenv";
dotenv.config();
import passport from "passport";
import JwtStrategy from "passport-jwt";

const jwtOptions = {
  jwtFromRequest: JwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};
const verifyUser = (payload: any, done: any) => {};

passport.use(new JwtStrategy.Strategy(jwtOptions, verifyUser));
