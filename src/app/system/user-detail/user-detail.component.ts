import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user.model';
import { NotesComponent } from './notes/notes.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.less']
})
export class UserDetailComponent implements OnInit {
	user: User | null;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  	this.userService.selectedUserDetails$.subscribe(
        selectedUser => this.user = selectedUser
  		);
  }

}
