import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';


@Component({
  selector: 'app-fileuploader',
  templateUrl: './fileuploader.component.html',
  styleUrls: ['./fileuploader.component.css']
})
export class FileuploaderComponent implements OnInit {


  file!: File;
  filename!: string;
  constructor(private fileService: FileService) { }

  ngOnInit(): void {
  }

  getFile(event: Event): void {
    this.file = (event.target as HTMLInputElement).files![0];
    this.filename = this.file.name;
  }

  uploadFile() {
    if(this.file !== undefined){
      this.fileService.uploadFile(this.file).subscribe(data => alert(data.message),err=>console.log(err))
    }else{
      alert("No file has been selected")
    }
  }



}
