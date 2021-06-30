export class CustomHelpers {
    public static getRange(start: number, end: number, increment: number): number[] {
        const range: number[] = [];
        for (var i = start; i < end; i = i + increment) {
            range.push(i);
        }
        return range;
    }
}