export class User {
    name : string;
    age : number;
    isActive : boolean;
  
    constructor(name: string, age: number, isActive: boolean = true) 
    { 
      this.name = name;
      this.age = age;
      this.isActive = isActive;
    }

    setName(name: string): void
    {
        this.name = name;
    }
  }