import {Controller, Post } from "@nestjs/common";
import {AuthService} from './auth.service';
@Controller('auth') //good practice to put a global route
export class AuthController{
    constructor(private authService:AuthService){}
    @Post('signup')
    signup(){
        return 'I am signed up'
    }

    @Post('signin') //defining route
    signin(){
        return 'I am signed in'
    }
}