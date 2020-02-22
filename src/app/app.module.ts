import {ToastModule} from 'ng-uikit-pro-standard';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {ViewsModule} from './views/views.module';
import {SharedModule} from './shared/shared.module';
import {MDBSpinningPreloader} from 'ng-uikit-pro-standard';
import { ToastrModule } from 'ngx-toastr';
import {AgmCoreModule} from '@agm/core';


// main layout
import {NavigationModule} from './main-layout/navigation/navigation.module';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NavigationModule,
        FormsModule,
        SharedModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        AngularFireAuthModule,
        ViewsModule,
        ToastModule.forRoot(),
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'your key here'
        })
    ],
    providers: [MDBSpinningPreloader, AuthService],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
