import Image from "next/image";
import Link from "next/link";
import ellipse from "../../../../public/img/ellipse-1.png"
import iconePortinho from "../../../../public/img/iconePortinho.png";




// import styles from '../styles/Chatbot.module.css'; // Importe seu arquivo CSS ou estilize diretamente no JSX

export default function Chatbot() {
  return (
    <div id="scrollableContainer" style={{ width: '100%', height: 'calc(100vh - 60px)', overflow: 'auto' }}>
      <div>
        <div >
          <div >
            <img src="/iconePortinho.png" alt="iconePortinho" />
            <Image src="/img/iconePortinho.png" alt="iconePortinho" width={200} height={200} /> 
            <div >
              <div >
                <img src="/retangle2.png" alt="Retangulo fundo de texto" />
                <p >
                  Para isso, apresentamos a vocês o Portinho, nosso mascote virtual que será responsável pelo atendimento
                  via Chatbot.
                  <br />
                  <br />
                  Diga Olá pro Portinho!
                </p>
                {/* <img src="/iconePortinho.png" alt="Image" /> */}
                {/* <Image src="/img/iconePortinho.png" alt="Portinho" width={200} height={200} /> */}
              </div>
            </div>

            <img src="/retangle1.png" alt="Informaes" />

            <div >
              <div >
                <div >
                  <div >
                  <Image src="/img/ellipse-1.png" alt="Ellipse" width={200} height={200} /> 
                    {/* <img  src="/ellipse-1.png" alt="Ellipse" /> */}
                  </div>
                  <div >Portinho</div>
                  <img  src="/close.png" alt="Close" />
                </div>
                <div >
                  <div  />
                  <div>Digite sua mensagem...</div>
                  <img  src="/emote.png" alt="Emote" />
                  <img  src="/email-send.png" alt="Email send" />
                  <img src="/attach.png" alt="Attach" />
                  <img  src="/audio.png" alt="Audio" />
                </div>
                <div>
                  <p >Olá! Sou o Portinho, o bot da Porto Help!</p>
                </div>
                <div >
                  <p >No que posso te ajudar?</p>
                </div>
                <div >
                  <div >Olá Portinho!</div>
                </div>
                <div >
                  <p >Preciso de um guincho urgente</p>
                </div>
                <div >
                  <p >Estou enviando um modal para você agora mesmo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
