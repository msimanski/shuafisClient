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
  fileTempLocation: any;
  currentFile1: File;
  currentFile2: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;

  constructor(private uploadService: CompareNToNService) { }

  ngOnInit() {
    this.fileInfos = this.uploadService.getFiles();
  }  

  selectFile1(event) {
    this.file1FileList = event.target.files;
    this.currentFile1 = this.file1FileList.item(0);
  }

  selectFile2(event) {
    this.file2FileList = event.target.files;
    this.currentFile2 = this.file2FileList.item(0);
  }

  upload() {
    this.progress = 0;
    
    this.uploadService.upload(this.currentFile1, this.currentFile2).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
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