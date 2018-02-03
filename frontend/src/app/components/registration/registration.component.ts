import {Component, OnInit} from '@angular/core';
import {User} from './../../models/User';
import {HttpClient} from "@angular/common/http";

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
	public login: string;
	public password: string;

	constructor(private http:HttpClient) {
	}

	ngOnInit() {
	}

	public registrate = ():void => {
		const user = new User(this.login, this.password);
		this.http.post('http://localhost:3000/registration',user).subscribe((res) => {
			debugger
		}, (err) => {
			debugger
		})
	}

}
