import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, PayloadTooLargeException, ValidationPipe } from "@nestjs/common";
import { ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'SECRET'
        })
    }

    async validate(payload: any){
        return {
            id: payload.sub,
            name: payload.name,
        }
    }
}