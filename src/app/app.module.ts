import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrazioneComponent } from './componenti/registrazione/registrazione.component';
import { MatFormFieldModule, MatInputModule, MatGridListModule, MatButtonModule} from '@angular/material';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< Updated upstream
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientModule } from '@angular/common/http';
=======
import { FlexLayoutModule } from '@angular/flex-layout';
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
<<<<<<< Updated upstream
    HttpClientModule,
=======
    MatButtonModule,
>>>>>>> Stashed changes
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

