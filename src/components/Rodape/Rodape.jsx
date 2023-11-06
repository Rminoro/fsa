import React from 'react';
import Link from 'next/link';
// import styles from './styleFooter.module.css';

export default function Rodape() {
  return (
    <footer >
      <p >Entre em contato conosco</p>
      <p >Quer saber mais sobre os Devs por trás do projeto? Clique no botão abaixo e confira</p>
      <div>
        
        <Link href="/produtos/sobrenos">
        <button style={{ backgroundColor: 'blue', color: 'white' }}>Sobre nós</button>
        </Link>
       

      </div>
      <div id="sobreNosCont">
        <p>@Grupo ntc</p>
        <p >grupontc1@gmail.com</p>
        <p >(11)98716-6289</p>
      </div>
    </footer>
  );
}
