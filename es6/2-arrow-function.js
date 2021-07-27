//declaration function
function logger(log){
    console.log(log);
}
logger('Message');

//expression function
const  logger1 = function(log1){
    console.log(log1);
}
logger1('Message1');

//arrow function
const sum = (a,b)=>{
    return a+b;
}
console.log(sum(2,2));

//cach khac
const sum1 = (a,b)=> a+b;
console.log(sum1(2,2));
//ko có dấu {} function hiểu là return luôn

//muốn return object thì thêm ()
const sum2 = (a,b)=> ({a:a,b:b});
console.log(sum2(2,2));

const course ={
    name:'js basic',
    getName: () => {
        return this;//context -arrow function ko tồn tại 
    }
}
console.log(course.getName());

//arrow function không tạo đc constructor function
const Course =function(name,price){
    this.name = name;
    this.price = price;
}
const jsCourse = new Course('php',100);
console.log(jsCourse);