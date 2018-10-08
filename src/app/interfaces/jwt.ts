export interface Jwt {
    access_token: string;
    token_type: string;
    expires_in: number;
    user_name: string;
    email: string;
}
