import Image from "next/image";
import Link from "next/link";

// export default function Tenis(){
//     return(
//         <div>
//             <h1>TÊNIS</h1>
//             <div>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi minus ullam in ut, excepturi vel. Reprehenderit optio hic rerum nihil doloribus. Quos ipsam expedita veritatis aspernatur quasi, magnam eius odit.</p>
//                 <p><Link href="/">HOME</Link></p>
//                 <figure>
//                     <Image src="/img/converse-640×376.png" alt="Tênis" width={320} height={185}/>
//                 </figure>
//             </div>
//         </div>
//     )
// }
// import Image from 'next/image'; // Importe o componente Image do Next.js em vez de usar a tag <img>
// import Caua from '../../public/caua.png';
// import Edu from '../../public/edu.png';
// import Kaka from '../../public/kaka.png';
// import Rafa from '../../public/rafa.png';
// import Thiago from '../../public/thiago.png';
// import styles from './css/style.module.css'; // Use módulos de estilo no Next.js

export default function sobrenos() {
  return (
    <main>
      <div >
        <Image  alt="img caua" />
        <Image  alt="img edu" />
        <Image  alt="img kaique" />
        <Image  alt="img rafa" />
        <Image  alt="img thiago" />
      </div>
    </main>
  );
}
