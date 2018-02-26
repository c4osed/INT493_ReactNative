f = [{name:'a',size:30},{name:'b',size:40},{name:'c',size:30}]
f2 = f.map((item,index)=> {
    return Object.assign(item,{key:index.toString()});
});
console.log(f2);