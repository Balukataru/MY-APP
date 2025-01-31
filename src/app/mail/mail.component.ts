import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
  mails:any =[];
  constructor(private _mailservices:MailService){
    _mailservices.getmails().subscribe((data: any) => {
      this.mails =data;
}  )}

}
