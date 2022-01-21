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
  An Applicant has an account. this is done through making sure they are logged in

  When:
  The Applicant uploads the documents in question to their page. Going to keep the fileuploader separate for potential use later but use the functionality there. 

  Then:
  The System has those docs ready for the Owner to use when dealing with Clients Since the docs are in the applicant table in the db we can pull them from the database at a later date

  Figure out how to set up the documents in question to show up "on their page" to view. 
  */
export class ApplicantUploadComponent implements OnInit {
  file!: File;

  filename!: string;
  constructor(private fileupload: FileuploaderComponent) {

  }
  ngOnInit(): void {
    this.file = this.fileupload.file;
    this.filename = this.fileupload.filename;
  }
  getFile(event: Event): void {
    this.fileupload.getFile(event);
  }
  uploadFile() {
    this.fileupload.uploadFile();
  }
}
