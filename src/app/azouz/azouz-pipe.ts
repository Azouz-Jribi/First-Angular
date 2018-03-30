import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'addPoints' })
export class AddPoints implements PipeTransform {
  transform(value: string): string {
	return `${value}...`;
  }
}

@Pipe({ name: 'active' })
export class Active implements PipeTransform {
  transform(value: string): string {
	return (value == 'false') ? "¤" : "%";
  }
}