import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-recycling-sidebar',
  standalone: true,
  imports: [FormsModule, MatSidenavModule, MatCheckboxModule, MatButtonModule, NgForOf],
  template: `
    <div>
      <h3>Recycling Filters</h3>

      <div *ngFor="let filter of recyclingFilters">
        <mat-checkbox [(ngModel)]="filter.selected" id="filter-{{ filter.name }}">
          {{ filter.name }}
        </mat-checkbox>
      </div>

      <button mat-button (click)="clearFilters()">Clear</button>
      <button mat-button (click)="applyFilters()">Search</button>
    </div>
  `,
})
export class RecyclingSidebarComponent {
  @Output() filtersSubmit: EventEmitter<string[]> = new EventEmitter();

  recyclingFilters = [
    {name: 'Paper', selected: false},
    {name: 'Glass', selected: false},
    {name: 'Cloths', selected: false},
  ];

  clearFilters() {
    this.recyclingFilters.forEach(filter => filter.selected = false);
  }

  applyFilters() {
    this.filtersSubmit.emit(this.recyclingFilters.filter(filter => filter.selected).map(filter => filter.name));
  }
}
