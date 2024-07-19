export interface Dish {
    id?: string;
    name: string;
    description: string;
    image: string;
    tags: string[];
    price: number;
    available: boolean;
}
