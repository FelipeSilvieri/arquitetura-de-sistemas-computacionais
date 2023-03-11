// // funções

// const teste = (a, b, c) => {return a * b * c}
// const hello = () => console.log('Ai papi')
// hello()

const dobro = valor => valor*2

const ehPar = (n) => {return n % 2 === 0}

console.log(ehPar(5))

  // // Características Arrow Functions;
// // - Quando uma função receber apenas um parâmetro, não e necessário utilizar os parênteses 
// a => {console.log(a)}

// const triplo = function(n = 5){
//   return n * 3
// }
// console.log(triplo(7))


// function hello(){
//   console.log('Hello')
// }
// hello()

// function hello(nome){
//   console.log('Hello' + nome)
// }
// hello('Flavio')


// // 1.5 vetores

// const nomes = ['Ana Maria', 'Antonio', 'Berlinda', 'James', 'Stole']

// const numeros = [1,2,3,4,5]
// const soma = numeros.reduce((ac, v) => {return ac + v})
// console.log(soma)


// // exercicio : [1,2,3,4,5] => [1,4,9,16,25]

// const quadrado = numeros.map((numero)=>{return numero**2})
// console.log(quadrado)


// // filter
// const resultado = nomes.filter((nome) => {return nome.startsWith('A')})
// console.log(resultado)


// // mapeamento
// //['Ana','Pedro'] => ['A','P']
// const letrasIniciais = nomes.map((nome)=>{return nome.charAt(0)})
// console.log(letrasIniciais)


// // arrow function

// const teste = () => {console.log('Minha arrow function')}
// teste()

// // const resultado = nomes.filter()


// function soma(a,b){
//   return (
//     a + b
//   );
// }

// // console.log(soma(5,9))
// v = [2, 'abc', true]


// v1 = []
// v1[0] = 3.4
// v1[10] = 2

// console.log(v1)
// for (let i = 1; i < (v1.length-1); i++){
//   v1[i] = i
//   console.log(v1[i])
// }
// console.log(v1)


