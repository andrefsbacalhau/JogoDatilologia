import React, { useState } from "react";

function Jogar() {
  const [resultado, setResultado] = useState("");
  const [gesto, setGesto] = useState({});
  const [palavra, setPalavra] = useState("");
  const [solucao, setSolucao] = useState(false);

  const palavras = [
    "jogo",
    "campo",
    "grande",
    "pinheiro",
    "jardim",
    "couves",
    "cenouras",
    "holocausto",
    "habitar",
    "casamento",
    "independente",
    "horizonte",
    "gato",
    "cavalo",
    "baleia",
    "dentes",
    "candeeiro",
    "livro",
    "bola",
    "aspirador",
    "computador",
    "capacete",
    "mota",
    "sobreiro",
    "eduardo",
    "maria",
    "rute",
    "bruno",
    "pedro",
    "caldeirada",
    "dentista",
    "cabo",
    "telefone",
    "tabaco",
    "fumar",
    "beber",
    "mochila",
    "alface",
    "carro",
    "amor",
    "pau",
    "porta",
    "surdo",
    "cego",
    "mudo",
    "cigarro",
    "clicar",
    "pijama",
    "alemanha",
    "perfilar",
    "surpreso",
    "ofendido",
    "calotear",
    "cabuloso",
    "detector",
    "iminente",
    "homem",
    "mulher",
    "pequeno",
    "foguete",
    "comboio",
    "programa",
    "futebol",
    "filme",
    "teclado",
    "capacete",
    "introduz",
    "frente",
    "caracol",
    "sorriso",
    "rato",
    "metro",
    "galinha",
    "barco",
    "restaurante",
    "cicatriz",
    "papagaio",
    "caderno",
    "coluna",
    "sol",
    "lua",
    "gorila",
    "macaco",
    "peixe",
    "carvalho",
    "sobrancelha",
    "pernilongo",
    "otorrinolaringologista",
    "gravata",
    "caravela",
    "escaravelho",
    "fadista",
    "estufa",
    "auscultadores",
    "operador",
    "chamada",
    "faculdade",
    "greve",
    "desemprego",
    "apologista",
    "sorridente",
    "inspirador",
    "ocultar",
    "vandalismo",
    "governo",
    "chinelo",
    "cinzeiro",
    "estor",
    "sanita",
    "monitor",
    "cortina",
    "mercado",
    "carregador",
  ];

  const gestos = [
    {
      letra: "a",
      imagem: "letraa.jpg",
    },
    {
      letra: "b",
      imagem: "letrab.jpg",
    },
    {
      letra: "c",
      imagem: "letrac.jpg",
    },
    {
      letra: "d",
      imagem: "letrad.jpg",
    },
    {
      letra: "e",
      imagem: "letrae.jpg",
    },
    {
      letra: "f",
      imagem: "letraf.jpg",
    },
    {
      letra: "g",
      imagem: "letrag.jpg",
    },
    {
      letra: "h",
      imagem: "letrah.jpg",
    },
    {
      letra: "i",
      imagem: "letrai.jpg",
    },
    {
      letra: "j",
      imagem: "letraj.jpg",
    },
    {
      letra: "k",
      imagem: "letrak.jpg",
    },
    {
      letra: "l",
      imagem: "letral.jpg",
    },
    {
      letra: "m",
      imagem: "letram.jpg",
    },
    {
      letra: "n",
      imagem: "letran.jpg",
    },
    {
      letra: "o",
      imagem: "letrao.jpg",
    },
    {
      letra: "p",
      imagem: "letrap.jpg",
    },
    {
      letra: "q",
      imagem: "letraq.jpg",
    },
    {
      letra: "r",
      imagem: "letrar.jpg",
    },
    {
      letra: "s",
      imagem: "letras.jpg",
    },
    {
      letra: "t",
      imagem: "letrat.jpg",
    },
    {
      letra: "u",
      imagem: "letrau.jpg",
    },
    {
      letra: "v",
      imagem: "letrav.jpg",
    },
    {
      letra: "w",
      imagem: "letraw.jpg",
    },
    {
      letra: "x",
      imagem: "letrax.jpg",
    },
    {
      letra: "y",
      imagem: "letray.jpg",
    },
    {
      letra: "z",
      imagem: "letraz.jpg",
    },
  ];

  function handleRandomWord() {
    setSolucao(false);
    const palavra = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(palavra);
    const letras = palavra.split("");
    let i = 0;

    const myInterval = setInterval(function () {
      if (i < letras.length) {
        setResultado(letras[i]);
        gestos.filter((gesto) => {
          if (gesto.letra === letras[i]) {
            console.log("Letra:" + gesto.letra + " imagem:" + gesto.imagem);
            setGesto(gesto);
          }
        });
        i++;
      } else {
        clearInterval(myInterval);
      }
    }, 400);
  }

  return (
    <div className="flex items-center justify-center mt-5">
      <div className="border w-full flex flex-col items-center justify-center p-10 bg-zinc-600 text-white">
        <label className="text-justify">
          Se clicares no botão "Rodar" vais ter uma palavra da nossa coleção
          aleatoriamente, e as imagens que vão aparecer no ecrã serão as letras
          dessa palavra. Terás de adivinhar, será que consegues?
        </label>

        {gesto.imagem && (
          <img
            src={`./images/${gesto.imagem}`}
            className="w-[500px] h-[500px]"
          ></img>
        )}

        <button
          onClick={handleRandomWord}
          className="bg-green-500 w-[100px] h-[50px] rounded-md mt-4 font-bold"
        >
          Roda!
        </button>

        <button
          onClick={() => setSolucao(true)}
          className="bg-blue-500 w-[100px] h-[50px] rounded-md mt-4 font-bold"
        >
          Solução
        </button>

        {solucao && (
          <>
            <h1>A solução é:</h1>
            <input
              type="text"
              value={palavra}
              className="text-black px-2 text-center w-[150px]"
            ></input>
          </>
        )}
      </div>
    </div>
  );
}

export default Jogar;
