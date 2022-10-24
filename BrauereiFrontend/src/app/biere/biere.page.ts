import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBier } from '../interfaces/IBier';
import { BiereService } from '../services/biere.service';

@Component({
  selector: 'app-biere',
  templateUrl: './biere.page.html',
  styleUrls: ['./biere.page.scss'],
})
export class BierePage implements OnInit {

  public biere:IBier[];
  constructor(private bierService: BiereService, private router:Router) { }

  ngOnInit() {
    this.biere = [];
    this.getBiere();
    console.log(this.biere);
  }

  getBiere() {
    this.bierService.getBiere().subscribe((res) => {
      this.biere = res;
    });
  }
}
