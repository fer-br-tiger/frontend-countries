export interface Country {
    name: { common: string };
    cca3: string;
    region: string;
    subregion: string;
    population: number;
    flags: { svg: string };
}