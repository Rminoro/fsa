import Link from 'next/link';

export default function Calca (){

  return (
    <div>
      <div id="scrollableContainer" style={{ width: '100%', height: '80vh', overflow: 'auto' }}>
        <div id="superContainer">
          <div id="Container1">
            <h1 id="titulo">Com a Porto Help você pode mais!</h1>
            <h2 id="texto">
              Buscamos criar um layout simples interativo, mas sem deixar de lado um design atrativo e interessante.
            </h2>
          </div>

          <div id="Container2">
            <p id="tituloC2">Aqui você poderá realizar o chamado de um modal de forma rápida e prática!</p>
            <p id="textoC2">
              A Porto Help visa auxiliar nossos clientes com o objetivo de realizar um atendimento eficaz e com praticidade,
              buscando o melhor para todos os usuários, independente de faixa etária/conhecimento. Para isso, iremos utilizar
              métodos com fácil utilização e que atendam todas as necessidades.
            </p>
            <p id="containerBotao">
              {/* <Link href="/solicitar" passHref>
                <a className="botao">Realizar Chamado</a>
              </Link> */}
            </p>
          </div>
        </div>

        <div id="containerObj">
          <p id="conteudoObj">Entenda um pouco mais sobre o projeto Porto Help</p>
          {/* <Link href="/objetivos" passHref>
            <a className="botaoObj">Objetivos</a>
          </Link> */}
        </div>

        <div id="containerVei">
          <p id="conteudoVei">Visamos atender o chamado de veículos pesados, buscando realizar o chamado para as seguintes categorias:</p>
          <div id="veiculos">
            <div className="veiculo">
              <p>Caminhões</p>
            </div>
            <div className="veiculo">
              <p>Ônibus</p>
            </div>
            <div className="veiculo">
              <p>Trailers</p>
            </div>
          </div>
        </div>

        <div id="containerChatbot">
          {/* Chatbot */}
        </div>

        <div>
          {/* Rodape */}
        </div>
      </div>
    </div>
  );
};

