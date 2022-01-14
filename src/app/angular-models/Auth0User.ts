import { Applicant } from "./Applicant";

export interface Auth0User {
    id? : number | undefined;
    Email: string | undefined
    owner : Owner
    applicant : Applicant
    clientUser : ClientUser
    firstName : string | undefined
    lastName : string | undefined

}