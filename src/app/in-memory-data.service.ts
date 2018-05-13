import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const addresses = [
      {
        line_1: 'id labore irure',
        line_2: 'anim id officia mollit',
        street_address: 'enim amet eu',
        city: 'Duis aliqua',
        state: 'dolor',
        zip: '20141'
      },
      {
        line_1: 'labore exercitation tempor',
        line_2: 'proident est',
        street_address: 'enim occaecat in',
        city: 'aute vel',
        state: 'tempor',
        zip: '31997'
      },
      {
        line_1: 'Duis fugiat aute',
        line_2: 'do deserunt Ut magna',
        street_address: 'elit laborum',
        city: 'ut minim',
        state: 'id',
        zip: '23107'
      }
    ];
    return {addresses};
  }
}
