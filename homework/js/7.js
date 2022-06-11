const t=([[1,2,3], [3,2,1]]);
const a=[];
for(var m=0;m<t[0].length;m++)
{
    a[m]=[];
    for(var n=0;n<t.length;n++)
    {
        a[m][n]=t[n][m];
    }
}
console.log(a);
