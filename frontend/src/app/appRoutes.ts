import {Routes} from '@angular/router';
import {CoursesComponent} from './components/courses/courses.component';
import {RegistrationComponent} from './components/registration/registration.component';

export const appRoutes: Routes = [
	{path: '', component: CoursesComponent},
	{path: 'registration', component: RegistrationComponent}
];
