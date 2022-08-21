export interface Artist{
    id: number;
    name: string;
    age: number;
    country: string;
    image: string;
    description: string;
    dateOfBirth: string;

}

export interface Art{
    id: number;
    name: string;
    artist: Artist;
    year: number;
    image: string;
    description: string;
    price: number;
    category: string;
}