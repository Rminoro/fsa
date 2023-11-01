import Link from 'next/link';
import "./Cabecalho.scss";


export default function Cabecalho() {
  return (
    <header className='cabecalho'>
        <nav>
          <Link href="/login">LOGIN</Link>
          <Link href="/produtos/calca">CALCA</Link>
          <Link href="/produtos/solicitar">SOLICITAR</Link>
          <Link href="/produtos/meia">MEIA</Link>
          <Link href="/produtos/tenis">TÊNIS</Link>
          <Link href="/tabela/queijo">QUEIJOS</Link>
          <Link href="/produtos/home">Home</Link>
        </nav>
    </header>
  )
}
