import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/fileservice.service';

@Component({
  selector: 'app-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.css']
})
export class FileViewerComponent implements OnInit {

  file!: File;

  constructor(private fileService: FileService) { }

  ngOnInit(): void {

    this.fileService.getPDF().subscribe(data => {
      let file = new Blob([data], { type: "application/pdf" });
      this.file = new File([data], "resume.pdf");
      const link = document.createElement('a');
      link.href = URL.createObjectURL(this.file);
      link.download = this.file.name;
      link.click();
    })




  }

}
