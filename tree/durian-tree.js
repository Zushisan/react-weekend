class Employee {
    constructor(name, title, salary) {
        this.name = name;
        this.title = title;
        this.salary = salary;
        this.boss = null;
        this.subordinates = [];
    }

    addSubordinate(subordinate) {
        this.subordinates.push(subordinate);
        subordinate.boss = this;
    }

    get numberOfSubordinates() {
        return this.subordinates.length;
    }

    get numberOfPeopleToCEO() {
        let numberOfPeople = 0;
        let currentEmployee = this;

        while(currentEmployee.boss) {
            currentEmployee = currentEmployee.boss;
            numberOfPeople++;
        }

        return numberOfPeople;
    }

    hasSameBoss(employee) {
        return this.boss === employee.boss;
    }

    employeesThatMakeOver(amount) {
        let employees = [];

        if(this.salary > amount) {
            employees.push(this);
        }

        for(const subordinate of this.subordinates) {
            const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(amount);
            employees = employees.concat(subordinatesThatMakeOver);
        }

        return employees;
    }

    get totalEmployees() {
        let totalEmployees = 1; // the one we start from and each other

        for(const subordinate of this.subordinates) {       
            totalEmployees = totalEmployees + subordinate.totalEmployees;
        }

        return totalEmployees;
    }
}

const ada = new Employee("Ada", "CEO", 3000000);
const craig = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela = new Employee("Angela", "VP Retail", 1000000);
const phil = new Employee("Phil", "VP Marketing", 1000000);

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

const simone = new Employee("Simone", "Software", 200000);
const ali = new Employee("Ali", "Software", 200000);
const florida = new Employee("Florida", "Marketing", 200000);
const david = new Employee("David", "Marketing", 200000);
const brian = new Employee("Brian", "Marketing", 200000);
const karla = new Employee("Karla", "Retail", 200000);

craig.addSubordinate(simone);
craig.addSubordinate(ali);

phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);

angela.addSubordinate(karla);

console.log("Craig boss is: ", craig.boss);
console.log("Craig has ", craig.numberOfSubordinates, " subordinates");
console.log("There is ", craig.numberOfPeopleToCEO, " person between Craig and the CEO");

let wealthyEmployees = ada.employeesThatMakeOver(418401);
console.log(wealthyEmployees);
console.log(ada.totalEmployees);
console.log(craig.totalEmployees);