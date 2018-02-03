import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ContentComponent} from './content/content.component';
import {CoursesComponent} from './components/courses/courses.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './appRoutes';
import { CourseComponent } from './components/courses/course/course.component';
import {FormsModule} from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ContentComponent,
		CoursesComponent,
		CourseComponent,
		RegistrationComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes),
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
