import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

import { BaseApi } from '../base-api';
import { User } from '../models/user.model';

@Injectable()
export class UsersService extends BaseApi{

	private user: User; 

    constructor(public http: HttpClient) {
		super(http);
	}

	changeSelectedUser (currentUser: User | null): void {
		this.selectedUser.next(currentUser);
		this.user = currentUser;
	}

	getSelectedUser () {
		return this.user;
	}

	getUsers (): Observable<User[]> {
		return this.get('users');
	}

	addNewUser (user: User): Observable<User> {
		console.log(user);
        return this.post('users', user);
	}

	changeUserData (user: User): Observable<User> {
		return this.put('users/' + user.id, user);
	}

	private selectedUser = new Subject<User | null>();
	selectedUserDetails$ = this.selectedUser.asObservable();
}

