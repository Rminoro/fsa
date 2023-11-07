import Image from "next/image";
import Link from "next/link";
import style from "../Chatbot/style.css";
import ellipse from "../../../../public/img/ellipse-1.png"
import iconePortinho from "../../../../public/img/iconePortinho.png";
import retangle2 from "../../../../public/img/rectangle-12.png";
import close from "../../../../public/img/close.png";




// import styles from '../styles/Chatbot.module.css'; // Importe seu arquivo CSS ou estilize diretamente no JSX

export default function Chatbot() {
  return (
    <div id="scrollableContainer" style={{ width: '100%', height: 'calc(100vh - 60px)', overflow: 'auto' }}>
      <div className="chatbot">
        <div className="chatbot-px">
          <div className="overlap">
            <img src="/iconePortinho.png" alt="iconePortinho" />
            <Image src="/img/iconePortinho.png" alt="iconePortinho" width={200} height={200} /> 
            <div className="apresentao-do">
              <div className="overlap-group">
                {/* <img src="/retangle2.png" alt="Retangulo fundo de texto" /> */}
                {/* <Image id="motorista" src="/img/motorista.png" alt="Motorista de caminhão" width={200} height={200}></Image> */}
                {/* <Image id="retangle2" src="/img/retangle2.png" alt="Retangulo fundo de texto" width={200} height={200}></Image> */}
                {/* <Image id="retangle2" src="/img/retangle2.png" alt="Retangulo fundo de texto" width={200} height={200} /> */}
                <p className="para-isso">
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

            <div className="tela-chatbot" >
              <div className="div">
                <div className="overlap-2">
                  <div className="ellipse-wrapper">
                  <Image src="/img/ellipse-1.png" alt="Ellipse" width={200} height={200} /> 
                    {/* <img  src="/ellipse-1.png" alt="Ellipse" /> */}
                  </div>
                  {/* <div className="text-wrapper" >Portinho</div> */}
                  <Image className="close" src="/img/close.png" alt="close" width={200} height={200} /> 
                  
                </div>
                <div  className="overlap-group-2">
                  <div  className="caixa-texto"/>
                  <div className="text-wrapper-2">Digite sua mensagem...</div>
               
                  <Image className="emote" src="/img/emote.png" alt="emote" width={200} height={200} /> 
                  
                  <Image className="email-send" src="/img/email-send.png" alt="email" width={200} height={200} />
                  
                  <Image className="audio" src="/img/audio.png" alt="audio" width={200} height={200} />
                </div>
                <div className="msg-portinho">
                  <p className="p">Olá! Sou o Portinho, o bot da Porto Help!</p>
                </div>
                <div className="div-wrapper">
                  <p className="p">No que posso te ajudar?</p>
                </div>
                <div className="msg-cliente">
                  <div className="text-wrapper-3">Olá Portinho!</div>
                </div>
                <div className="msg-cliente-2">
                  <p className="text-wrapper-3">Preciso de um guincho urgente</p>
                </div>
                <div className="msg-portinho-2">
                  <p className="text-wrapper-4">Estou enviando um modal para você agora mesmo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
