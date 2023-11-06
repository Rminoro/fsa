import Link from 'next/link';
import "./Cabecalho.scss";


export default function Cabecalho() {
  return (
    <header className='cabecalho'>
        <nav>
          <Link href="/produtos/home">Home</Link>
          <Link href="/login">LOGIN</Link>
          <Link href="/produtos/solicitar">SOLICITAR</Link>
          <Link href="/produtos/Chatbot">Chatbot</Link>
          <Link href="/produtos/sobrenos">Sobre nós</Link>
          <Link href="/produtos/objetivos">Objetivos</Link>
          
        </nav>
    </header>
  )
}
