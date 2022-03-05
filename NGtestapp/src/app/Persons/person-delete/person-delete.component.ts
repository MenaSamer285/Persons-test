import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { address } from 'src/app/Addresses/Address';
import { PeopleService } from '../people.service';
import { person } from '../person';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.css']
})
export class PersonDeleteComponent implements OnInit {
  per: person = new person();

  constructor(private PersonService: PeopleService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.per.address = new address();
    var id = this.route.snapshot.paramMap.get('id') as string;
    this.PersonService.getPerson(id).subscribe({
      next: person => {
        this.per = person;
      }
    })
  }

  deletePerson(): void {
    this.PersonService.deletePerson(this.per.id.toString()).subscribe(
      {
        next: person => {
          this.router.navigate(['/people'])
        }
      }
    )
  }

}
