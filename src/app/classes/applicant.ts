export class Applicant {
    constructor(
        public resume: File | undefined,
        public tellmeaboutyourself: string,
        public educationLevel: string,
        public eductionField: string,
        public employmentStatus: string,
        public applicantSkills: string[],
    ) {}
}
// whatIsYourGreatestWeakness: string, 
// yearsInCareer: string, 
// yearsInEducation: string, 
// accomplishments: string, 
// coverLetter: File | undefined,
