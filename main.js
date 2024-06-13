// Person class
class person {
    name;
    age;
    getName;
    constructor(name, agr, getName) {
        this.name = name;
        this.getName = getName;
        this.age = 1;
    }
}
const person1 = new person('usaid', 24, []);
const person2 = new person('Ali', 25, []);
const person3 = new person('Hamza', 22, []);
const person4 = new person('Hussian', 20, []);
const person5 = new person('Uzair', 19, []);
// Couress 
class coures {
    id;
    name;
    instructer;
    addStudent;
    setInstructer;
    constructor(id, name, instructer, addStudent, setInstructer) {
        this.id = id;
        this.name = name;
        this.instructer = instructer;
        this.addStudent = addStudent;
        this.setInstructer = setInstructer;
    }
}
const personCoures1 = new coures(1, ['Computer Sceince'], ['Sir Hamza'], ['Usaid'], ['Sir Hamza']);
const personCoures2 = new coures(1, ['Computer Sceince'], ['Sir Hamza'], ['Ali'], ['Sir Hamza']);
const personCoures3 = new coures(1, ['Computer Sceince'], ['Sir Hamza'], ['Hussian'], ['Sir Hamza']);
const personCoures4 = new coures(1, ['Computer Sceince'], ['Sir Hamza'], ['Ubaid'], ['Sir Hamza']);
const personCoures5 = new coures(1, ['Computer Sceince'], ['Sir Hamza'], ['Javad'], ['Sir Hamza']);
// Depaertment
class Department {
    name;
    coures;
    addCoures;
    constructor(name, coures, addCoures) {
        this.name = name;
        this.coures = coures;
        this.addCoures = addCoures;
    }
}
const personDepartment1 = new Department('usaid', ['c++', 'pythone', 'php'], ['laravel,Next.js']);
const personDepartment2 = new Department('Ali', ['c++', 'pythone', 'php'], ['laravel,Next.js']);
const personDepartment3 = new Department('Hussian', ['c++', 'pythone', 'php'], ['laravel,Next.js']);
const personDepartment4 = new Department('Ubaid', ['c++', 'pythone', 'php'], ['laravel,Next.js']);
const personDepartment5 = new Department('Javad', ['c++', 'pythone', 'php'], ['laravel,Next.js']);
// Student child
class studentes extends person {
    rollNumber;
    coures;
    resgisterForCoures;
    constructor(name, age, getName, rollNumber, coures, resgisterForCoures) {
        super(name, age, getName);
        this.rollNumber = rollNumber;
        this.coures = coures;
        this.resgisterForCoures = resgisterForCoures;
    }
}
const student1 = new person('usaid', 24, []);
const student2 = new person('Ali', 25, []);
const student3 = new person('Hamza', 22, []);
const student4 = new person('Hussian', 20, []);
const student5 = new person('Uzair', 19, []);
// Instructet 
class Instructer extends person {
    salary;
    coures;
    assingCoures;
    constructor(name, age, getName, salary, coures, assingCoures) {
        super(name, age, getName);
        this.salary = salary;
        this.coures = coures;
        this.assingCoures = assingCoures;
    }
}
const techer = new Instructer('Sir Hamza', 22, [], 20000, 'GIAIC', ['IT Program']);
export {};
