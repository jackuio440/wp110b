function a(n,m)
{
    for(var i=0;i<n.length;i++)
    {
        for(var j=0;j<n[0].length;j++)
        {
            n[i][j]+=m[i][j];
        }
    }
    return n;
}

console.log(a([[1,2],[3,4]], [[1,1],[1,1]]));
