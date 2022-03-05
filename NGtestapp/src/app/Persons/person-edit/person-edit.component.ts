import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { address } from 'src/app/Addresses/Address';
import { PeopleService } from '../people.service';
import { person } from '../person';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
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

  savePerson(): void {
    this.PersonService.putPerson(this.per.id.toString(), this.per).subscribe(
      {
        next: person => {
          this.router.navigate(['/people'])
        }
      }
    )
  }

}
