import { ElevatorStatus } from '../types/elevator/elevator-status';
import { ElevatorDoorStatus } from '../types/elevator/elevator-door-status';

export interface IElevator {
  capacity: number;
  passengers: number;
  freePlaces: number;
  status: ElevatorStatus;
  doorStatus: ElevatorDoorStatus;
  targetFloors: number[];
  currentFloor: number;
}
