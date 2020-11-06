import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogRef} from '@angular/material/dialog';

import { User } from '../../shared/models/user.model';
import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.less']
})
export class AddUserComponent implements OnInit {

    avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];
    form: FormGroup;

    constructor(
  	    private iconRegistry: MatIconRegistry,
  	    private sanitizer: DomSanitizer,
  	    private usersService: UsersService,
  	    public dialogRef: MatDialogRef<AddUserComponent>) { 
            iconRegistry.addSvgIconSet(
                sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/avatars.svg'));
    }

    ngOnInit(): void {
  	    this.form = new FormGroup({
  	    	'firstName': new FormControl(null, [Validators.required]),
  	    	'lastName': new FormControl(null, [Validators.required]),
  	    	'bio': new FormControl(null, [Validators.required]),
  	    	'avatar': new FormControl(null, [Validators.required])
  	    });
    }

    onSubmit () {
    	
        const {firstName, lastName, bio, avatar} = this.form.value;
        const name = firstName + " " + lastName;
        const user = new User(name, avatar, bio, []);
        this.usersService.addNewUser(user);   	
    	  this.dialogRef.close(user);

    	/*this.usersService.createNewUser(user)
    	    .subscribe(() => {
                this.router.navigate(['/login'], {
                	queryParams: {
                		nowCanLogin: true
                	}
                });
    	    });*/
    }
}
