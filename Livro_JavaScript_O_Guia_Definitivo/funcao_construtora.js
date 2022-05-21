function Point(x, y) {
    this.x = x
    this.y = y
}

var p = new Point(1, 1) // O ponto geometrico

Point.prototype.r = function() {
    return Math.sqrt(
        this.x * this.x +
        this.y * this.y
    );
} // Agora o objeto Point b (e todos os futuros objetos Point) herda o método r()

console.log(p.r())


var p1 = new Point(2, 2)
console.log(p1.r())

// exemplo do livro JavaScript_O_Guia_Definitipo
// Pagina 8
/*
    Nesse exemplo é possivel ver como é possivel instanciar
    um objeto apartir de uma função construtora
    que é como se fosse uma classe

    e o .prototype é como atribuir uma função a classe "ou nesse caso
    a função construtora"

*/
