import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Note } from '../../../../shared/models/note.model';
import { User } from '../../../../shared/models/user.model';
import { UsersService } from '../../../../shared/services/users.service';

@Component({
    selector: 'app-add-note',
    templateUrl: './add-note.component.html',
    styleUrls: ['./add-note.component.less']
})
export class AddNoteComponent implements OnInit {

    @Input() user: User | null;
    newNote: Note | null;
    form: FormGroup;

    constructor(
    	private usersService: UsersService) { }

    ngOnInit(): void {
    	this.form = new FormGroup({
  	    	'title': new FormControl(null, [Validators.required]),
  	    	'date': new FormControl(null)
  	    });
    }

    onSubmit () {
    	console.log(2);
    	const {title, date} = this.form.value;
    	this.newNote = new Note(title, date);
    	this.user.notes.push(this.newNote);
    	this.usersService.changeUserData(this.user);
        this.form.reset();
    }

}
