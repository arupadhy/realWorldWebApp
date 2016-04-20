import {Component} from 'angular2/core';
import {HeaderComponent} from './header.component';

@Component({
	selector: 'my-app',
	templateUrl: 'app/dashboard.component.html',
	styleUrls: ['app/dashboard.component.css'],
	directives: [HeaderComponent]
})
export class DashBoardComponent {

	title:string = "Tennis partner finder";
}