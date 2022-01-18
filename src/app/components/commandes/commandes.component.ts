import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent implements OnInit {

  constructor(private commandeService:CommandeService) { }

  ngOnInit(): void {
  }

   //ajouter une commande
ajouterCommande(form:NgForm){
  this.commandeService.postCommande(form.value).then(() => form.reset);
}



}
