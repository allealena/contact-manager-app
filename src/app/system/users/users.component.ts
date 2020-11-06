import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user.model';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit, OnDestroy {

    constructor(
        private usersService: UsersService,
        private iconRegistry: MatIconRegistry, 
        private sanitizer: DomSanitizer,
        public dialog: MatDialog
    	) {
            iconRegistry.addSvgIconSet(
                sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/avatars.svg'));
    }

    s1: Subscription;
    
    users: User[] = [];
    selected: User = null;
    displayedUsers: User[] = [];

    ngOnInit() {

    	this.s1 = this.usersService.getUsers().subscribe((data: User[]) => {
    		this.users = data;
            this.displayedUsers = data;
    	})
    }

    selectUser (user: User): void {
        this.selected = user;
        this.usersService.changeSelectedUser(user);
    }

    updateUsersList (filteredUsers) {
        if (filteredUsers.length !== 0) {
            this.displayedUsers = filteredUsers;
        } else {
            this.displayedUsers = this.users;
        }
    }

    addUser () {
        const dialogRef = this.dialog.open(AddUserComponent);

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.users.push(result);   
            }
        });
    }

    ngOnDestroy() {
    	if (this.s1) {
    		this.s1.unsubscribe();
    	}
    }
}
