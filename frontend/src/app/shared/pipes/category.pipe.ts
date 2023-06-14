import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Front-end development': return 'javascript';
      case 'Back-end development': return 'javascript';
      case 'DevOps': return 'javascript';
      case 'CI/CD': return 'javascript';
      case 'Monitoring': return 'javascript';
      case 'metrics of application': return 'javascript';
    }

    return '';
  }

}
