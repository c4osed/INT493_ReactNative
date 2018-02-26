f = ['a','b','c']
f2 = f.map((item,index)=> {
    return Object.assign({},{key:index.toString(),data:item});
});
console.log(f2);