import { readFileSync } from "fs";

const elvesFoodCalories: string[] = readFileSync("src/day1/day1.txt", { encoding: "utf-8" }).trim().split("\n\n");
const calories: number[] = elvesFoodCalories.map((x) => x.split("\n")
    .map(calorie => Number(calorie))
    .reduce((pv, cv) => pv + cv, 0));

console.log(Math.max(...calories));