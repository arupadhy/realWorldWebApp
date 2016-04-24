import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {DashBoardComponent} from './dashboard/dashboard.component';
import {HeaderComponent} from './header/header.component';
import {RegistrationComponent} from './registration/registration.component';


@Component({
	selector: 'my-app',
	templateUrl: '/app/app.component.html',
	styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES,HeaderComponent],
	providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
		{
			path: '/home',
			name: 'Home',
			component: DashBoardComponent,
			useAsDefault: true
		},
		{
			path: '/register',
			name: 'Register',
			component: RegistrationComponent
		}
	])
export class AppComponent {

}