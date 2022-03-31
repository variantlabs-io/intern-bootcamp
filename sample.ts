
type combinable=number | string;
type descriptor='any-number' | 'string';

//enum
enum Type {admin = 2,user,student};
let checkEnum=()=>{
      console.log(Type.admin);
}

//object
let obj:{
    name:string,
    middlename:string,
    grade:[number,string]
    }={
        name:"divyank",
        middlename:"santosh",
        grade:[2,'A']          //tuple
    }
    // obj.grade.push(true); cant assign boolean
    obj.grade.push(10);
    obj.name="";
    console.log(obj.name + obj.grade[1] +obj.grade[0]); 
    console.log(obj);
    // console.log(obj.grade[2]); giving error ask why?


let expre=(n1:number,n2:number): number=>{
    return n1+n2;
}
function add1(n1:combinable,n2:combinable,typeO: descriptor):combinable{
    let result;
    if(typeof n1==='number' && typeof n2==='number'){
          result=n1+n2;
    }
    else{
        result=n1.toString()+n2.toString();
    }
    if(typeO==='any-number')
    return +result;
    else{
        return result.toString();
    }
}
let add2:(input1:combinable,input2:combinable,input3:descriptor)=>combinable;
add2=add1;

console.log(add1(10,15,'any-number'));
console.log(expre(10,15));
checkEnum();


//unknown vs any

//spread operator