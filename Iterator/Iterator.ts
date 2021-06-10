export interface Iterator{
    hasNext(): boolean;
    current(): string;
    next(): void;
}