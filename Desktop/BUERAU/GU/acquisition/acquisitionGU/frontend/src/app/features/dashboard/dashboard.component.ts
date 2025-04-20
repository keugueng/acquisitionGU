import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  stats = {
    totalLogements: 0,
    logementsDisponibles: 0,
    tauxOccupation: 0,
    dossiersEnCours: 0,
    totalDossiers: 0,
    totalClients: 0,
    montantTotalPaiements: 0,
    totalPaiements: 0,
  };

  today = new Date();
  selectedView = 'month';

  evolutionDossiersData = [
    {
      name: 'Dossiers traités',
      series: [
        { name: 'Jan', value: 20 },
        { name: 'Fév', value: 35 },
        { name: 'Mar', value: 45 },
        { name: 'Avr', value: 40 },
        { name: 'Mai', value: 55 },
        { name: 'Juin', value: 60 },
      ],
    },
  ];

  repartitionLogementsData = [
    {
      name: 'Occupés',
      series: [
        { name: 'Type A', value: 25 },
        { name: 'Type B', value: 30 },
        { name: 'Type C', value: 15 },
      ],
    },
    {
      name: 'Disponibles',
      series: [
        { name: 'Type A', value: 5 },
        { name: 'Type B', value: 8 },
        { name: 'Type C', value: 12 },
      ],
    },
  ];

  typePaiementsData = [
    { name: 'Espèces', value: 45 },
    { name: 'Virement', value: 35 },
    { name: 'Chèque', value: 20 },
  ];

  constructor() {}

  ngOnInit(): void {
    // TODO: Charger les données réelles depuis le service
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    // Simulation de chargement des données
    this.stats = {
      totalLogements: 150,
      logementsDisponibles: 25,
      tauxOccupation: 83,
      dossiersEnCours: 45,
      totalDossiers: 200,
      totalClients: 180,
      montantTotalPaiements: 75000000,
      totalPaiements: 350,
    };
  }
}
