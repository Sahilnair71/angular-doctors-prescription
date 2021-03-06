import { NavbarRoute } from "./../../models/navbar.model";
import { AdminService } from "./../admin.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
})
export class AdminComponent implements OnInit {
  constructor(public adminService: AdminService) {}

  routes: NavbarRoute[] = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      name: "Medicine",
      path: "/admin/medicines",
    },
    {
      name: "Add Medicine",
      path: "/admin/add-medicine",
    },
  ];

  ngOnInit() {}
}
