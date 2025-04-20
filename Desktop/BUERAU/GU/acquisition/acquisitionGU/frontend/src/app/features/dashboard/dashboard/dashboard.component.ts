import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color, ScaleType } from '@swimlane/ngx-charts';

interface DashboardStats {
  totalDossiers: number;
  dossiersTrend: number;
  newDossiers: number;
  totalPaiements: number;
  paiementsTrend: number;
  paiementsPending: number;
  availableLogements: number;
  logementsTrend: number;
  totalLogements: number;
}

interface Activity {
  icon: string;
  iconColor: string;
  title: string;
  description: string;
  time: Date;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // Stats data
  stats: DashboardStats = {
    totalDossiers: 156,
    dossiersTrend: 12.5,
    newDossiers: 12,
    totalPaiements: 15700000,
    paiementsTrend: 8.3,
    paiementsPending: 5,
    availableLogements: 45,
    logementsTrend: -5.2,
    totalLogements: 200
  };

  // Chart configurations
  selectedPeriod = 'month';
  colorScheme: Color = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#673ab7', '#9c27b0', '#e91e63', '#ff5722']
  };

  // Chart data
  dossiersChartData = [
    {
      name: 'Dossiers',
      series: [
        { name: 'Jan', value: 120 },
        { name: 'Fév', value: 135 },
        { name: 'Mar', value: 142 },
        { name: 'Avr', value: 156 }
      ]
    }
  ];

  paiementsChartData = [
    { name: 'Payés', value: 65 },
    { name: 'En attente', value: 25 },
    { name: 'Retard', value: 10 }
  ];

  // Recent activities
  recentActivities: Activity[] = [
    {
      icon: 'folder',
      iconColor: '#673ab7',
      title: 'Nouveau dossier créé',
      description: 'Dossier #12458 - Jean Dupont',
      time: new Date()
    },
    {
      icon: 'payments',
      iconColor: '#4caf50',
      title: 'Paiement reçu',
      description: 'Paiement de 1,500,000 XAF - Marie Kouma',
      time: new Date(Date.now() - 3600000)
    },
    {
      icon: 'home',
      iconColor: '#ff9800',
      title: 'Attribution de logement',
      description: 'Logement #A123 attribué - Paul Biya',
      time: new Date(Date.now() - 7200000)
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    // TODO: Load real data from backend service
  }

  onPeriodChange() {
    // TODO: Update chart data based on selected period
    console.log('Period changed:', this.selectedPeriod);
  }

  viewPaymentDetails() {
    this.router.navigate(['/paiements']);
  }
}
