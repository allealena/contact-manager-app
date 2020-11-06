import { Component, OnInit, Input} from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { UsersService } from '../../../shared/services/users.service';
import { User } from '../../../shared/models/user.model';
import { Note } from '../../../shared/models/note.model';
import { Message } from '../../../shared/models/message.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.less', '../../../shared/styles/message-styles.less']
})
export class NotesComponent implements OnInit {

	@Input() user: User | null;
	notes: Note[] | null;
	message: Message;

    constructor(private userService: UsersService) { }

    ngOnInit(): void {
      this.userService.selectedUserDetails$.subscribe(
        selectedUser => {
          this.user = selectedUser;
          this.notes = this.user.notes;}
      );
    	
    	this.message = new Message('danger', '');
      console.log(this.notes);
  }

  private showMessage (text: string, type: string = 'danger') {
  	this.message = new Message(type, text);
  	window.setTimeout(() => {
  		this.message.text = '';
  	}, 5000);
  }
 
  removeNote (note: Note): void {
  	let foundIndex = this.user.notes.indexOf(note);
  	this.user.notes.splice(foundIndex, 1);
  	this.showMessage('Note was removed');
  }

}
