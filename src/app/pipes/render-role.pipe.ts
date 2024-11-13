import { Pipe, PipeTransform } from '@angular/core';
import { UserRole } from '../services/model';

const roleStrings: Record<string, string> = {
  admin: 'Admin',
  guest: 'Guest',
  member: 'Member',
};

@Pipe({
  name: 'renderRole',
  standalone: true,
})
export class RenderRolePipe implements PipeTransform {
  transform(value: string): string {
    return roleStrings[value] || 'unknown role';
  }
}
