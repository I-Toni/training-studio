export class Student {
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    phone: string = "";
    date: string = "";
    course: string = "";

    
    constructor(public fname: string,
                public lname: number,
                public Studentemail: string,
                public number: string,
                public courseDate: string,
                public courseName: string){
                }
    
    getFirstame() {
      return this.firstName;
    }

    setFirstName(fname: string){
        this.firstName = fname;
    }

    getLastName() {
        return this.lastName;
    }

    setLastName(lname: string){
        this.lastName = lname;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email: string){
        this.email = email;
    }

    getPhone() {
        return this.phone;
    }

    setPhone(phone: string){
        this.phone = phone;
    }
    
    getDate() {
        return this.date;
    }

    setDate(date: string){
        this.date = date;
    }

    getCourse() {
        return this.course;
    }

    setCourse(course: string){
        this.course = course;
    }
  }