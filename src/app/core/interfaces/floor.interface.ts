import { IResident } from './resident.interface';

export interface IFloor {
  number: number;
  residents: IResident[];
  residentsWaiting: number;
  isElevatorCalled: boolean;
}
