import { Component, signal, Injectable, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu'; // Importing MatMenuModule for future use
import { MatButtonModule } from '@angular/material/button'; // Importing MatButtonModule for future use
import { MatChipsModule } from '@angular/material/chips'; // Importing MatChipsModule for future use
import { MatIconModule } from '@angular/material/icon'; // Importing MatIconModule for future use
import { MatTabsModule } from '@angular/material/tabs'; // Importing MatTabsModule for future use
import { MatCardModule } from '@angular/material/card'; // Importing MatCardModule for future use
import { DatePipe } from '@angular/common'; // Importing DatePipe for date formatting
import { filter, Subject } from 'rxjs'; // Importing filter operator for future use
import { MatFormFieldModule } from '@angular/material/form-field';  // Importing MatFormFieldModule for future use
import { MatSelectModule } from '@angular/material/select';   // Importing MatSelectModule for future use
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Sort, MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { SlicePipe } from '@angular/common';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface Employee {
  id: number;
  employeeId: string;
  name: string;
  position: string[];
  joinDate: Date;
  active: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggleModule, MatGridListModule, MatMenuModule, MatButtonModule, MatChipsModule, MatIconModule, MatTabsModule, MatCardModule, DatePipe, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule, MatSortModule, MatPaginatorModule,SlicePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

@Injectable()
export class App implements MatPaginatorIntl {
  protected readonly title = signal('my-first-angular-app');
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  employees: Employee[] = [
    {id: 1, employeeId: 'E001', name: 'John Doe', position: ['Software Engineer', 'Full Stack Developer'], joinDate: new Date('2020-01-15'), active: true},
    {id: 2, employeeId: 'E002', name: 'Jane Smith', position: ['Project Manager', 'Scrum Master', 'Product Owner'], joinDate: new Date('2019-03-22'), active: false},
    {id: 3, employeeId: 'E003', name: 'Alice Johnson', position: ['UX Designer'], joinDate: new Date('2021-07-30'), active: true},
    {id: 4, employeeId: 'E004', name: 'Bob Brown', position: ['Data Analyst', 'Data Scientist'], joinDate: new Date('2018-11-05'), active: true},
    {id: 5, employeeId: 'E005', name: 'Charlie White', position: ['DevOps Engineer', 'System Administrator', 'Cloud Engineer'], joinDate: new Date('2022-02-10'), active: false},
    {id: 6, employeeId: 'E006', name: 'Diana Green', position: ['QA Engineer', 'Technical Writer'], joinDate: new Date('2023-04-20'), active: true},
    {id: 7, employeeId: 'E007', name: 'Ethan Black', position: ['System Administrator', 'Network Engineer'], joinDate: new Date('2020-08-15'), active: true},
    {id: 8, employeeId: 'E008', name: 'Fiona Blue', position: ['Business Analyst'], joinDate: new Date('2019-12-01'), active: false},
    {id: 9, employeeId: 'E009', name: 'George Yellow', position: ['Network Engineer', 'Security Analyst'], joinDate: new Date('2021-05-25'), active: true},
    {id: 10, employeeId: 'E010', name: 'Hannah Red', position: ['Product Owner', 'Scrum Master'], joinDate: new Date('2022-09-10'), active: true},
    {id: 11, employeeId: 'E011', name: 'Ian Purple', position: ['Scrum Master'], joinDate: new Date('2023-01-30'), active: false},
    {id: 12, employeeId: 'E012', name: 'Jack Orange', position: ['Technical Writer', 'UX Designer'], joinDate: new Date('2020-06-18'), active: true},
    {id: 13, employeeId: 'E013', name: 'Kathy Pink', position: ['Security Analyst', 'Network Engineer', 'DevOps Engineer'], joinDate: new Date('2018-10-12'), active: true},
    {id: 14, employeeId: 'E014', name: 'Liam Gray', position: ['Cloud Engineer'], joinDate: new Date('2021-03-05'), active: false},
    {id: 15, employeeId: 'E015', name: 'Mia Silver', position: ['Database Administrator', 'Data Scientist'], joinDate: new Date('2022-11-20'), active: true},
    {id: 16, employeeId: 'E016', name: 'Noah Gold', position: ['Front-end Developer', 'UI Designer'], joinDate: new Date('2023-07-15'), active: true},
    {id: 17, employeeId: 'E017', name: 'Olivia Cyan', position: ['Back-end Developer', 'Database Administrator'], joinDate: new Date('2020-02-28'), active: false},
    {id: 18, employeeId: 'E018', name: 'Paul Teal', position: ['Full Stack Developer', 'Front-end Developer', 'Back-end Developer'], joinDate: new Date('2019-09-10'), active: true},
    {id: 19, employeeId: 'E019', name: 'Quinn Magenta', position: ['Mobile Developer'], joinDate: new Date('2021-06-22'), active: true},
    {id: 20, employeeId: 'E020', name: 'Rachel Brown', position: ['Game Developer', 'Mobile Developer'], joinDate: new Date('2022-04-05'), active: false},
    {id: 21, employeeId: 'E021', name: 'Sam White', position: ['AI Engineer', 'Data Scientist'], joinDate: new Date('2023-08-30'), active: true},
    {id: 22, employeeId: 'E022', name: 'Tina Black', position: ['Blockchain Developer', 'Full Stack Developer'], joinDate: new Date('2020-01-10'), active: true},
    {id: 23, employeeId: 'E023', name: 'Ursula Green', position: ['Data Scientist', 'AI Engineer', 'Data Analyst'], joinDate: new Date('2019-05-15'), active: false},
    {id: 24, employeeId: 'E024', name: 'Victor Blue', position: ['Robotics Engineer', 'AI Engineer'], joinDate: new Date('2021-10-20'), active: true}
  ];

  positions: string[] = [...new Set(this.employees.flatMap(emp => emp.position))]; // Extracting unique positions from employees

  selectedPositions: FormControl = new FormControl(); // Variable to hold the selected position from the dropdown
  textFilter: FormControl = new FormControl(); // Variable to hold the text filter input

  filter: FormControl = new FormControl('all');

  filteredEmployees: Employee[] = [];

  
  constructor() {
    this.updateFilteredEmployees();
    this.selectedPositions.valueChanges.subscribe(() => this.updateFilteredEmployees());
    this.textFilter.valueChanges.subscribe(() => this.updateFilteredEmployees());
    this.filter.valueChanges.subscribe(() => this.updateFilteredEmployees());
  }

  // MatPaginatorIntl implementation for pagination labels
  rowsPerPage: number = 5; // Number of rows to display per page
  currentPage: number = 0; // Current page index
  totalPages: number = 1;
  changes = new Subject<void>();
  itemsPerPageLabel: string = 'Số hàng mỗi trang:';
  nextPageLabel: string = 'Trang sau';
  previousPageLabel: string = 'Trang trước';
  firstPageLabel: string = 'Trang đầu';
  lastPageLabel: string = 'Trang cuối';
  showFirstLastButtons: boolean = true;
  getRangeLabel(page: number, pageSize: number, length: number): string{
    const start = page * pageSize + 1;
    const end = Math.min(start + pageSize - 1, length);
    return `Hiển thị ${start} - ${end} trong ${length}`;
  };
  handlePageEvent(event: PageEvent) {
    this.totalPages = event.length;
    this.rowsPerPage = event.pageSize;
    this.currentPage = event.pageIndex;
  }

  updateFilteredEmployees() {
    const selectedPositions = this.selectedPositions.value || [];
    const text = this.textFilter.value ? this.textFilter.value.toLowerCase() : '';

    this.filteredEmployees = this.employees.filter(employee => {
      const matchesPosition = selectedPositions.length === 0 || 
        employee.position.some(pos => selectedPositions.includes(pos));
      const matchesText = employee.name.toLowerCase().includes(text) ||
                          employee.employeeId.toLowerCase().includes(text) ||
                          employee.position.join(' ').toLowerCase().includes(text);
      const filterValue = this.filter.value;
      const matchesStatus = filterValue === 'all' || (filterValue === 'active' && employee.active) || (filterValue === 'inactive' && !employee.active);
      return matchesPosition && matchesText && matchesStatus;
    });
    this.totalPages = Math.ceil(this.filteredEmployees.length / this.rowsPerPage);
    this.currentPage = 0; // Reset to the first page after filtering
  }
  getEmployeesByStatus(status: string): number{
    const filterValue = this.filter.value;
    const selectedPositions = this.selectedPositions.value || [];
    const text = this.textFilter.value ? this.textFilter.value.toLowerCase() : '';
    let filteredEmployees2 = this.employees.filter(employee => {
      const matchesPosition = selectedPositions.length === 0 || 
        employee.position.some(pos => selectedPositions.includes(pos));
      const matchesText = employee.name.toLowerCase().includes(text) ||
                          employee.employeeId.toLowerCase().includes(text) ||
                          employee.position.join(' ').toLowerCase().includes(text);
      const filterValue = this.filter.value;
      return matchesPosition && matchesText;
    });
    if (status === 'all') {
      return filteredEmployees2.length;
    } else if (status === 'active') {
      return filteredEmployees2.filter(emp => emp.active).length;
    } else if (status === 'inactive') {
      return filteredEmployees2.filter(emp => !emp.active).length;
    }
    return 0;
  }
  getActiveCount(): number {
    return this.filteredEmployees.filter(emp => emp.active).length;
  }
  getInactiveCount(): number {
    return this.filteredEmployees.filter(emp => !emp.active).length;
  }
  toggleExpanded: boolean = true; // Variable to control the expanded state of the table
}
