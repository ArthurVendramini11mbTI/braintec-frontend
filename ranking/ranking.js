async function carregarRanking() {
    try {
        const response = await fetch("http://localhost:3333/ranking");
        const ranking = await response.json();

        const primeiro = document.getElementById("primeiro");
        const segundo = document.getElementById("segundo");
        const terceiro = document.getElementById("terceiro");
        const quarto = document.getElementById("quarto");
        const quinto = document.getElementById("quinto");

        if (ranking[0]) primeiro.value = `🥇 ${ranking[0].name} - ${ranking[0].pontuacao} pts`;
        if (ranking[1]) segundo.value = `🥈 ${ranking[1].name} - ${ranking[1].pontuacao} pts`;
        if (ranking[2]) terceiro.value = `🥉 ${ranking[2].name} - ${ranking[2].pontuacao} pts`;
        if (ranking[3]) quarto.value = `🏅 ${ranking[3].name} - ${ranking[3].pontuacao} pts`;
        if (ranking[4]) quinto.value = `🏅 ${ranking[4].name} - ${ranking[4].pontuacao} pts`;

    } catch (error) {
        console.log("Erro ao carregar ranking:", error);
    }
}

carregarRanking();
