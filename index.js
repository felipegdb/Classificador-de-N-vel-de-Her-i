let nameHero;
let xpValue;

nameHero = prompt("Olá, herói! Qual é o seu nome?");

if (nameHero === null) {
    alert("Operação cancelada. Até mais!");
} else {
    nameHero = nameHero.trim();

    while (!nameHero) {
        alert("Por favor, insira seu nome.");
        nameHero = prompt("Olá, herói! Qual é o seu nome?");

        if (nameHero === null) {
            alert("Jornada cancelada. Até mais!");
            break; 
        }

        nameHero = nameHero.trim();
    }

    if (nameHero) {
        alert("Olá, " + nameHero + "! Bem-vindo à aventura!");

        
        if (nameHero !== null) {
            do {
                xpValue = prompt("Por favor, insira o valor da sua xp: ");

                if (xpValue === null) {
                    alert("Jornada cancelada. Até mais!");
                    break;
                }

                xpValue = xpValue.trim();
                if (xpValue === "") {
                    alert("Por favor, insira um valor válido.");
                } else if (isNaN(xpValue)) {
                    alert("Por favor, insira apenas números.");
                }
            } while (xpValue === "" || isNaN(xpValue));

            if (xpValue !== null) {
                let validationXP = confirm(`Confirme se a XP "${xpValue}" está correta.`);

                if (!validationXP) {
                    do {
                        xpValue = prompt("Por favor, insira novamente o valor da sua xp: (Somente números)");
                        if (xpValue === null) {
                            alert("Operação cancelada. Até mais!");
                            break;
                        }
                        xpValue = xpValue.trim();
                        if (xpValue === "") {
                            alert("Por favor, insira um valor válido.");
                        } else if (isNaN(xpValue)) {
                            alert("Por favor, insira apenas números.");
                        }
                    } while (xpValue === "" || isNaN(xpValue));
                }
            }
        }
    }
    if (xpValue <= 1000) {
        alert ("Olá, que massa! Você é nível Ferro!");
    } else if (xpValue > 1001 && xpValue <= 2000) {
        alert ("Que irado! Você é nível Bronze! ");
    } else if (xpValue > 2001 && xpValue <= 5000) {
        alert ("Não acredito, você é Prata!");
    } else if (xpValue > 5001 && xpValue <= 7000) {
        alert ("Você pode ficar feliz, você é Ouro!");
    } else if (xpValue > 7001 && xpValue  <= 8000) {
        alert ("Que legal, você é Platina!");
    } else if (xpValue > 8001 && xpValue  <= 9000) {
        alert ("Parabéns, você é Ascendente!");
    } else if (xpValue > 9001 && xpValue  <= 2000) {
        alert ("Parabéns, você é imortal!");
    } else {
        alert ("Parabéns, você alcançou o maior nível, Radiante ");
    }


    }
