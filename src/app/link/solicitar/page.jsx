import Image from "next/image";
import Link from "next/link";
import openCV from "../../../../public/img/openCV.jpg";
import openCVexemplo from "../../../../public/img/openCVexemplo.jpg";
// import styles from './stylesolicitar.module.css'; // Use módulos de estilo no Next.js

export default function solicitar() {
  return (
    <main>
      <h1 className/*={styles['titulo-pagina']}*/>Realizando o chamado do modal</h1>

      <div className/*={styles['texto-imagem']}*/>
        <div className/*={styles['caixa-texto-1']}*/>
          <p>
            Através do HaarCascade, uma ferramenta da biblioteca OpenCV, poderemos
            selecionar um pequeno número de características visuais críticas de uma determinada imagem e as utilizar para a etapa de detecção e classificação de objetos. Através de um “Scanner” nosso cliente poderá enviar sua localização e informações relevantes do veículo para que o chamado seja feito adequadamente.
          </p>
        </div>
        /* */
        <div className/*{styles['imagem-opencv']}*/>
         <Image src="/img/openCV.jpg" alt="OpenCV" width={200} height={200}/>
        </div>
      </div>

      <div className/*{styles['texto-imagem']}*/>
        <div className/*{styles['caixa-texto-2']}*/>
          <p>
            O sistema pode proporcionar maior agilidade e eficiência no atendimento, reduzindo o tempo de espera do cliente e aumentando a satisfação do cliente com o serviço prestado. Para o prestador de serviço, o sistema pode ajudar a reduzir custos e aumentar a produtividade, ao fornecer informações mais precisas e assertivas sobre o modal de atendimento mais adequado para cada situação.
          </p>
        </div>

        <div className/*={styles['imagem-haarcascade']}*/>
          
          <Image src="/img/openCVexemplo.jpg" alt="haarCascade" width={200} height={200}/>
        </div>
      </div>
    </main>
  );
};
