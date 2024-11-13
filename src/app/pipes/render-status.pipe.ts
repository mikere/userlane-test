import { Pipe, PipeTransform } from '@angular/core';

// Used for simplicity. Strings can be provided by an external service like i18n
const statusStrings: Record<string, string> = {
  online: 'Online',
  offline: 'Offline',
  dnd: 'Do not disturb',
};

@Pipe({
  name: 'renderStatus',
  standalone: true,
})
export class RenderStatusPipe implements PipeTransform {
  transform(value: string): string {
    return statusStrings[value] || 'unknown status';
  }
}
