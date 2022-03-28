export class Applicant {
    constructor(
        public resume: File | undefined,
        public aboutMe: string,
        public educationLevel: string,
        public educationField: string,
        public employmentStatus: string,
    ) {}
}
// whatIsYourGreatestWeakness: string,
// yearsInCareer: string,
// yearsInEducation: string,
// accomplishments: string,
// coverLetter: File | undefined,
