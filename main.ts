

// Person class
class person{
    name:string;
    age:number;
    getName:string[];

 constructor(name:string,agr:number,getName:string[]){
    this.name=name;
    this.getName=getName;
    this.age=1;
 }   
}

const person1 : person = new person('usaid',24,[]) 
const person2 : person = new person('Ali',25,[]) 
const person3 : person = new person('Hamza',22,[]) 
const person4 : person = new person('Hussian',20,[]) 
const person5 : person = new person('Uzair',19,[]) 


// Couress 

class coures{
    id:number;
    name:string[];
    instructer:string[];
    addStudent:string[];
    setInstructer:string[];



constructor(id:number,name:string[],instructer:string[],addStudent:string[],setInstructer:string[]){

    this.id=id;
    this.name=name;
    this.instructer=instructer;
    this.addStudent=addStudent;
    this.setInstructer=setInstructer
}    
}
const personCoures1 : coures = new coures(1,['Computer Sceince'],['Sir Hamza'],['Usaid'],['Sir Hamza'])
const personCoures2 : coures = new coures(1,['Computer Sceince'],['Sir Hamza'],['Ali'],['Sir Hamza'])
const personCoures3 : coures = new coures(1,['Computer Sceince'],['Sir Hamza'],['Hussian'],['Sir Hamza'])
const personCoures4 : coures = new coures(1,['Computer Sceince'],['Sir Hamza'],['Ubaid'],['Sir Hamza'])
const personCoures5 : coures = new coures(1,['Computer Sceince'],['Sir Hamza'],['Javad'],['Sir Hamza'])

// Depaertment

class Department{
    name:string;
    coures:string[];
    addCoures:string[];


 constructor(name:string,coures:string[],addCoures:string[]){
    this.name=name;
    this.coures=coures;
    this.addCoures=addCoures
 }   
}

const personDepartment1 : Department = new Department('usaid',['c++','pythone','php'],['laravel,Next.js'])
const personDepartment2:  Department = new Department('Ali',['c++','pythone','php'],['laravel,Next.js'])
const personDepartment3 : Department = new Department('Hussian',['c++','pythone','php'],['laravel,Next.js'])
const personDepartment4 : Department = new Department('Ubaid',['c++','pythone','php'],['laravel,Next.js'])
const personDepartment5 : Department = new Department('Javad',['c++','pythone','php'],['laravel,Next.js'])




// Student child
class studentes extends person {
    rollNumber: number;
    coures: string[];
    resgisterForCoures: string[];

    constructor(name: string, age: number, getName: string[], rollNumber: number, coures: string[], resgisterForCoures: string[]) {
        super(name, age, getName);
        this.rollNumber = rollNumber;
        this.coures = coures;
        this.resgisterForCoures = resgisterForCoures;
    }
}
const student1 : person = new person('usaid',24,[]) 
const student2 : person = new person('Ali',25,[]) 
const student3 : person = new person('Hamza',22,[]) 
const student4 : person = new person('Hussian',20,[]) 
const student5 : person = new person('Uzair',19,[]) 


// Instructet 

class Instructer extends person{
    salary:number;
    coures:string;
    assingCoures:string[]


constructor(name: string, age: number, getName: string[],salary:number,coures:string,assingCoures:string[]){
    super(name, age, getName)
    this.salary = salary;
    this.coures= coures;
    this.assingCoures=assingCoures
}    
}
const techer : Instructer = new Instructer('Sir Hamza',22,[],20000,'GIAIC',['IT Program'])

