import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { PhotoI, UserI } from 'src/app/interface/user';
import { ServicesService } from '../user/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user$: UserI[] = [];
  photos$: any[] = [];

  constructor(
    private service: ServicesService
  ) { }
  ngOnInit(): void {
    this.getUser();
   
  }
  getUser() {
    this.service.getUser().subscribe((res) => { this.user$ = res });
  }

  onSelect(id:MatSelectChange) {
    
  }
 
}
