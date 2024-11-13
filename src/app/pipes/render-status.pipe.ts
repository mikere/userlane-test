import { Pipe, PipeTransform } from '@angular/core';

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
