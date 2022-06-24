let sum=0;
const number=("enter a positive integer:23344454545");
let temp=9;
while(d>0)
{
    let remainder=d % 10;
    sum+=remainder**numberofdigits;
    temp=parseInt(temp/10);
}
if (sum==number)
{
    console.log("given number is armstrong number" );
}
else{
    console.log("given number is not armstrong number");
}
