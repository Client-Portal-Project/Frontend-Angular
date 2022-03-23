// user.email, user.family_name, user.given_name, user.name, user.nickname, user.picture, user.sub, user.updated_at
export class User {
    constructor(
        public email: string,
        public family_name: string,
        public given_name: string,
        public name: string,
        public nickname: string,
        public picture: string,
        public sub: string,
        public updated_at: string
    ) {}
}
