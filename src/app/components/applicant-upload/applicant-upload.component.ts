import { Component, OnInit } from '@angular/core';
import { FileuploaderComponent } from 'src/app/components/fileuploader/fileuploader.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FileService } from 'src/app/services/file.service';
@Component({
  selector: 'app-applicant-upload',
  templateUrl: './applicant-upload.component.html',
  styleUrls: ['./applicant-upload.component.css']
})
  ///Fileuploadercomponent handles the showing of the place to upload as well as actually uploading the file.
  /*
  Given:
  An Applicant has an account.

  When:
  The Applicant uploads the documents in question to their page.

  Then:
  The System has those docs ready for the Owner to use when dealing with Clients

  */
export class ApplicantUploadComponent implements OnInit {

  constructor(private fileupload: FileuploaderComponent) { }
  ngOnInit(): void {
    
  }

}
