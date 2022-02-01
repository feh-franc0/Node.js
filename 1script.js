// AULA 1
// //para executar na linha de comando,usamos $  node nomejs.js

// let a = 180;
// let b = 130;
// let c = soma(a, b);

// function soma(x, y){
//     return x+y;
// }
// console.log(c)//node mostra apenas a saida,nesse caso o console.log

// console.log(document) // no node nao se tem o objeto document
// console.log(window) // no node nao se tem o objeto window



//////////////////////////////////////
// AULA 2
// let args = process.argv.slice(2); // para pegar os argumentos passados pelo terminal(node 1script.js s 20 50) s = soma   ou   m = multiplicar

// // console.log(args)

// let a = Number(args[1]);
// let b = Number(args[2]);
// let c = "";

// if (args[0] == 's'){
//     c = soma(a,b);
// }else if (args[0] == 'm'){
//     c = mult(a,b);
// }else{
//     c = "Opção inválida"
// }


// function soma(x,y){
//     return x + y;
// }

// function mult(x,y){
//     return x*y;
// }

// console.log(c);



//////////////////////////////////////
// AULA 3 - modulos em diferentes arquivos

// let soma = require("./soma");
// let mult = require("./mult");


// let args = process.argv.slice(2);

// let a = Number(args[1]);
// let b = Number(args[2]);
// let c = "";

// if (args[0] == 's'){
//     c = soma(a,b);
// }else if (args[0] == 'm'){
//     c = mult(a,b);
// }else{
//     c = "Opção inválida"
// }
    
// console.log(c)
            
            
            
    
//////////////////////////////////////
// AULA 4 - modulos em um unico arquivo

// let calc = require("./calc");

// let args = process.argv.slice(2);

// let a = Number(args[1]);
// let b = Number(args[2]);
// let c = "";

// if (args[0] == 's'){
//     c = calc.soma(a,b);
// }else if (args[0] == 'm'){
//     c = calc.mult(a,b);
// }else{
//     c = "Opção inválida"
// }

// console.log(c)



//////////////////////////////////////
// AULA 5 - um pouco mais sobre módulos

// // let soma = require('./objmodulo').soma;
// // let mult = require('./objmodulo').mult;

// // console.log(soma(3,4));
// // console.log(mult(3,4));


// // let calc = require('./4objmodulo')
// let soma = require('./4objmodulo').soma;
// let mult = require('./4objmodulo').mult;

// // console.log(calc.soma(3,4))
// // console.log(calc.mult(3,4))
// console.log(soma(3,4))
// console.log(mult(3,4))



///////////////////////////////////////////////////
// AULA 6 - Trabalhando com Arquivos em Node

// let fs = require('fs');

//sobreescrece ou cria um arquivo
// fs.writeFile('teste.txt', 'Hello World', function(error){

//     if(error){throw error};

//     console.log("Arquivo criado com sucesso!");

// })



// let fs = require('fs');

// concatena o que queremos com o que ja esta no arquivo
// fs.appendFile('teste.txt', ' - Olá Mundo', function(error){

//     if(error){throw error};

//     console.log("Arquivo Atualizado com sucesso!");

// })



// let fs = require('fs');

// //excluir o arquivo
// fs.unlink('teste.txt', function(error){

//     if(error){throw error};

//     console.log("Arquivo Apagado com sucesso!");

// })



// let fs = require('fs');

// // renomeia o arquivo
// fs.rename('teste.txt','NovoNome.txt', function(error){

//     if(error){throw error};

//     console.log("Arquivo Renomeado com sucesso!");

// })



// let fs = require('fs');

// // ler arquivo
// fs.readFile('NovoNome.txt','UTF8', function (error, data){

//     if (error) { throw error };

//     console.log(data);

// })



// // Fazendo um sisteminha com o que aprendemos
// // cmd do terminal: node 1script.js NovoNome.txt
// let fs = require('fs');

// let args = process.argv.slice(2);

// let fileName = args[0];

// fs.readFile(fileName, "UTF8", (error, data)=>{
//     if(error) throw error;
//     fs.writeFile(fileName + "_Uppercase", data.toUpperCase(), (error)=>{
//         if (error) throw error;

//         console.log("Arquivo gerado com sucesso");
//     })
// })




///////////////////////////////////////////////////
// AULA 7 - Pacotes

//pacote sao conjuntos de um ou mais modulos,pegamos varios modulos, juntamos eles e criamos um pacote.
// NPM : gerenciado de pacotes do node
/** NPM - como criar pacotes
 *  npm init
 * package name: matematica
 * version: 1.0.0
 * description: Funções Matemáticas
 * entry point: index.js
 * test command:
 * git repository:
 * keywords:
 * author:
 * license: (ISC)
 * 
 * 
 * Is this OK? (yes)
 * 
 */

