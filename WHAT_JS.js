// console.log("HOW JS IS WORK ")
// Everthing in JS is excuted in Execution Context
// Execution Context is just  like a big box which has two parts the one is Memory Component where all the variables or functions are stored in the form of Key value pairs and other one is Code component where the code is executed line by line at one time which is also known as Thread of Excuation
// console.log("How JavaScript Code is executed")
// When a code is excuted it creates a global excuation context where it has two parts as mention above, when the function is called it comes out from the memory then excute if there is another function or var inside the function then the excution context is created again when the functions or varibles are called then the excution context is deleted 
console.log("Call Stack in JS")
// we will notice that when we the functions or vairbles are called a global excuation context is created ,else if we have another function or varibles then we a new excution context is created it goes again and again which makes the Js engine so massive so we need a stack which manages the deletion,updation or creation of excution contexts that's called Call STack in JS
// Basically Call Stack manages the order of excution of contexts
// it is also know as Programm  STack, control stack,  Runtime Stack etc