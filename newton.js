function fx(x){
    return x**2-7; 
}
function fxdiv(x){
    return 2*x; 
}

let i = 0;
let error = 0.000001;
let x0 =2;
let x1 = x0-(fx(x0)/fxdiv(x0));

let es = (x1-x0)/x1;

while(Math.abs(es)>= error){
    x1 = x0 - fx(x0)/fxdiv(x0);
    es = (x1-x0)/x1;
    x0 = x1 ;

    if(i==0){
        console.log('ITeration= 0');
        console.log('x 1 =',x1.toFixed(6));     
        console.log('====================');
        i++;
    }
    else{
        console.log('ITeration=',i);
        i++;
        console.log('x',i,' =',x1.toFixed(6));
        console.log('error',Math.abs(es).toFixed(6));
        console.log('====================');
    }
}
console.log('root=',x1.toFixed(6));

