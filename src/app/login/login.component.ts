import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { cache } from "bfast";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.nullValidator, Validators.required]],
      phone: ["", [Validators.nullValidator, Validators.required]],
      business_type: ["", [Validators.nullValidator, Validators.required]]
    });
  }
  async pageOne() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      await cache().set("user", this.loginForm.value);
      this.router.navigateByUrl("/one");
    }
  }
}
