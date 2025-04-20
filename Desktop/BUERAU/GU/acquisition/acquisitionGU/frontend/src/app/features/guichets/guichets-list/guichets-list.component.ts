import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

interface Guichet {
  id: number;
  nom: string;
  adresse: string;
  telephone: string;
  email: string;
  statut: string;
}

@Component({
  selector: 'app-guichets-list',
  templateUrl: './guichets-list.component.html',
  styleUrls: ['./guichets-list.component.scss'],
})
export class GuichetsListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'nom',
    'adresse',
    'telephone',
    'email',
    'statut',
    'actions',
  ];
  dataSource: MatTableDataSource<Guichet>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Données de test
    const guichets: Guichet[] = [
      {
        id: 1,
        nom: 'Guichet Central',
        adresse: 'Yaoundé, Cameroun',
        telephone: '+237 222 22 22 22',
        email: 'central@minhdu.cm',
        statut: 'Actif',
      },
      {
        id: 2,
        nom: 'Guichet Douala',
        adresse: 'Douala, Cameroun',
        telephone: '+237 233 42 22 22',
        email: 'douala@minhdu.cm',
        statut: 'Actif',
      },
      {
        id: 3,
        nom: 'Guichet Kribi',
        adresse: 'Kribi, Cameroun',
        telephone: '+237 233 42 22 23',
        email: 'kribi@minhdu.cm',
        statut: 'Inactif',
      },
      {
        id: 4,
        nom: 'Guichet Kribi',
        adresse: 'Kribi, Cameroun',
        telephone: '+237 233 42 22 23',
        email: 'kribi@minhdu.cm',
        statut: 'Inactif',
      },
      {
        id: 5,
        nom: 'Guichet Kribi',
        adresse: 'Kribi, Cameroun',
        telephone: '+237 233 42 22 23',
        email: 'kribi@minhdu.cm',
        statut: 'Inactif',
      },
      {
        id: 6,
        nom: 'Guichet Kribi',
        adresse: 'Kribi, Cameroun',
        telephone: '+237 233 42 22 23',
        email: 'kribi@minhdu.cm',
        statut: 'Inactif',
      },
      {
        id: 7,
        nom: 'Guichet Kribi',
        adresse: 'Kribi, Cameroun',
        telephone: '+237 233 42 22 23',
        email: 'kribi@minhdu.cm',
        statut: 'Inactif',
      },
      {
        id: 8,
        nom: 'Guichet Kribi',
        adresse: 'Kribi, Cameroun',
        telephone: '+237 233 42 22 23',
        email: 'kribi@minhdu.cm',
        statut: 'Inactif',
      },
      {
        id: 9,
        nom: 'Guichet Kribi',
        adresse: 'Kribi, Cameroun',
        telephone: '+237 233 42 22 23',
        email: 'kribi@minhdu.cm',
        statut: 'Inactif',
      },
      {
        id: 10,
        nom: 'Guichet Kribi',
        adresse: 'Kribi, Cameroun',
        telephone: '+237 233 42 22 23',
        email: 'kribi@minhdu.cm',
        statut: 'Inactif',
      },
    ];
    this.dataSource = new MatTableDataSource(guichets);
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
