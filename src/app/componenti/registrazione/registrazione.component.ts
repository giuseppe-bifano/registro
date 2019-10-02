import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Materie } from 'src/app/models/materie';
import { Classi } from 'src/app/models/classi';

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
  materie: Materie[] = [
    {materia: 'matematica-0', materiaValue: 'Matematica'},
    {materia: 'italiano-1', materiaValue: 'Italiano'},
    {materia: 'arte-2', materiaValue: 'Arte'}
  ];
  classi: Classi[] = [
    {classe: 'primo-0', classeValue: 'Primo'},
    {classe: 'secondo-0', classeValue: 'Secondo'},
    {classe: 'terzo-0', classeValue: 'Terzo'},
    {classe: 'quarto-0', classeValue: 'Quarto'},
    {classe: 'quinto-0', classeValue: 'Quinto'}
  ];


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
