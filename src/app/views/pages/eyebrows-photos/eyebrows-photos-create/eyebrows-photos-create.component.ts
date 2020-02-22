import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-eyebrows-photos-create',
  templateUrl: './eyebrows-photos-create.component.html',
  styleUrls: ['./eyebrows-photos-create.component.scss']
})
export class EyebrowsPhotosCreateComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  previusPhoto: any = "../../../../../assets/img/eyebrows-skeleton.jpg";
  nextPhoto: any = "../../../../../assets/img/eyebrows-skeleton.jpg";

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.fb.group({
      thirdCtrl: ['', Validators.required]
    });
  }

  onFileChange(event: any, name: string) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => { 
        if(event){
          if(name == "previusPhoto"){
            this.previusPhoto = event!.target!.result
          }
          if(name == "nextPhoto"){
            this.nextPhoto = event!.target!.result
          }
        }
      }
    }
  }

}
