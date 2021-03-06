import { UserData } from "./../../store/models/auth.model";
import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as M from "materialize-css";
import { DoctorserviceService } from "../doctorservice.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-doctor-dashboard",
  templateUrl: "./doctor-dashboard.component.html",
  styleUrls: ["./doctor-dashboard.component.css"]
})
export class DoctorDashboardComponent implements OnInit, AfterViewInit {
  doctor_profile: UserData;
  patient_status = true;
  loading = true;
  patients_profile: UserData[];

  constructor(
    private doctorservice: DoctorserviceService,
    private authservice: AuthService
  ) {}

  ngOnInit() {
    this.doctorservice.getdata().subscribe(patients => {
      console.log(patients);
      this.patients_profile = patients;
      if (this.patients_profile.length == 0) {
        this.patient_status = false;
      }
      this.loading = false;
    });

    this.doctor_profile = this.doctorservice.userData;
    console.log(this.patient_status, "sahil");
  }
  ngAfterViewInit(): void {
    setTimeout(function() {
      // var elem = document.querySelector(".sidenav");
      // var instance = M.Sidenav.init(elem);
      var instance = M.AutoInit();
    }, 0);
  }

  async logout() {
    await this.authservice.logout();
  }
}
