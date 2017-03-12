export class User{

    constructor(
        public name:string,
        public email: string,
        public mobile: number,
        public gender: string,
        public password: any,
        public confirmPassword: any
    ){}
}