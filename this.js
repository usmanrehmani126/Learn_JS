console.log("this keyword in js")
const student={
    name:"Usman",
    age:20,
    class:"BSCS",
    printName:function (){
        console.log(this.name)
    }
}
const student1={
    name:"Ali",
    age:22,
    class:"BSCS",
    printName:function (){
        console.log(this.name)
    }
}
student.printName()
student.printName.call(student1)