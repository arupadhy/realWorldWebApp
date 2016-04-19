import {Component} from 'angular2/core';
import {HeaderComponent} from './header.component';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html',
	styleUrls: ['app/app.component.css'],
	directives: [HeaderComponent]
})
export class AppComponent {

	title:string = "Tennis partner finder";
}