function area (largura , altura){

const area =  largura * altura
if(area > 20){
    console.log(`Arear acima do permitido ${area} m2.`)
    } else {
        return area
    }
}

console.log(area(5,4))