import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent {
  vehicles: any = [];
  constructor(private _vehicleService: VehicleService) {
   this.pageLoad();
  }

  pageLoad(){
    this._vehicleService.getVEhicles().subscribe(
      (data: any) => {
        this.vehicles = data;
        console.log(this.vehicles);
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }

  term: string = '';

  filter() {
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }

  column: string = '';
  order: string = '';
  sort() {
    this._vehicleService.getSortedVehicles(this.column, this.order).subscribe(
      (data: any) => {
        this.vehicles = data;
        console.log(this.vehicles);
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }

  limit: number = 0;
  page: number = 0;
  pagination() {
    this._vehicleService.getPaginationVehicles(this.limit, this.page).subscribe(
      (data: any) => {
        this.vehicles = data;
        console.log(this.vehicles);
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }

  delete(id: number) {
    if (confirm('Are you sure to delete?') == true) {
      this._vehicleService.deleteVehicle(id).subscribe(
        (data: any) => {
          alert('Record deleted sucessfully');
          this.pageLoad();
        },
        (err: any) => {
          alert('Internal Server Error');
        }
      );
    } else {
      alert('You have cancelled');
    }
  }
}
