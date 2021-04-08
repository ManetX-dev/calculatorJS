function setValue(value){

    if(value == "+" || value == "-" || value == "*" || value == "/"){

        console.log("Operacao");

        var expressao = document.getElementById("h5Value").textContent;
        var valor = document.getElementById("h1Value").textContent;

        if((value == expressao.charAt(expressao.length-1))){

            console.log("Operacao igual a ultima");


        }else{

            console.log("Operacao diferente da ultima");

            document.getElementById("h5Value").innerHTML = document.getElementById("h5Value").textContent.concat(document.getElementById("h1Value").innerHTML, value);
            document.getElementById("h1Value").innerHTML = "";

        }

    }else{

        document.getElementById("h1Value").innerHTML = document.getElementById("h1Value").textContent.concat(value);

    }

}