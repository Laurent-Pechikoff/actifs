import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';
import { ICommande } from 'src/app/models/commande.model';

@Component({
  selector: 'app-liste-commandes',
  templateUrl: './liste-commandes.component.html',
  styleUrls: ['./liste-commandes.component.scss']
})
export class ListeCommandesComponent implements OnInit {

commandes : ICommande[] = [];

  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.afficheToutesCommandes();
  }

  afficheToutesCommandes(){
    this.commandeService.getCommandes().subscribe((res: ICommande[])=>
    this.commandes = res);
    
  }
//calcul montant commande
calculPrixTotal(prix:number, quantite: number){
return prix*quantite;
}
}
