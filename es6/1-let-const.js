//1. var/ let, const: scope, hosting
//2. const/ var, let: assignment
//code block: if else, loop ,{}...

{
    const course= 'JS basic!';
    {
        {
            let course= 123;
            console.log('course',course);
            
        }
    }
}

//let va const hoat dong trong khối chứa nó,ngoài khối chứa nó thì sẽ lỗi
//var ho tro hosting,hosting đưa lên đầu
a=1;
var a;
console.log("a",a);

//assignment
const b={
    name:'js',
}
b.name='php';
console.log('b',b.name);
//bien ko gan lai duoc nhung thuộc tính co the gán lai dc
//khi định nghĩa và không gán lại dùng const,ngc lại let