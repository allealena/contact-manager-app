import { Note } from '../../shared/models/note.model';

export class User {
	constructor(
        public name: string,
        public avatar: string,
        public bio: string,
        public notes: Note[],
        public id?: number) {
		
	}
}