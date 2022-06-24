// user.email, user.family_name, user.given_name, user.name, user.nickname, user.picture, user.sub, user.updated_at
export class User {
    constructor(
        public email: string,
        public password?: string,
        public approved?: Boolean, 
        public firstName?: string, 
        public lastName?: string 
        //public userId?: number
        /* public email_verified: boolean | undefined,
        public family_name: string | undefined,
        public given_name: string | undefined,
        public name: string | undefined,
        public nickname: string | undefined,
        public picture: string | undefined,
        public phone_number: string | undefined,
        public phone_number_verified: boolean | undefined,
        public birthdate: string | undefined */
    ) { }

}
