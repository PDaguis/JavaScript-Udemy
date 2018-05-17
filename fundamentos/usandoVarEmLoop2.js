var funcs = []

for(var i=0; i<10; i++){
    //ADICIONA ELEMENTOS AO ARRAY
    funcs.push(function(){
        return console.log(i)
    })
}

funcs[2]()
funcs[8]()