import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heroes/hero';


export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const heroes = [
            {id: 11, name: 'Rudra'},
            {id: 12, name: 'Durga'},
            {id: 13, name: 'Chandra'},
            {id: 14, name: 'Varuna'},
            {id: 15, name: 'Krishna'},
            {id: 16, name: 'Pushan'},
            {id: 17, name: 'Mitra'},
            {id: 18, name: 'Lakshmi'},
            {id: 19, name: 'Budha'},
            {id: 20, name: 'Shani'},
            {id: 21, name: 'Ganesha'}
        ];
        return {heroes};
    }

    genId(heroes: Hero[]): number {
        return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
    }

}
