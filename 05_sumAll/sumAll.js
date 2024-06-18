//having a function that gives the range of number between the given numbers
let list=[];
const range=function(num1, num2){
    if (num1<num2){
        do {
            list.push(num1)
            num1+=1;

        }while(num1<=num2)
    
        return list;
        
    }else{
        do {
            list.push(num2)
            num2+=1;

        }while(num1>=num2)
    
        return list;
        
    }
};
//console.log(range(1,4))
//console.log(range(4,1))

//having a function that sum the elements of a list
let sum=0
const sumList=function(ourList){
    for (const i of ourList){
        sum+=i
    

    }
return sum 
};

const sumAll=function(num1, num2){
    if (num1<0 || num2<0){
        return "ERROR"
    }else if (!num1.isInteger || !num2.isInteger){
        return "ERROR"

    }else{
        return sumList(range(num1, num2));
    }

    
};


console.log(sumAll(10,[90,1]))
//console.log(sumAll(1,4000))
 //Do not edit below this line
module.exports = sumAll;
