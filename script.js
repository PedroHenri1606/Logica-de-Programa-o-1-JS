    function calcularMedia(quantidadeAcertos, quantidadeQuestoes, nomeAluno) {
        resultadoFinal = ((quantidadeAcertos / quantidadeQuestoes) * 100);
        return document.write("A porcentagem de acertos do(a) Aluno(a): " + nomeAluno + " foi: " + resultadoFinal);
    }

    function tabuada(numero) {
        for (var i = 0; i <= 10; i++) {
            document.write(numero + "+" + i + "=" + (numero * i) + "<br>");
        }
    }

    function calculaGasolina(quantidadeGasolina, kmRodado) {
        return document.write(" Gasolina - Km por litro: " + Math.round(kmRodado / quantidadeGasolina) + "<br>");
    }

    function calculaAlcool(quantidadeAlcool, kmRodado) {
        return document.write(" Alcool - Km por litro: " + Math.round(kmRodado / quantidadeAlcool) + "<br>");
    }

    function mostra(frase) {
        document.write(frase);
    }

    function pulaLinha() {
        document.write("<br>");
    }

    function calculaIMC() {

        var peso = recebeValorPeso();
        var altura = (recebeValorAltura() / 100);
        var idade = recebeValorIdade();

        var imc = peso / (altura * altura);
        document.write("<br>Peso: " + peso, "<br>Altura: " + altura, "<br>IMC: " + imc);
    }

    function recebeValorPeso() { return valor = parseInt(document.getElementById("peso").value); }

    function recebeValorAltura() { return valor = parseInt(document.getElementById("altura").value); }

    function recebeValorIdade() { return valor = parseInt(document.getElementById("idade").value); }

    function recebeValorNumero() { return valor = parseInt(document.getElementById("numero").value); }

    //---------------------------------------------------------------------------------------------------

    function sorteia() {
        return Math.round(Math.random() * 10);
    }

    function sorteiaNumeros(quantidadeDeNumeros) {
        var segredos = [];
        var numero = 1;

        while (numero <= quantidadeDeNumeros) {
            var numeroAleatorio = sorteia();
            var achou = false;

            if (numeroAleatorio != 0) {
                for (var i = 0; i < segredos.length; i++) {
                    if (segredos[i] == numeroAleatorio) {
                        achou = true;
                        break;
                    }
                }
                if (achou == false) {
                    segredos.push(numeroAleatorio);
                    numero++;
                }
            }
        }
        return segredos;
    }

    var segredos = sorteiaNumeros(5);

    function adivinhaNumero() {

        var numeroEscolhido = recebeValorNumero();

        for (var i = 0; i < segredos.length; i++) {
            if (numeroEscolhido == segredos[i]) {
                alert("Você acertou, o numero sorteado foi: " + segredos[i]);
                return;
            } else {
                alert("Você errou, tente novamente!");
                break;
            }
        }
    }

    //---------------------------------------------------------------------------------------------------

    function anoCopa(ano) {
        var primeiraCopa = 1930;
        if (ano % primeiraCopa) {
            console.log("Foi ano de copa");
            do {
                console.log("foi ano de copa: " + (ano - 4));
                ano -= 4;
            } while (ano != primeiraCopa);
        }
    }