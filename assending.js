
let a=50;
let b=25;
let c=60;
if((a>=b) && (a>=c)){
if(b>=c)
{
    console.log(a+""+b+""+c);
}
else
{
    console.log(c+""+b+""+c);

}
}
else if((b>=a)&&(b>=c))
{
    if (a>=c)
    {
        console.log(c+""+b+""+c);

    }
    else{
        console.log(a+""+c+""+b);

    }
}

