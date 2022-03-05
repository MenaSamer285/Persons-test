import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { address } from 'src/app/Addresses/Address';
import { PeopleService } from '../people.service';
import { person } from '../person';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {

  per: person = new person();

  constructor(private personService: PeopleService,
    private router: Router) { }

  savePerson(): void {
    this.personService.postPerson(this.per).subscribe(
      {
        next: person => {
          this.router.navigate(['/people'])
        }
      }
    )
  }

  ngOnInit(): void {
    this.per.address = new address();
  }

}
