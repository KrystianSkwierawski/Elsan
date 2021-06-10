import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var grecaptcha: any;

@Component({
  selector: 'app-napisz-do-nas-section',
  templateUrl: './napisz-do-nas-section.component.html',
  styleUrls: ['./napisz-do-nas-section.component.scss']
})
export class NapiszDoNasSectionComponent implements OnInit {

  form: FormGroup
  siteKey = "6Lf4fNQaAAAAAKZnCBdho21-JcTm_FFqlqJtSNwL";

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { };

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
      }],
      recaptcha: ['', Validators.required]
    });
  }


  getErrorMessageFieldPhoneNumber() {
    const field = this.form.get('phoneNumber');

    if (field.hasError('required')) {
      return 'Number telefonu jest wymagany';
    }

    if (field.hasError('pattern')) {
      return 'Number telefonu musi być prawidłowy - {256789572} lub {256 789 572}';
    }

    return '';
  }

  onSendMessage(message) {
   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post('https://formspree.io/f/xyylekjy',
      {
        name: message.name,
        replyto: message.email,
        message: message.content
      },
      { 'headers': headers }).subscribe(
        response => {
          this.handleResponse(response);
        }
      );
  }

  handleResponse(response: any) {
    if (response.ok) {
      this.resetForm();

      alert("Wiadomość wysłana");
      return;
    }

    alert("Wiadomość nie wysłana");
  }

  resetForm() {
    const form: HTMLFormElement = <HTMLFormElement>document.querySelector(".napisz-do-nas__form");

    if (form) {
      form.reset();
      this.form.get('topic').setValue("informacje ogólne");
      grecaptcha.reset();
    }
  }

}

