import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AppartementsComponent } from './components/appartements/appartements.component';
import { AppartementComponent } from './components/appartements/appartement/appartement.component';

//import firestore
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { EditAppartementComponent } from './modal/edit-appartement/edit-appartement.component';
import { CommandesComponent } from './components/commandes/commandes.component';
import { ListeCommandesComponent } from './components/liste-commandes/liste-commandes.component';
import { ListeAdminAppartementComponent } from './components/liste-admin-appartement/liste-admin-appartement.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    AppartementsComponent,
    AppartementComponent,
    EditAppartementComponent,
    CommandesComponent,
    ListeCommandesComponent,
    ListeAdminAppartementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
