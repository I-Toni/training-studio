export class Course {
    courseName: string = "";
    coursePrice: number = 0;

    
    constructor(public name: string,
                public price: number){
                  this.courseName = name;
                  this.coursePrice = price;
                }
    
    getName() {
      return this.courseName;
    }

    getPrice() {
        return this.coursePrice;
    }
  }