import { IResident } from '../interfaces/resident.interface';
import { ResidentStatus } from '../types/resident/resident-status';

export class Resident implements IResident {

  residenceFloor: number;
  targetFloor: number;
  status: ResidentStatus = ResidentStatus.ON_RESIDENCE_FLOOR;

  constructor(residenceFloor: number) {
    this.residenceFloor = residenceFloor;
  }

  updateTargetFloor(value: number): void {
    this.targetFloor = value;
  }

  updateStatus(value: ResidentStatus): void {
    this.status = value;
  }
}
