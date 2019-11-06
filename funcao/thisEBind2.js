function Pessoa(){
    this.idade = 0

    const self = this    // pode ser utilizado self para amarrar o this
    setInterval(function(){
        self.idade++,
        console.log(self.idade)
    }/*.bind(this)*/,1000) // bind.(this) tambem referencia a variavel
}


new Pessoa