import { Component,  ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppartementService } from 'src/app/services/appartement.service';
import { NgForm } from '@angular/forms';
import { IAppartement } from 'src/app/models/appartement.model';

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.scss']
})
export class AppartementComponent implements OnInit {

  appartement: IAppartement ={
    name:"",
    surface:0,
    prix: 0,
    disponible: false
  };
  constructor(private appartementService:AppartementService) { }
  appartements: IAppartement[] = [];
  ngOnInit(): void {
  }

  ajouterAppart(form: NgForm){
    
    this.appartementService.addAppartement(form.value).
      then(() => form.reset());
  }
  modifAppartement(appartement: IAppartement){
    this.appartement = appartement;
  }


}
