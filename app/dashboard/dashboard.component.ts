import {Component} from 'angular2/core';
import {HeaderComponent} from '../header/header.component';

@Component({
	selector: 'my-app',
	templateUrl: 'app/dashboard/dashboard.component.html',
	styleUrls: ['app/dashboard/dashboard.component.css'],
	directives: [HeaderComponent]
})
export class DashBoardComponent {

	title:string = "Tennis partner finder";
}