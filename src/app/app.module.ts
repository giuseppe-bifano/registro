import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrazioneComponent } from './componenti/registrazione/registrazione.component';
import { MatFormFieldModule, MatInputModule, MatGridListModule, MatButtonModule} from '@angular/material';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> Stashed changes




@NgModule({
  declarations: [
    AppComponent,
    RegistrazioneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    HttpClientModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes

