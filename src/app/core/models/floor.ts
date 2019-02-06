import { IFloor } from '../interfaces/floor.interface';
import { IResident } from '../interfaces/resident.interface';
import { Resident } from './resident';

export class Floor implements IFloor {

  number: number;
  residents: IResident[];
  residentsWaiting: number;
  isElevatorCalled = false;

  constructor({ number, residents }) {
    this.number = number;
    this.residents = this.populateResidents(residents);
  }

  updateResidentsWaiting(value: number): void {
    this.residentsWaiting = value;
  }

  updateElevatorCalled(value: boolean): void {
    this.isElevatorCalled = value;
  }

  private populateResidents(count) {
    const residents = [];
    for (let i = 0; i !== count; i++) {
      residents.push(new Resident(this.number));
    }
    return residents;
  }
}
