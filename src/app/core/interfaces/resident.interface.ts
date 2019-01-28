import { ResidentStatus } from '../types/resident/resident-status';

export interface IResident {
  residenceFloor: number;
  targetFloor: number;
  status: ResidentStatus;
}
