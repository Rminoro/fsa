import Link from 'next/link';
import Image from 'next/image';
import "./Cabecalho.scss";


export default function Cabecalho() {
  return (
    <header className='cabecalho'>
        <nav>
          <Link href="/link/home" >  Home </Link>
          <Link href="/login">LOGIN</Link>
          <Link href="/link/solicitar">SOLICITAR</Link>
          <Link href="/link/Chatbot">Chatbot</Link>
          <Link href="/link/sobrenos">Sobre nós</Link>
          <Link href="/link/objetivos">Objetivos</Link>
          
        </nav>
    </header>
  )
}
