import Image from 'next/image';

export default function Objetivos() {
  return (
    <div>
      <div>
        <div>
          <div>
            <Image src="/machine.png" alt="Machine-Learning" width={100} height={100} />
            <div>
              <Image src="/caixa-2.png" alt="Caixa de texto 2" width={100} height={100} />
              <p>
                Com base nessa classificação precisa, o sistema recomendará o modal de atendimento mais adequado para
                cada situação, como guincho, socorro mecânico ou reboque, dessa forma, nosso sistema estará pronto para
                oferecer recomendações confiáveis e eficientes durante o atendimento de veículos pesados.
              </p>
              <p>
                Ao utilizar algoritmos de aprendizado de máquina, nosso sistema será capaz de analisar imagens de
                veículos pesados e cargas e realizar a identificação automática de seus tipos, levando em consideração
                características como o formato, tamanho e outros atributos relevantes.
              </p>
            </div>
          </div>
          <p>
            E como pretendemos implementar tudo isso?
          </p>
          <div>
            <Image src="/porto.png" alt="Logo da Porto" width={100} height={100} />
            <div>
              <div>
                <Image src="/logoPortoHelp.png" alt="Logo da Porto Help" width={100} height={100} />
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image src="/caixa-1.png" alt="Caixa de texto 1" width={100} height={100} />
              <p>
                O projeto tem como objetivo desenvolver um sistema de recomendação de modal de atendimento para veículos
                pesados em parceria com a Porto Seguro. Através da utilização de técnicas de inteligência artificial e
                processamento de imagem, o sistema será capaz de identificar e classificar os tipos de veículos pesados
                e cargas, além de recomendar o modal de atendimento mais adequado para cada situação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
