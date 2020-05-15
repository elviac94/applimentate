import { AllergenInterface } from './allergen.interface';

export interface AllergenDetailInterface extends AllergenInterface {
    title: string,
    imgSummary: string;
    summary: string;
    food: string;
    health: string;
}
