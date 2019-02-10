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
        this.updateStatus(ResidentStatus.WAITING);
        break;
      }
      case ResidentStatus.WAITING: {
        this.updateStatus(ResidentStatus.MOVEING);
        break;
      }
      case ResidentStatus.MOVEING: {
        this.updateStatus(this.targetFloor === this.residenceFloor
          ? ResidentStatus.ON_RESIDENCE_FLOOR
          : ResidentStatus.ON_TARGET_FLOOR);
        break;
      }
      case ResidentStatus.ON_TARGET_FLOOR: {
        this.updateStatus(ResidentStatus.OUTSIDE);
        break;
      }
      case ResidentStatus.OUTSIDE: {
        this.updateTargetFloor(this.residenceFloor);
        this.updateStatus(ResidentStatus.WAITING);
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
