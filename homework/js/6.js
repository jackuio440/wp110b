var a=[];
function f(n){
    for(var i=2;i<=n;i++)
    {
        if(n%i==0){
            n/= i;
            a.push(i);
            if(i==2)
            {
                i=2;
            }
            else
            {
                i--;
            }
        }
    }
        console.log(a);
}
f(45)
