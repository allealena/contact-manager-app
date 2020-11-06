import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';

import { User } from '../../shared/models/user.model';
import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.less']
})
export class BottomSheetComponent implements OnInit {
    
    currentUser: User;
    icons;

    constructor( public userService: UsersService,
    	         private bottomSheetRef: MatBottomSheetRef,
    	                iconRegistry: MatIconRegistry, 
    	                sanitizer: DomSanitizer
    	                ) {
        iconRegistry.addSvgIcon('google_plus', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/google_plus.svg'));
        iconRegistry.addSvgIcon('hangouts', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/hangouts.svg'));
        iconRegistry.addSvgIcon('phone', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/phone.svg'));
        iconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/twitter.svg'));
    }

    ngOnInit(): void {
  	    this.currentUser = this.userService.getSelectedUser();
  	    this.icons = [
  	    	{ name: 'google_plus', title: 'Google+'},
  	    	{ name: 'hangouts', title: 'Hangouts'},
  	    	{ name: 'phone', title: 'Phone'},
  	    	{ name: 'twitter', title: 'Twitter'},
  	    ]
    }

    openContact (event) {
        console.log(event);
        this.bottomSheetRef.dismiss();
    }

}
