import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/service/upload-file-service.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadProfileService } from '../service/upload-profile.service';
import { FormArrayName, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-upload-profile',
  templateUrl: './upload-profile.component.html',
  styleUrls: ['./upload-profile.component.css']
})

export class UploadProfileComponent implements OnInit {

  leftLittleFileList: FileList;
  leftRingFileList: FileList;
  leftMiddleFileList: FileList;
  leftIndexFileList: FileList;
  leftThumbFileList: FileList;
  rightLittleFileList: FileList;
  rightRingFileList: FileList;
  rightMiddleFileList: FileList;
  rightIndexFileList: FileList;
  rightThumbFileList: FileList;

  leftLittleURL: any;
  leftRingURL: any;
  leftMiddleURL: any;
  leftIndexURL: any;
  leftThumbURL: any;
  rightLittleURL: any;
  rightRingURL: any;
  rightMiddleURL: any;
  rightIndexURL: any;
  rightThumbURL: any;

  leftLittleCurrentFile: File;
  leftRingCurrentFile: File;
  leftMiddleCurrentFile: File;
  leftIndexCurrentFile: File;
  leftThumbCurrentFile: File;
  rightLittleCurrentFile: File;
  rightRingCurrentFile: File;
  rightMiddleCurrentFile: File;
  rightIndexCurrentFile: File;
  rightThumbCurrentFile: File;
      
  // formName;
  // formAddress;
  // formCity;
  // formState;
  // formZip;
  // formPhone;
  // formSsid;
  // formDob;

  formData: FormGroup;

  jsonResponse: JSON;

  message: any;
  succeed: boolean;
  response = false;

  responseJSONObj: result;

  fileInfos: Observable<any>;

  pipe = new DatePipe('en-US');

  needHelp: boolean;

  constructor(private uploadService: UploadProfileService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit() 
  {
    this.needHelp = false;

    this.formData = this.formBuilder.group({
      'name': '',
      'address': '',
      'city': '',
      'state': '',
      'zip': '',
      'phone': '',
      'ssid': '',
      'dob': ''
    });

    this.leftLittleCurrentFile = null;
    this.leftRingCurrentFile = null;
    this.leftMiddleCurrentFile = null;
    this.leftIndexCurrentFile = null;
    this.leftThumbCurrentFile = null;
    this.rightLittleCurrentFile = null;
    this.rightRingCurrentFile = null;
    this.rightMiddleCurrentFile = null;
    this.rightIndexCurrentFile = null;
    this.rightThumbCurrentFile = null;

  }  

  selectLeftLittleFile(event) 
  {
    this.leftLittleFileList = event.target.files;
    this.leftLittleCurrentFile = this.leftLittleFileList.item(0);
    var reader = new FileReader();
    reader.readAsDataURL(this.leftLittleCurrentFile); 
    reader.onload = (_event) => 
    { 
      this.leftLittleURL = reader.result; 
    }
  }

  selectLeftRingFile(event) 
  {
    this.leftRingFileList = event.target.files;
    this.leftRingCurrentFile = this.leftRingFileList.item(0);
    var reader = new FileReader();
    reader.readAsDataURL(this.leftRingCurrentFile); 
    reader.onload = (_event) => 
    { 
      this.leftRingURL = reader.result; 
    }
  }

  selectLeftMiddleFile(event) 
  {
    this.leftMiddleFileList = event.target.files;
    this.leftMiddleCurrentFile = this.leftMiddleFileList.item(0);
    var reader = new FileReader();
    reader.readAsDataURL(this.leftMiddleCurrentFile); 
    reader.onload = (_event) => 
    { 
      this.leftMiddleURL = reader.result; 
    }
  }

  selectLeftIndexFile(event) 
  {
    this.leftIndexFileList = event.target.files;
    this.leftIndexCurrentFile = this.leftIndexFileList.item(0);
    var reader = new FileReader();
    reader.readAsDataURL(this.leftIndexCurrentFile); 
    reader.onload = (_event) => 
    { 
      this.leftIndexURL = reader.result; 
    }
  }

  selectLeftThumbFile(event) 
  {
    this.leftThumbFileList = event.target.files;
    this.leftThumbCurrentFile = this.leftThumbFileList.item(0);
    var reader = new FileReader();
    reader.readAsDataURL(this.leftThumbCurrentFile); 
    reader.onload = (_event) => 
    { 
      this.leftThumbURL = reader.result; 
    }
  }

  selectRightLittleFile(event) 
  {
    this.rightLittleFileList = event.target.files;
    this.rightLittleCurrentFile = this.rightLittleFileList.item(0);
    var reader = new FileReader();
    reader.readAsDataURL(this.rightLittleCurrentFile); 
    reader.onload = (_event) => 
    { 
      this.rightLittleURL = reader.result; 
    }
  }

  selectRightRingFile(event) 
  {
    this.rightRingFileList = event.target.files;
    this.rightRingCurrentFile = this.rightRingFileList.item(0);
    var reader = new FileReader();
    reader.readAsDataURL(this.rightRingCurrentFile); 
    reader.onload = (_event) => 
    { 
      this.rightRingURL = reader.result; 
    }
  }

  selectRightMiddleFile(event) 
  {
    this.rightMiddleFileList = event.target.files;
    this.rightMiddleCurrentFile = this.rightMiddleFileList.item(0);
    var reader = new FileReader();
    reader.readAsDataURL(this.rightMiddleCurrentFile); 
    reader.onload = (_event) => 
    { 
      this.rightMiddleURL = reader.result; 
    }
  }

  selectRightIndexFile(event) 
  {
    this.rightIndexFileList = event.target.files;
    this.rightIndexCurrentFile = this.rightIndexFileList.item(0);
    var reader = new FileReader();
    reader.readAsDataURL(this.rightIndexCurrentFile); 
    reader.onload = (_event) => 
    { 
      this.rightIndexURL = reader.result; 
    }
  }

  selectRightThumbFile(event) 
  {
    this.rightThumbFileList = event.target.files;
    this.rightThumbCurrentFile = this.rightThumbFileList.item(0);
    var reader = new FileReader();
    reader.readAsDataURL(this.rightThumbCurrentFile); 
    reader.onload = (_event) => 
    { 
      this.rightThumbURL = reader.result; 
    }
  }

  shouldBeDisabled()
  {
    if (this.leftLittleFileList && this.leftRingFileList && this.leftMiddleFileList && this.leftIndexFileList
      && this.leftThumbFileList && this.rightLittleFileList && this.rightRingFileList && this.rightMiddleFileList
      && this.rightIndexFileList && this.rightThumbFileList) 
    {
      return false;
    }
    else
    {
      return true;
    }
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

  upload(data) 
  {
    

    this.uploadService.upload(
      this.leftLittleCurrentFile, 
      this.leftRingCurrentFile,
      this.leftMiddleCurrentFile,
      this.leftIndexCurrentFile,
      this.leftThumbCurrentFile,
      this.rightLittleCurrentFile,
      this.rightRingCurrentFile,
      this.rightMiddleCurrentFile,
      this.rightIndexCurrentFile,
      this.rightThumbCurrentFile,
      this.formData.get('name').value,
      this.formData.get('address').value,
      this.formData.get('city').value,
      this.formData.get('state').value,
      this.formData.get('zip').value,
      this.formData.get('phone').value,
      this.formData.get('ssid').value,
      this.pipe.transform(this.formData.get('dob').value, 'shortDate')
      ).subscribe(
      event => 
      {
        if (event instanceof HttpResponse) 
        {
          this.jsonResponse = event.body;

          this.message = event.body.message;
          this.succeed = event.body.succeed;

          if (this.succeed) 
          {
            this._snackBar.open(event.body.message + " ID assigned: " + event.body.id, "OK", {
              duration: 10000,
            });
          }
          else 
          {
            this._snackBar.open(event.body.message, "OK", {
              duration: 10000,
            });
          }

          this.fileInfos = this.uploadService.getFiles();

          this.responseJSONObj = <result>event.body;
          this.response = true;
        }
      },
      err => {
        this.message = 'Could not upload the file!';
        this.leftLittleCurrentFile = undefined;
        this.leftRingCurrentFile = undefined;
        this.leftMiddleCurrentFile = undefined;
        this.leftIndexCurrentFile = undefined;
        this.leftThumbCurrentFile = undefined;
        this.rightLittleCurrentFile = undefined;
        this.rightRingCurrentFile = undefined;
        this.rightMiddleCurrentFile = undefined;
        this.rightIndexCurrentFile = undefined;
        this.rightThumbCurrentFile = undefined;
      });
  
    
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
  score: number;
  time: number;
}
