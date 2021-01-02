import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/service/upload.service';
import { ToastrService } from 'ngx-toastr';
import {
  faPhone,
  faMapMarkedAlt,
  faEnvelopeOpen
 } from "@fortawesome/free-solid-svg-icons";



@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  array = [];


  faEnvelopeOpen = faEnvelopeOpen;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;

  constructor(
    private service: UploadService,
    private toast: ToastrService) { }

  ngOnInit(): void {

    this.service.getUserData().subscribe((data: any) => {
      this.array = data?.data;
      console.log(this.array);
    }, (err) => {
      this.toast.error(err.message,"",{
        closeButton:true
      });
    });
    
  }

  onClick(data) {
    this.toast.success('success');
  }

}
