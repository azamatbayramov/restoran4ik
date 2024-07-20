export interface BJU {
    protein: number;
    fat: number;
    carbs: number;
}

export interface Meal {
    id: string;

    title: string;
    description: string;
    composition: string;
    bju: BJU;

    imageSrc: string | null;

    tags: string[];

    price: number;

    available: boolean;
}

export interface NewMeal {
    image: string | null;
    title: string;
    price: number;
    available: boolean;
    tags: string[];
    description: string;
    imageFile: File | null;
    composition: string;
    bju: BJU;
}
