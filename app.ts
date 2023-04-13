// Типи даних у функції
const  func = (str:string[]) => {
const s = str.pop();
}

                                                            // Синтаксис в TS:

// Використання типу Array<тип>
let numbers: Array<number> = [1, 2, 3, 4, 5];
// Використання типу типу[]
let names: string[] = ["John", "Jane", "Bob"];
// Створення порожнього масиву з використанням типу Array<тип>
let emptyArray: Array<string> = [];
// Створення порожнього масиву з використанням типу типу[]
let anotherEmptyArray: string[] = [];

const free: string | undefined = 'we';

//Ось приклад використання undefined в TypeScript:
let x: number | undefined;
console.log(x); // Виведе: undefined

if (typeof x === 'undefined') {
    console.log('x є undefined');
} else {
    console.log('x має значення: ' + x);
}


//Побудова інтерфейсу
 interface IUser {
    name: string;
    age: number;
    isAdmin?: boolean;
    sayHello(): void;
 }
//Визначення змінної і присвоєння їй типу інтерфейсу
const user:IUser = {
    name: 'Max',
    age: 12,
    isAdmin: false,
    sayHello() {
        console.log('Hello, Max!')
    }
};

//Запис типу даних через перелічування, ключовим словом enum. Створили тип Color з різними значеннями, вписали його в інтерфейс, у const вибрали потрібний.
enum Color{
    red,
    green,
    yellow,
}
interface IColor {
    color: Color;
    car: string;
    license: string;
}
const myCar:IColor = {
    color: Color.yellow,
    car: 'Toyota',
    license:'IBM',
}

//У цьому прикладі ми створили інтерфейс AdminUser, який розширює інтерфейс IUser
interface AdminUser extends IUser {
    permissions: string[];
}

const admin: AdminUser = {
    name: 'Jane',
    age: 40,
    permissions: ['read', 'write'],
    sayHello() {
        console.log('Hello from admin!');
    }
};



//Побудова інтерфейсу з використанням <> - тобто generic - загального типу даних. <T> - довільна назва, Т - від type!
// Можна додавати декілька generic interface IUser1<T, R, W>
interface IUser1<T> {
    name: string;
    age: number;
    data: T
}
//Визначення змінної і присвоєння їй типу інтерфейсу з generic-ом number[] i string.
const user1:IUser1<number[]> = {
    name: 'Max',
    age: 12,
    data: [100,11,15]
};
const user2:IUser1<string> = {
    name: 'Artem',
    age: 23,
    data: 'Wednesday'
}

// Часткове заповнення інтерфейсу здійснюється за допомогою ключового слова Partial

const user3:Partial<IUser1<any>> = {
    data: 13,
}
            // Класи. Хоткей Alt+Insert! (Коли клас побудований -> будуємо конструктор)
// Модифікатори доступу до поля класу:
// public (скрізь),protected (доступна в середині класу і нащадкам), private (лише в межах класу)
class  User4 {
    private id:number;
    protected name:string;
    public age:number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
// Або модифікатори можна прописувати в конструкторі, прибравши все з класу:
class  User5 {
    constructor(private id: number,protected name: string,public age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name
    }
}
// Створюємо екземпляр класу, використовуючи слово new:
const user100 = new User5(10, 'Max', 44);
console.log(user100.getName());

//////////////////////////////////////////////////////////////////////////////////////////
//Конвертаці Ts в Js - за допомогою команди: tsc app.ts, де app.ts - потрібний Ts файл. //
//////////////////////////////////////////////////////////////////////////////////////////

//Для створення екземпляру класу в TypeScript необхідно використати ключове слово new,
// за яким слідує ім'я класу та дужки, які містять аргументи конструктора класу (якщо такий конструктор є визначений у класі).

//У цьому прикладі ми визначили клас Person з двома властивостями - firstName та lastName,
// а також методом getFullName(), який повертає повне ім'я людини. Для створення екземпляру цього класу
// ми використали ключове слово new, за яким слідує ім'я класу Person та дві строки - імена та прізвища людини, яку ми хочемо створити.
// Після цього ми можемо викликати метод getFullName() на створеному екземплярі класу john, щоб отримати його повне ім'я.
class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const john = new Person('John', 'Doe');
console.log(john.getFullName()); // Виведе "John Doe" у консоль

// Імплементація інтерфейсів до класів в TypeScript дозволяє забезпечити типізацію та перевірку
// на відповідність типів при використанні об'єктів і методів.
//
// Щоб імплементувати інтерфейс до класу, потрібно використати ключове слово implements
                    //      1 version by GTP
interface Shape {
    getArea(): number;
}

class Rectangle2 implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

const rectangle2 = new Rectangle2(10, 20);
console.log(rectangle2.getArea()); // Виведе 200 у консоль


//                              2 version by lesson 1

interface IShareAction {
    area:() => number;
    perimeter: () => number;
}
class Rectangle implements IShareAction {
    constructor(private a:number, private b:number) {
    }
    area(): number {
        return this.a * this.b;
    }

    perimeter(): number {
        return (this.a + this.b) *2;
    }
}
class Triangle implements IShareAction {
    constructor(private a:number, private b:number, private c:number) {
    }
    area(): number {
        return this.a + this.b + this.c;
    }

    perimeter(): number {
        return (this.a * this.b) / 2;
    }
}

const shapes:IShareAction[] = [
    new Triangle( 1,2,3),
    new Rectangle(2,4),
    new Rectangle(4,6)
]

for (let shape of shapes) {
    console.log(shape.area());
    console.log(shape.perimeter());
}

// як дізнатися тип об'єкту:
const asd = () => {
    return 100
}
type MyNumber = ReturnType<typeof asd>
const g:MyNumber = 12

import {userService} from "./services/user.service";

userService.getAll().then(value => value.data).then(users => {
    for (let user of users) {
        console.log(user.email);
    }
})



// enum (перелік) в TypeScript - це спеціальний тип даних, який дозволяє задати набір іменованих констант.
// Ось приклад оголошення переліку з іменами днів тижня:
enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
// У цьому прикладі ми використовуємо ключове слово enum, за яким слідує назва переліку DayOfWeek.
// Потім слідують імена констант у форматі НазваКонстанти = ЧисловеЗначення.
// У цьому прикладі ми не вказали числові значення, тому вони будуть автоматично присвоєні починаючи з 0.

const dayOfWeek = DayOfWeek.Monday;
console.log("Today is " + DayOfWeek[dayOfWeek]); // "Today is Monday"

// У цьому прикладі ми використовуємо константу DayOfWeek.Monday для зберігання дня тижня.
// Потім ми використовуємо індексатор [dayOfWeek] для доступу до назви дня тижня за його номером.










