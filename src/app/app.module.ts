import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { UsersService } from './shared/services/users.service';
import { UsersComponent } from './system/users/users.component';
import { UserDetailComponent } from './system/user-detail/user-detail.component';
import { UsersFilterComponent } from './system/users-filter/users-filter.component';
import { NotesComponent } from './system/user-detail/notes/notes.component';
import { MenuComponent } from './menu/menu.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { AddUserComponent } from './system/add-user/add-user.component';
import { BottomSheetComponent } from './system/bottom-sheet/bottom-sheet.component';
import { AddNoteComponent } from './system/user-detail/notes/add-note/add-note.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    UsersFilterComponent,
    NotesComponent,
    MenuComponent,
    DialogComponent,
    AddUserComponent,
    BottomSheetComponent,
    AddNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatSelectModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [UsersService, DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
