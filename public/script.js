// B.1. DEFINIÇÃO DOS DADOS (JSON)
const catalogo = [
    {
        id: 1,
        titulo: "Interestelar",
        tipo: "filme",
        ano: 2014,
        generos: ["ficção científica", "drama"],
        nota: 9.5,
        assistido: true
    },

    {
        id: 2,
        titulo: "Breaking Bad",
        tipo: "serie",
        ano: 2008,
        generos: ["drama", "crime"],
        nota: 9.7,
        assistido: true
    },

    {
        id: 3,
        titulo: "Round 6",
        tipo: "serie",
        ano: 2021,
        generos: ["suspense"],
        nota: 8.5,
        assistido: false
    },

    {
        id: 4,
        titulo: "Vingadores: Ultimato",
        tipo: "filme",
        ano: 2019,
        generos: ["ação", "aventura"],
        nota: 8.9,
        assistido: true
    },

    {
        id: 5,
        titulo: "The Office",
        tipo: "serie",
        ano: 2005,
        generos: ["comédia"],
        nota: 8.8,
        assistido: false
    },

    {
        id: 6,
        titulo: "Titanic",
        tipo: "filme",
        ano: 1997,
        generos: ["romance", "drama"],
        nota: 8.2,
        assistido: true
    }
];


// B.2. ACESSO E LEITURA DOS DADOS
console.log(catalogo);

console.log("Primeiro título:", catalogo[0].titulo);

console.log(
    "Ano do último item:",
    catalogo[catalogo.length - 1].ano
);

if (catalogo[2].generos[1]) {
    console.log(
        "Segundo gênero do terceiro item:",
        catalogo[2].generos[1]
    );
} else {
    console.log(
        "O terceiro item possui apenas um gênero."
    );
}

// B.3. ITERAÇÕES COM ITERATORS
// A) forEach
console.log("===== LISTAGEM =====");

catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});
// B) map
const titulosEmCaixaAlta = catalogo.map(item => {
    return item.titulo.toUpperCase();
});

console.log("===== TÍTULOS EM MAIÚSCULO =====");
console.log(titulosEmCaixaAlta);

// C) filter
const naoAssistidos = catalogo.filter(item => {
    return item.assistido === false;
});

console.log("===== NÃO ASSISTIDOS =====");
console.log(
    `Quantidade de não assistidos: ${naoAssistidos.length}`
);

// D) find
const itemNotaAlta = catalogo.find(item => {
    return item.nota >= 9;
});

console.log("===== PRIMEIRO ITEM COM NOTA >= 9 =====");

if (itemNotaAlta) {
    console.log(
        `${itemNotaAlta.titulo} - Nota: ${itemNotaAlta.nota}`
    );
} else {
    console.log("Nenhum item encontrado.");
}

// E) reduce
const somaNotas = catalogo.reduce((acumulador, item) => {
    return acumulador + item.nota;
}, 0);

const mediaGeral = somaNotas / catalogo.length;

const assistidos = catalogo.filter(item => {
    return item.assistido === true;
});

const somaAssistidos = assistidos.reduce((acumulador, item) => {
    return acumulador + item.nota;
}, 0);

const mediaAssistidos = somaAssistidos / assistidos.length;

console.log("===== MÉDIAS =====");

console.log(
    `Média geral: ${mediaGeral.toFixed(2)}`
);

console.log(
    `Média dos assistidos: ${mediaAssistidos.toFixed(2)}`
);

// F) some e every
const existeAntigo = catalogo.some(item => {
    return item.ano < 2000;
});

const todosTemGenero = catalogo.every(item => {
    return item.generos.length > 0;
});

console.log("===== CHECAGENS =====");

console.log(
    "Existe item anterior a 2000?",
    existeAntigo
);

console.log(
    "Todos possuem pelo menos 1 gênero?",
    todosTemGenero
);


// B.4. SAÍDA NA TELA (DOM)
const quantidadeFilmes = catalogo.filter(item => {
    return item.tipo === "filme";
}).length;

const quantidadeSeries = catalogo.filter(item => {
    return item.tipo === "serie";
}).length;

const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

const output = document.getElementById("output");

output.innerHTML = `
    <h2>Resumo do Catálogo</h2>

    <p><strong>Total de itens:</strong> ${catalogo.length}</p>

    <p><strong>Quantidade de filmes:</strong> ${quantidadeFilmes}</p>

    <p><strong>Quantidade de séries:</strong> ${quantidadeSeries}</p>

    <p><strong>Não assistidos:</strong> ${naoAssistidos.length}</p>

    <p><strong>Média geral:</strong> ${mediaGeral.toFixed(2)}</p>

    <h3>Top 3 Maiores Notas</h3>

    <ol>
        ${ranking.map(item => `
            <li>${item.titulo} - Nota ${item.nota}</li>
        `).join("")}
    </ol>
`;