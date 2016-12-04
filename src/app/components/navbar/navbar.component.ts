import { Component } from '@angular/core';
import { AppProfileService } from '../../service/app.auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})
export class NavbarComponent {

    public constructor(protected app_auth: AppProfileService) { }

}