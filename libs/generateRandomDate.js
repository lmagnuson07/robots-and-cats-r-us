export function randomDate() {
    let start = new Date(2050, 0, 1);
    let end = new Date(2100, 0, 1);
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toString().substring(0,15);
}