import { Pipe, PipeTransform } from '@angular/core';

// Used for simplicity. Strings can be provided by an external service like i18n
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
