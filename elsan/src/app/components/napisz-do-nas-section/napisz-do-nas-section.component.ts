import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-napisz-do-nas-section',
  templateUrl: './napisz-do-nas-section.component.html',
  styleUrls: ['./napisz-do-nas-section.component.scss']
})
export class NapiszDoNasSectionComponent implements OnInit {

  form: FormGroup

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

  async onSendMessage() {
    const message = await this.getMessage();
    console.log(message);

    await this.sendMessage(message);

    //wyczysc form jezeli powiodlo sie sukcesem i wyswietl powiadomienie
    //jak sie nie powiedznie wyswietl powiadomienie
  }

  async sendMessage(message: Message) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    await this.http.post('https://formspree.io/f/xyylekjy',
      {
        name: message.name,
        replyto: message.email,
        message: message.content
      },
      { 'headers': headers }).subscribe(
        response => {
          console.log(response);
        }
      );
  }

  async getMessage(): Promise<Message> {
    const o_message: Message = {
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      content: this.form.get('message').value,

    };

    return o_message;
  }
}

