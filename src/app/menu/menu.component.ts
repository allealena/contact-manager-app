import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

import { User } from '../shared/models/user.model';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { UsersService } from '../shared/services/users.service';
import { BottomSheetComponent } from '../system/bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent {

    hiddenBtn: boolean = true;
    currentUser: User;

    constructor(
        public dialog: MatDialog,
        public dialogComp: DialogComponent,
        public userService: UsersService,
        public bottomSheet: MatBottomSheet
    	) { }

    openMenu () {
    	this.hiddenBtn = !this.hiddenBtn;
    	this.currentUser = this.userService.getSelectedUser();
    }

    openBottomSheet(): void {
        console.log(this.currentUser);
        const user = this.currentUser;
        this.bottomSheet.open(BottomSheetComponent, {data: user})
    }

    clearNotes () {
        console.log(this.currentUser);
        const user = this.currentUser;
        const dialogRef = this.dialog.open(DialogComponent, {data: user});

        dialogRef.afterClosed().subscribe(result => {
        	if (result === true) {
                user.notes = [];
        	}
        });
    }
}
