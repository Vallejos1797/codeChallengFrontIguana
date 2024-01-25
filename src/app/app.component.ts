import {Component, inject, TemplateRef, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {ModalDismissReasons, NgbDatepickerModule, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {ManagementUsersComponent} from "./components/management-users/management-users.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatFormFieldModule, MatInputModule, MatTabsModule, MatTableModule, MatIconModule, MatButtonModule, MatPaginatorModule, ManagementUsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {


  title = 'front-code-challenge';

}
