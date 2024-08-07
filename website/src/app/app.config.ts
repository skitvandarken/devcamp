import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
 
  providers: [provideHttpClient(), provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"devcampx","appId":"1:605992592654:web:7210994ecb49e1c09e635f","storageBucket":"devcampx.appspot.com","apiKey":"AIzaSyAGtI8703CWvxxXbTw69R1RNXzDqoKQ_LY","authDomain":"devcampx.firebaseapp.com","messagingSenderId":"605992592654"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
