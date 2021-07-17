declare const files: readonly ["a", "b", "c", "d", "e", "f", "g", "h"];
declare const ranks: readonly ["1", "2", "3", "4", "5", "6", "7", "8"];
declare type File = typeof files[number];
declare type Rank = typeof ranks[number];

export declare type Square = `${File}${Rank}`;
export declare type Colour = 'white' | 'black';

export interface Game {
    isCheck(): boolean | Colour
    turn(): Colour
    dests(): Map<Square, Square[]>
    play(orig: Square, dest: Square): void
}