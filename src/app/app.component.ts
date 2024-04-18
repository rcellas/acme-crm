import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { DashboardComponent } from './dashboard/dashboard.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, NavbarComponent,DashboardComponent]
})
export class AppComponent {
  title = 'acme-crm';
}
