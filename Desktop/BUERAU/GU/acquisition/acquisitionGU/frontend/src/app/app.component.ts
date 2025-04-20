import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';

interface Notification {
  type: string;
  icon: string;
  message: string;
  date: Date;
}

interface DashboardStats {
  totalClients: number;
  totalLogements: number;
  totalDossiers: number;
  totalPaiements: number;
  logementsDisponibles: number;
  dossiersEnCours: number;
  montantTotalPaiements: number;
  tauxOccupation: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // Page title
  pageTitle = 'Tableau de bord MINHDU';

  // Current date for last update
  today = new Date();

  // User information
  userName = 'John Doe';
  userAvatar = 'assets/images/avatar.png';
  currentGuichet = 'Guichet Central';

  // Dashboard statistics
  stats: DashboardStats = {
    totalClients: 95,
    totalLogements: 150,
    totalDossiers: 120,
    totalPaiements: 85,
    logementsDisponibles: 45,
    dossiersEnCours: 25,
    montantTotalPaiements: 75000000,
    tauxOccupation: 70,
  };

  // Notifications
  notifications: Notification[] = [
    {
      type: 'info',
      icon: 'info',
      message: 'Nouveau dossier créé par John Doe',
      date: new Date(),
    },
    {
      type: 'success',
      icon: 'check_circle',
      message: 'Paiement validé pour le dossier #12345',
      date: new Date(Date.now() - 3600000),
    },
    {
      type: 'warning',
      icon: 'warning',
      message: 'Dossier #12346 en attente de validation',
      date: new Date(Date.now() - 7200000),
    },
  ];

  // Chart filters
  selectedPeriod = 'this_month';
  selectedView = 'month';

  // Données pour les graphiques
  evolutionDossiersData = [
    {
      name: 'Dossiers',
      series: [
        { name: 'Jan', value: 10 },
        { name: 'Fév', value: 15 },
        { name: 'Mar', value: 20 },
        { name: 'Avr', value: 25 },
        { name: 'Mai', value: 30 },
        { name: 'Juin', value: 35 },
      ],
    },
  ];

  repartitionLogementsData = [
    {
      name: 'Disponibles',
      value: 45,
    },
    {
      name: 'Occupés',
      value: 105,
    },
  ];

  typePaiementsData = [
    { name: 'Espèces', value: 30 },
    { name: 'Virement', value: 40 },
    { name: 'Chèque', value: 30 },
  ];

  constructor(public router: Router, public authService: AuthService) {}

  ngOnInit() {
    // Initialisation des données si nécessaire
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

  // Navigation methods
  navigateToClients() {
    this.router.navigate(['/clients/list']);
  }

  navigateToLogements() {
    this.router.navigate(['/logements/list']);
  }

  navigateToDossiers() {
    this.router.navigate(['/dossiers/list']);
  }

  navigateToPaiements() {
    this.router.navigate(['/paiements/list']);
  }
}
