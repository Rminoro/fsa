import Image from "next/image";
import Link from "next/link";
import Caua from "../../../../public/img/caua.png"
import Edu from "../../../../public/img/edu.png";
import Kaka from "../../../../public/img/kaka.png";
import Rafa from "../../../../public/img/rafa.png";
import Thiago from "../../../../public/img/thiago.png";
import style from "../sobrenos/style.css"

export default function sobrenos() {
  return (
    <main>
      <div id="divIntegrantes">
        <Image className="integrantes" src="/img/caua.png" alt="Caua" width={200} height={200} />
        <Image className="integrantes" src="/img/edu.png" alt="Edu" width={200} height={200}/>
        <Image className="integrantes" src="/img/kaka.png" alt="kaique" width={200} height={200} />
        <Image className="integrantes" src="/img/rafa.png" alt="img rafa" width={200} height={200}/>
        <Image className="integrantes" src="/img/thiago.png" alt="img thiago" width={200} height={200}/>
      </div>
    </main>
  );
}
