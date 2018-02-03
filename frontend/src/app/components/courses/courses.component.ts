import {Component, OnInit} from '@angular/core';
import {Course} from '../../models/Course';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
	public courses = [
		new Course(), new Course(), new Course(), new Course(),
		new Course(), new Course(), new Course(), new Course(),
		new Course(), new Course(), new Course(), new Course(),
		new Course(), new Course(), new Course(), new Course(),
		new Course(), new Course(), new Course(), new Course()];
	public bestCourses = [
		new Course(), new Course(), new Course(), new Course(),
		new Course(), new Course(), new Course(), new Course(),
		new Course(), new Course(), new Course(), new Course(),
		new Course(), new Course(), new Course(), new Course(),
		new Course(), new Course(), new Course(), new Course()];

}
