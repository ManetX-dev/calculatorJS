var resultadoParcial = 0;
var entradaComParcial = true;

function setValue(value){

    if(value == "+" || value == "-" || value == "*" || value == "/"){


        console.log("Operacao");

        if(!document.getElementById("h1Value").textContent == ""){

            var resultadoParcial = document.getElementById("h1Parcial").textContent;
            var expressao = document.getElementById("h5Value").textContent;
            var operacaoAnterior = expressao.charAt(expressao.length-1);
            var valorASerOperado = document.getElementById("h1Value").textContent;

            // alert(resultadoParcial + operacaoAnterior + valorASerOperado);

            // if(operacaoAnterior == "+"){

            //     resultadoParcial = soma(resultadoParcial, valorASerOperado);

            // }



            // alert(document.getElementById("h1Value").textContent);
            // alert(operacaoAnterior);

            // armazenaParcial(parseInt(valorASerOperado));

            document.getElementById("h5Value").innerHTML = document.getElementById("h5Value").textContent.concat(document.getElementById("h1Value").innerHTML, value);
            document.getElementById("h1Value").innerHTML = "";
            document.getElementById("h1Value").innerHTML = soma(parseInt(valorASerOperado));
            document.getElementById("h1Value").style = "color: orange;";

            entradaComParcial = true;



        }

    }else{

        if(value == "c"){

            document.getElementById("h1Value").innerHTML = '&nbsp;';

        }else if(value == "ce"){

            document.getElementById("h5Value").innerHTML = '&nbsp;';
            document.getElementById("h1Value").innerHTML = '&nbsp;';
            resultadoParcial = 0;


        }else{

            if(entradaComParcial){

                document.getElementById("h1Value").innerHTML = "";
                entradaComParcial = false;
                document.getElementById("h1Value").style = "color: dimgray;";
                document.getElementById("h1Value").innerHTML = document.getElementById("h1Value").textContent.concat(value);

            }else{

                document.getElementById("h1Value").innerHTML = document.getElementById("h1Value").textContent.concat(value);
            // entradaVazia = false;
            }

            


        }


    }

}

function soma(valorASerOperado){

    return resultadoParcial+=valorASerOperado;
}
