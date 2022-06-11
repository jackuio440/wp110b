
function a(n)
{
    var b=0;
    for(var a=2;a<=n/2;a++)
    {
        if(n%a==0)
        {
            b++;
            
        }
    }
    if(b==0)
    {
        return true;

    }
    else
    {
        return false;
    }
}
console.log('isprime(17)'+a(17));
console.log('isprime(21)'+a(21));

