import {EventEmitter, Injectable, Output} from '@angular/core';
import {User} from '../classes/User';
import {Jwt} from '../interfaces/jwt';
import {HttpClient, HttpErrorResponse, HttpHeaderResponse} from '@angular/common/http';


@Injectable()
export class AuthService {
    private APIAUTHURL = 'http://localhost:8080/api/auth/';

    private isUserLogged = false;
    @Output() usersignedin = new EventEmitter<User>();
    @Output() usersignedup = new EventEmitter<User>();
    @Output() userlogout = new EventEmitter();

    constructor(private http: HttpClient) {
    }

    isUserLoggedIn() {
        this.isUserLogged = !!localStorage.getItem('token');
        return this.isUserLogged;
    }

    signIn(email: string, password: string) {
        /*
        this.http.post(this.APIAUTHURL + 'login',
            {
                email: email,
                password: password
            }
        ).subscribe(
            (payload: Jwt) => {
                localStorage.setItem('token', payload.access_token);
                console.log(payload)
                localStorage.setItem('user' , JSON.stringify(payload));
                let user = new User();
                user.username = payload.user_name;
                user.email = payload.email;
                this.usersignedin.emit(user);
                return true;
            } ,
            (httpResp: HttpErrorResponse) => {
                alert(httpResp.message);
            }
        );   */
        localStorage.setItem('token', 'aaaa');
        localStorage.setItem('user' , JSON.stringify('aaaa'));
        let user = new User();
        user.username = 'pippo';
        user.email =  'pippo@gmail.com';
        this.usersignedin.emit(user);
        return true;
    }

    signUp(username: string, email: string, password: string) {
        const user = new User();
        user.name = username;
        user.email = email;

        this.http.post(this.APIAUTHURL + 'signup',
            {
                email: email,
                password: password,
                name : username
            }
        ).subscribe(
            (payload: Jwt) => {
                localStorage.setItem('token', payload.access_token);
                console.log(payload);
                localStorage.setItem('user' , JSON.stringify(payload));
                this.usersignedup.emit(user);
            } ,
            (httpResp: HttpErrorResponse) => {
                alert(httpResp.message);
            }
        );
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
            this.userlogout.emit();
        this.isUserLogged = false;
    }

    getUser(): User {
        const data = JSON.parse(localStorage.getItem('user'));
        let user = new User();
        if( data) {
            user.name = data['user_name'];
            user.email = data['email'];
        }
       return user;
    }

    getToken() {
        return localStorage.getItem('token');
    }
}
