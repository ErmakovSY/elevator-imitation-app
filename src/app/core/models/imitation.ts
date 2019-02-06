import { ImitationOptions } from '../interfaces/imitation-options.interface';
import { IElevator } from '../interfaces/elevator.interface';
import { IFloor } from '../interfaces/floor.interface';

import { Floor } from './floor';
import { Elevator } from './elevator';

export class Imitation implements ImitationOptions {

  elevators: IElevator[];
  floors: IFloor[];

  constructor({ elevators, floors }) {
    this.floors = this.populateFloors(floors);
    this.elevators = this.populateElevators(elevators);
  }

  private populateFloors(floors) {
    if (floors && floors.length) {
      return floors.map(floor => new Floor(floor));
    }
    return [];
  }

  private populateElevators(elevators) {
    if (elevators && elevators.length) {
      return elevators.map(elevator => new Elevator(elevator));
    }
    return [];
  }
}
