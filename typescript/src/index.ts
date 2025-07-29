// basic types

// primitives types
let age: number = 35;
let fistName: string = "Vivien";
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

console.log(age, fistName, isActive, nothing, notDefined);

// tableau typé
let scores: number[] = [10, 20, 30];

// tuple
let coord: [number, number] = [48.86, 2.35];

// typed functions
function greet(name: string): string {
    return `Hello, ${name}!`;
}

function log(msg: string): void {
    console.log(msg);
}

function sum(a: number, b: number): number {
    return a + b;
}

// custom types: alias and interfaces
type UserId = number;

type User = {
    id: UserId;
    name: string;
    isAdmin?: boolean; // optionnel
};

const u: User = { id: 1, name: "Alice" };

// interface (équivalent à type dans 90% des cas)
interface Product {
    id: number;
    name: string;
    price: number;
}

// Union, Literal & Enum

// union type
let statusType: "loading" | "success" | "error" = "loading";

// union classique
function printId(id: string | number): void {
    console.log("ID is", id);
}

// enum (valeurs nommées)
enum Role {
    USER,
    ADMIN,
    MODERATOR
}

const role: Role = Role.ADMIN;

// arrow functions, generic types and type inference

const double = (x: number): number => x * 2;

function identity<T>(value: T): T {
    return value;
}

const result = identity<string>("test"); // type explicit
const result2 = identity(123); // type inféré

// classes

class Animal {
    constructor(public name: string) { }

    speak(): void {
        console.log(`${this.name} makes a noise.`);
    }
}

const cat = new Animal("Mittens");
cat.speak();

// type narrowing and type guards

function formatValue(val: string | number): string {
    if (typeof val === "string") {
        return val.toUpperCase();
    } else {
        return val.toFixed(2);
    }
}

// record, partial, pick

type Settings = {
    theme: string;
    darkMode: boolean;
    lang: string;
};

const partial: Partial<Settings> = { theme: "light" };

const pickLang: Pick<Settings, "lang"> = { lang: "fr" };

const allDefault: Record<"user" | "admin", Settings> = {
    user: { theme: "blue", darkMode: false, lang: "fr" },
    admin: { theme: "black", darkMode: true, lang: "en" }
};
