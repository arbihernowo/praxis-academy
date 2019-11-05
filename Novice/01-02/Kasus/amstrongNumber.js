function amstrongNumber () 
{
    for (var i = 0; i<10; ++i)
    {
        for (var j=0; j<10; ++j)
        {
            for (var k=0; j<10; ++k){
                var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
                var plus = (i*100 + j * 10 + k );
                if (pow == plus )
                {
                    alert(pow);
                }
            }    
        
        }
    }
}

amstrongNumber();
