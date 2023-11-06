import Link from 'next/link';
import Image from 'next/image';
import "./Cabecalho.scss";
import logoPortoHelp from "../../../public/img/logoPortoHelp.png"

export default function Cabecalho() {
  return (
    <header id='menu'>
        <nav>
          <Link className="componenteHome" href="/link/home" >  <Image src="/img/logoPortoHelp.png" alt="home" width={100} height={100}></Image> </Link>
          <Link className="componente" href="/login">LOGIN</Link>
          <Link className="componente" href="/link/solicitar">Solicitar</Link>
          <Link className="componente" href="/link/Chatbot">Chatbot</Link>
          <Link className="componente" href="/link/sobrenos">Sobre nós</Link>
          <Link className="componente" href="/link/objetivos">Objetivos</Link>
          
        </nav>
    </header>
  )
}
