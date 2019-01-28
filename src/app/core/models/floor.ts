import { IFloor } from '../interfaces/floor.interface';

export class Floor implements IFloor {

  number: number;
  residents: number;
  residentsWaiting: number;
  isElevatorCalled = false;

  constructor(number: number, residents: number) {
    this.number = number;
    this.residents = residents;
  }

  updateResidentsWaiting(value: number): void {
    this.residentsWaiting = value;
  }

  updateElevatorCalled(value: boolean): void {
    this.isElevatorCalled = value;
  }
}
