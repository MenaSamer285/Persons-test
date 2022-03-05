import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { address } from '../Address';
import { AddressesService } from '../addresses.service';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit {
  address: address = new address();
  constructor(private AddressService: AddressesService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id') as string;
    this.AddressService.getAddress(id).subscribe({
      next: Address => {
        this.address = Address;
      }
    })
  }

  saveAddress(): void {
    this.AddressService.putAddress(this.address.id.toString(), this.address).subscribe(
      {
        next: Address => {
          this.router.navigate(['/people'])
        }
      }
    )
  }

}
