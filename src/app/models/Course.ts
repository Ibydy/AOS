import {Common} from './Common';
import * as moment from 'moment';
import {Mark} from './Mark';

export class Course extends Common {
	public name: string = 'longlonglonglonglonglonglonglonglonglonglonglong';
	private duration: moment.Moment;
	private isEnded: boolean;
	private rating: number = 4;
	private marks: Mark[] = [];

	public getName = (): string => this.name;
	public setName = (name: string): string => this.name = name;
	public getDuration = (): moment.Moment => this.duration;
	public setDuration = (duration): moment.Moment => this.duration = duration;
	public getIsEnded = (): boolean => this.isEnded;
	public setIsEnded = (isEnded): boolean => this.isEnded = isEnded;
	public getRating = (): number => this.rating;

	public addMark = (mark: Mark): void => {
		this.marks.push(mark);
		this.setRating();
	};

	private setRating = (): void => {
		let marksSum = 0;
		this.marks.forEach((mark) => marksSum += mark.getRaiting());
		this.rating = marksSum / this.marks.length;
	};
}
