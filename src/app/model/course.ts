export class Course {
    courseName: string = "";
    coursePrice: number = 0;

    
    constructor(public name: string,
                public price: number){
                }
    
    getName() {
      return this.courseName;
    }

    getPrice() {
        return this.coursePrice;
    }
  }