import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html'
})
export class ShowUsersComponent implements OnInit {

  users: any[] = [];

  startRecordsFrom: number = 0;

  recordsPerPage: number = 5;

  loading: boolean = true;

  totalUsers: number;

  constructor(
    private _userService: UserService
    ) {
    this.totalUsers = this._userService.getUsersSize();
  }

  ngOnInit() {
    this.getUsersCurrentPage();
  }

  changePage(startRecordsFrom: number){
    this.startRecordsFrom = startRecordsFrom;
    this.getUsersCurrentPage();
  }

  getUsersCurrentPage(){
    this.loading = true;
    this.users = this._userService.getUsers(this.startRecordsFrom, this.recordsPerPage);
    this.loading = false;
  }

  deleteUser(id: string){
    this._userService.deleteUser(id);
    this.totalUsers = this._userService.getUsersSize();
    this.getUsersCurrentPage();
  }
}
