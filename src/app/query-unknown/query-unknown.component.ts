import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/service/upload-file-service.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompareOneToNService } from '../service/compare-one-to-n.service';

@Component({
  selector: 'app-query-comparison',
  templateUrl: './query-unknown.component.html',
  styleUrls: ['./query-unknown.component.css']
})

export class QueryUnknownComponent implements OnInit {

  file1FileList: FileList;
  file1URL: any;
  fileTempLocation: any;
  currentFile1: File;
  progress = 0;
  message: any;
  response = false;

  needHelp: boolean;

  thing: boolean;

  responseJSONObj: result;

  fileInfos: Observable<any>;

  constructor(private uploadService: CompareOneToNService) { }

  ngOnInit() {
    this.fileInfos = this.uploadService.getFiles();
    this.needHelp = false;
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

  upload() {
    this.progress = 0;
    
    this.uploadService.upload(this.currentFile1).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();

          this.responseJSONObj = <result>event.body;
          this.thing = getBoolean(this.responseJSONObj.ident);
          this.response = true;
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile1 = undefined;
      });
  
    
  } 
  
  toggleHelp() 
  {
    if (this.needHelp == false) 
    {
      this.needHelp = true;
    }
    else 
    {
      this.needHelp = false;
    }
  }

}

function getBoolean(value){
  switch(value){
       case true:
       case "true":
       case 1:
       case "1":
       case "on":
       case "yes":
           return true;
       default: 
           return false;
   }
}

export interface result
{
  ident: boolean;
  message: string;
  time: number;
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  ssid: string;
  dob: string;
}
