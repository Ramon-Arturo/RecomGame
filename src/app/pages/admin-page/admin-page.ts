import { metadataList } from './../../models/metadataList';
import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { NavComponent } from '../../components/nav-component/nav-component';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InfogameService } from '../../services/infogame.service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-admin-page',
  imports: [
    NavComponent,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonToggleModule,
  ],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.css',
})
export class AdminPage implements OnInit {
  metadataList: metadataList[] = [];
  metadataDataSource: MatTableDataSource<metadataList>;
  displayedColumns: string[] = [
    'idToken',
    'tokenName',
    'metadataType',
    'isRelevant',
    'modifiedAt',
    'createdAt',
    'actions',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private infogameService: InfogameService) {
    this.metadataDataSource = new MatTableDataSource(this.metadataList);
  }

  ngOnInit(): void {
    try {
      this.infogameService.getmetadataList().subscribe((data) => {
        this.metadataList = data;
        this.metadataDataSource = new MatTableDataSource(this.metadataList);

        console.log('metadataList obtenida en admin-page:', this.metadataList);
        this.applyPaginator();
      });
    } catch (error) {
      console.error('Error al obtener metadataLsit: ', error);
    }
  }

  applyPaginator() {
    this.metadataDataSource.paginator = this.paginator;
    this.metadataDataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.metadataDataSource.filter = filterValue.trim().toLowerCase();

    if (this.metadataDataSource.paginator) {
      this.metadataDataSource.paginator.firstPage();
    }
  }

  togglebutton(row: metadataList) {
    row.isRelevant = !row.isRelevant;
    console.log('Toggled isRelevant for', row);
    try {
      this.infogameService.updateMetadata(row).subscribe((updatedMetadata) => {
        console.log('Metadata updated successfully:', updatedMetadata);
        // this.ngOnInit();
      });
    } catch (error) {
      console.error('Error al actualizar la metadata: ', error);
    }
  }
}
