import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

export function emailDomainValidator(control: AbstractControl) {
  let email = control.value;
  if (!email) {
    return null;
  }

  if (email && email.indexOf('@') !== -1) {
    let [_, domain] = email.split('@');

    if (domain !== 'gmail.com') {
      return { emailDomain: true };

    } else {
        return null;
      }

  }
  return { malformedEmail: true };
}

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {
  validatore: FormGroup;
  emails: FormArray;

  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit() {
    this.validatore = this.fb.group({
      nome: new FormControl('', [Validators.required]),
      cognome: new FormControl('', [Validators.required]),
      emails: new FormArray([], [Validators.required, emailDomainValidator])
    });
    this.addEmail();
    this.api.getRegistro();

  }

  createEmail(): FormGroup {
    return this.fb.group({
      email: new FormControl('', [Validators.required, emailDomainValidator])
    });
  }

  removeEmail(indice: number): void {
    this.emails.removeAt(indice);
  }

  addEmail(): void {
    this.emails = this.validatore.get('emails') as FormArray;
    this.emails.push(this.createEmail());
    // this.validEmail.setControl('emails', this.validEmail.get('emails') as FormArray);
    // console.log(this.validEmail);
  }

}
