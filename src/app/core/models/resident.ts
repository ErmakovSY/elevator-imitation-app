import { IResident } from '../interfaces/resident.interface';
import { ResidentStatus } from '../types/resident/resident-status';

export class Resident implements IResident {

  residenceFloor: number;
  targetFloor: number;
  status: ResidentStatus = ResidentStatus.ON_RESIDENCE_FLOOR;

  constructor(residenceFloor: number) {
    this.residenceFloor = residenceFloor;
  }

  triggerResidentEvent(): void {
    switch (this.status) {
      case ResidentStatus.ON_RESIDENCE_FLOOR: {
        this.updateTargetFloor(1)
        this.updateStatus(this.residenceFloor > 1 ? ResidentStatus.WAITING : ResidentStatus.OUTSIDE);
        break;
      }
      case ResidentStatus.OUTSIDE: {
        this.updateTargetFloor(this.residenceFloor);
        this.updateStatus(this.residenceFloor > 1 ? ResidentStatus.WAITING : ResidentStatus.ON_RESIDENCE_FLOOR);
        break;
      }
    }
  }

  private updateTargetFloor(value: number): void {
    this.targetFloor = value;
  }

  private updateStatus(value: ResidentStatus): void {
    this.status = value;
  }
}
