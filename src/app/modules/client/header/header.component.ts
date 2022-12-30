import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenu:boolean = true;
  isLoginShow:boolean = false;
  constructor(
    private clientService : ClientService
  ) { }

  ngOnInit(): void {
    this.getLogos();
  }

  onResize(event){
    if(event.target.innerWidth > 991){
      this.isMenu = true;
    }else{
      this.isMenu = false;
    }

    if(event.target.innerWidth < 991){
      this.isLoginShow = true;
    }else{
      this.isLoginShow = false;
    }
  }

  
  async getLogos(){
    const res = await this.clientService.getLogo().toPromise()
    console.log("Logo : ",res)
  }

}
