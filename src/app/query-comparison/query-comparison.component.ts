import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/service/upload-file-service.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompareNToNService } from '../service/compare-nto-n.service';

@Component({
  selector: 'app-query-comparison',
  templateUrl: './query-comparison.component.html',
  styleUrls: ['./query-comparison.component.css']
})
export class QueryComparisonComponent implements OnInit {

  file1FileList: FileList;
  file2FileList: FileList;
  file1URL: any;
  file2URL: any;
  fileTempLocation: any;
  currentFile1: File;
  currentFile2: File;
  progress = 0;
  message = '';

  result = 
  {
    ident: null,
    score: null,
    time: null
  };

  fileInfos: Observable<any>;

  constructor(private uploadService: CompareNToNService) { }

  ngOnInit() {
    this.fileInfos = this.uploadService.getFiles();
  }  

  selectFile1(event) {
    this.file1FileList = event.target.files;
    this.currentFile1 = this.file1FileList.item(0);
    var reader = new FileReader();
    reader.readAsDataURL(this.currentFile1); 
    reader.onload = (_event) => { 
      this.file1URL = reader.result; 
    }
  }

  selectFile2(event) {
    this.file2FileList = event.target.files;
    this.currentFile2 = this.file2FileList.item(0);
    var reader = new FileReader();
    reader.readAsDataURL(this.currentFile2); 
    reader.onload = (_event) => { 
      this.file2URL = reader.result; 
    }
  }

  upload() {
    this.progress = 0;
    
    this.uploadService.upload(this.currentFile1, this.currentFile2).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();

          this.result = JSON.parse(this.message);
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile1 = undefined;
        this.currentFile2 = undefined;
      });
  
    
  }  

}