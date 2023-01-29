//function declaration
function numbers(data,data2){
    console.log(data,data2);
}
numbers(50,100)

//function expression 
/*const fx = (data,data1){
  console.log(data,data1)
}
fx(100,200);*/


//arrow function
const fn = (data,data1) => {
    console.log(data,data1)
}

fn(300,400);

//(or) arrow function 

const fy = (data,data1) => console.log(data,data1)
fy(300,400);