import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from "../../components/nav-component/nav-component";

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, NavComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {


}
