var n=[];
var c=0;
function f(a,b)
{
    for(var m=a;m<=b;m++)
    {
        if(m%3!=0&&m%5!=0&&m%7!=0)
        {
            n[c]=m;
            c++;
            
        }
    }
    
    
        console.log(n);
    
}
f(5,15)

