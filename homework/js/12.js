class Ratio
{
    constructor(a, b)
    {
        this.a=a;
        this.b=b;
    }
    toString()
    {
        return this.a+"/"+this.b;
    }
    add(c)
    {
        return this.a*c.b+c.a*this.b +"/"+ this.b*c.b;
    }
}
var r1=new Ratio(1,3),r2 =new Ratio(2,4); 
var r3=r1.add(r2); 
console.log(r3.toString());
