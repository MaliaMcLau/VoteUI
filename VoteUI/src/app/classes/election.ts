export class Election {
    id: number;
    name: string;
    startDateUtc: string;
    duration: number;
    type: string;

    constructor(
        id: number = null,
        name: string = '',
        startDateUtc: string = '',
        duration: number = 30,
        type: string = 'single'
    ) {}
}
