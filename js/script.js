/*-------------Завдання №1-------------*/
// function count(expression){
//     function getValues(expression){
//        let values = [...expression]
//        return values;
//     }
//     let values = getValues(expression);
//     switch (values[1]) {
//         case '+': 
//             return  showResult(sum(values));
//         case '-':
//             return  showResult(subtract(values));
//         case '*':
//             return  showResult(multiply(values));
//         case '/':
//             return showResult(divide(values))
//     }
//     function showResult(value){
//         return value
//     }
// }
  
// function sum(values) {
//     return +values[0] + +values[2];
// }
// function subtract(values) {
//     return values[0] - values[2];
// }
// function multiply(values) {
//     return values[0] * values[2];
// }
// function divide(values) {
//     return values[0] / values[2];
// }

/*-------------Завдання №2-------------*/
// function count(expression){
//     function getValues(expression){
//        let values = [...expression]
//        return values;
//     }
//     let values = getValues(expression);
//     switch (values[1]) {
//         case '+': 
//             return  showResult(sum(values));
//         case '-':
//             return  showResult(subtract(values));
//         case '*':
//             return  showResult(multiply(values));
//         case '/':
//             return showResult(divide(values))
//     }
//     function showResult(value){
//         return value
//     }
// }
  
// function sum(values) {
//     return +values[0] + +values[2];
// }
// function subtract(values) {
//     return values[0] - values[2];
// }
// function multiply(values) {
//     return values[0] * values[2];
// }
// function divide(values) {
//     try{
//         if (values[2] == 0){
//             throw new Error("Can't divide by 0");
//         } else{
//             return values[0] / values[2];
//         }
//     } catch(error){
//         console.log(error.message);
//         console.log("0");
//     }
// }

/*-------------Завдання №3-------------*/
// function count(expression){
//     function getValues(expression){
//        let values = [...expression]
//        return values;
//     }
//     let values;
//     try{
//         let data = Values(expression);
//         data = values
//     }catch(error){
//         if (error.message === 'expression is not iterable'){
//             console.log('You write incorrect data');
//         }else{
//             console.log(error.name + ': ' + error.message)
//             values = [0, '+', 0];
//         }
//     }
//     switch (values[1]) {
//         case '+': 
//             return  showResult(sum(values));
//         case '-':
//             return  showResult(subtract(values));
//         case '*':
//             return  showResult(multiply(values));
//         case '/':
//             return showResult(divide(values))
//     }
//     function showResult(value){
//         return value
//     }
// }

// function sum(values) {
//     return +values[0] + +values[2];
// }
// function subtract(values) {
//     return +values[0] - +values[2];
// }
// function multiply(values) {
//     return +values[0] * +values[2];
// }
// function divide(values) {
//     return +values[0] / +values[2];
// }

/*-------------Завдання №4-------------*/
// function MakeUsers(name, age){
//     this.name = name;
//     this.age = age;
// }
// let user = new MakeUsers('Mike');
//     function showMovie (user){
//         user.age = prompt('How old are you?', 0);
//         try{
//             if (user.age == undefined){
//                 throw new SyntaxError('Age not determined');
//             }   
//             while(isNaN(user.age)){
//                 user.age = prompt('Repeat your age!', 0);
//             }
//             if (Number(user.age) == NaN){
//                 user.age = prompt('Repit your age?', 0);
//             }
//             if(+user.age >= 18){
//                 console.log('You can watch this movie');
//             }
//             if(+user.age < 18){
//                 console.log('Sorry, you are too young');
//             }
//         }
//         catch(error){
//             console.log(error.message);
//         }  
//     }
//     showMovie(user);