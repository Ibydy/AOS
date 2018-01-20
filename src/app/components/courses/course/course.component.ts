import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../../models/Course';

@Component({
	selector: 'app-course',
	templateUrl: './course.component.html',
	styleUrls: ['./course.component.scss']
})
export class CourseComponent {
	@Input() public course: Course;
	@Input() public canBeEdited = false;
	public editing = false;
	public updateCourse = (): void => {
		this.onUpdateCourse(this.course);
	}

	@Input() private onUpdateCourse = (course: Course): void => null;

}
