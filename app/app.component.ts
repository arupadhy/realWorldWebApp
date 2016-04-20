import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {DashBoardComponent} from './dashboard.component';


@Component({
	selector: 'my-app',
	templateUrl: '/app/app.component.html',
	styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
		{
			path: '/home',
			name: 'Home',
			component: DashBoardComponent,
			useAsDefault: true
		}
	])
export class AppComponent {

}