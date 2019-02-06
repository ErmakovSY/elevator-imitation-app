import { IElevator } from './elevator.interface';
import { IFloor } from './floor.interface';

export interface ImitationOptions {
  elevatorCount?: number;
  elevators: IElevator[];
  floorCount?: number;
  floors: IFloor[];
}
