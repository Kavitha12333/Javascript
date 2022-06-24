let a=23456;
let rev=0;
let lastdigit;
while(a !=0)
{
    lastdigit =a%10;
    rev =rev*10+lastdigit;
    a=math.floor(a/10);
}
console.log("revers number is"+rev);