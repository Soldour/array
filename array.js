
console.log("Gets one")

let a= [-3.14,45, 0.13,-4.123, 19, -20, 0, 21]
let i =0
let maxI,max_in, pos=0
let sum=0 
let  Pve,Neg,neg=0
//loops= new this.a

for(i=0; i<a.length; i++){
    
    sum=sum +a[i]
    
if (a[i] >0){
    pos+=a[i]
     }
if (a[i] <0){
    neg+=a[i]
 }
}

console.log("The sum of the array",sum)
console.log("The sum of posetive Values++:",pos)

let n = a.length
console.log ("Avarage values ", sum/n)//the avarage value
console.log("The Max +ve is: ",Math.min(...a));
console.log("The Max +ve is: ",Math.max(...a));
while (a[i] >0){

  Math.max(a[i])
 
i++
console.log("The Max +ve== is: ",i)
}
///////////////////////////////////// 


////////////////////////////////////
function Negative(arr){
    for(i=0; i<arr.length; i++){
   if (arr[i]<0){
       a[i]=0;
              i++
   }
}
return arr;
}
Negative(a);
///////////////////////////////////

let j,k

for(j=6;j>0;j--){
    
    console.log(a[j])
}
