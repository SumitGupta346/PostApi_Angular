import { Component } from '@angular/core';
import { UsersdataService } from './services/usersdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apiApp';
  users:any;
  constructor(private userdata:UsersdataService)
  {
    this.userdata.users().subscribe((data)=>
    {
      this.users=data
    });
  }
  getUserFormData(data:any){
    // console.warn(data);
    this.userdata.saveUsers(data).subscribe((result)=>{
      console.warn(result)

    })

  }
}
