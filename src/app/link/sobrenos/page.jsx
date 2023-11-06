import Image from "next/image";
import Link from "next/link";
import Caua from "../../../../public/img/caua.png"
import Edu from "../../../../public/img/edu.png";
import Kaka from "../../../../public/img/kaka.png";
import Rafa from "../../../../public/img/rafa.png";
import Thiago from "../../../../public/img/thiago.png";
// import styles from './css/style.module.css'; // Use módulos de estilo no Next.js

export default function sobrenos() {
  return (
    <main>
      <div >
        <Image src="/img/caua.png" alt="Caua" width={200} height={200} />
        <Image src="/img/edu.png" alt="Edu" width={200} height={200}/>
        <Image src="/img/kaka.png" alt="kaique" width={200} height={200} />
        <Image src="/img/rafa.png" alt="img rafa" width={200} height={200}/>
        <Image src="/img/thiago.png" alt="img thiago" width={200} height={200}/>
      </div>
    </main>
  );
}
