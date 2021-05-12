import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-napisz-do-nas-section',
  templateUrl: './napisz-do-nas-section.component.html',
  styleUrls: ['./napisz-do-nas-section.component.scss']
})
export class NapiszDoNasSectionComponent implements OnInit {

  form: FormGroup

  constructor(private formBuilder: FormBuilder) { };

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      phoneNumber: ['', {
        validators: [Validators.required],
      }],
      topic: ['informacje ogólne', {
        validators: [Validators.required],
      }],
      email: ['', {
        validators: [Validators.required, Validators.email]
      }],
      message: ['', {
        validators: [Validators.required]
      }]
    });
  }


  getErrorMessageFieldPhoneNumber() {
    const field = this.form.get('phoneNumber');

    if (field.hasError('required')) {
      return 'Number telefonu jest wymagany';
    }

    if (field.hasError('pattern')) {
      return 'Number telefonu musi być prawidłowy {256789572} lub {256 789 572}';
    }

    return '';
  }

  sendMessage(){
    console.log(this.form);
  }
}
