import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-users-filter',
  templateUrl: './users-filter.component.html',
  styleUrls: ['./users-filter.component.less']
})
export class UsersFilterComponent implements OnInit {
	control = new FormControl();
  filteredUsersList: User[] = [];

	@Input() users: User[];
	@Output() onSearchUsers = new EventEmitter<User[]>();
	filteredUsers: Observable<User[]>;
    

    constructor() { }

    ngOnInit(): void {

  		this.filteredUsers = this.control.valueChanges
  		    .pipe(
  		    	startWith('')).subscribe(value => {
  		    		console.log(value);
  		    		this._filter(value);
  		    	})  		    
    }

    applyFilter () {
         this.onSearchUsers.emit(this.filteredUsersList);
    }

    private _filter(userName: string) {    	
    	console.log(this.filteredUsersList);
  	    const filterUserName = userName.toLowerCase();
  	    console.log(filterUserName);

  	    this.filteredUsersList = this.users.filter(user => user.name.toLowerCase().includes(filterUserName));
        this.applyFilter();
    }
}
