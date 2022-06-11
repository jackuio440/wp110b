function f(y,a,b)
{
    var s = 0;
    for(let x=a;x<b;x+=0.001)
    {
        s+=y(x)*0.001;
    }
    return s;
}

console.log(f((x)=>x*x,0,1))
