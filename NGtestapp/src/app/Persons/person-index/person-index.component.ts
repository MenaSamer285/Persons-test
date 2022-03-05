import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PeopleService } from '../people.service';
import { person } from '../person';

@Component({
  selector: 'app-person-index',
  templateUrl: './person-index.component.html',
  styleUrls: ['./person-index.component.css']
})
export class PersonIndexComponent implements OnInit, AfterViewInit {
  cardSize = "col-md-12";
  companyDetailSize = "col-sm-11";
  buttonSize = "col-sm-1 pl-1";
  externalLink: any;
  currentExhibitorId = 0;
  showNewExhibitorFlag = false;
  loadData = false;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'actions'];
  dataSource = new MatTableDataSource<person>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  personList: person[] = [];

  constructor(private person: PeopleService) {
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.person.getPersons().subscribe({
      next: people => {
        this.personList = people;
        console.log(people);
      }
    });
  }



  toggleToListView(): void {
    this.cardSize = "col-sm-12";
    this.companyDetailSize = "col-sm-11";
    this.buttonSize = "col-sm-1 pl-1";
  }

  toggleToGrid(): void {
    this.cardSize = "col-sm-4";
    this.companyDetailSize = "col-sm-9";
    this.buttonSize = "col-sm-3";
  }

}