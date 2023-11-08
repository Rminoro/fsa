"use client";
import React, { useState } from 'react';

export default function Register() {
  const [placa, setPlaca] = useState('');
  const [cpf, setCPF] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      // Enviar a solicitação de registro para o servidor Next.js (você precisa criar a rota correspondente no servidor)
      const response = await fetch('http://localhost:3000/api/base/base-register-api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ placa, cpf }),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.status === 'ok') {
          setMessage('Registro efetuado com sucesso');
        } else {
          setMessage('Placa ou CPF incorretos');
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>REGISTRO DE PLACA E CPF</h1>
      {message && <p>{message}</p>}
      <div>
        <label htmlFor="placa">Placa:</label>
        <input
          type="text"
          id="placa"
          placeholder="Digite a placa do veículo"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cpf">CPF:</label>
        <input
          type="text"
          id="cpf"
          placeholder="Digite o CPF do proprietário"
          value={cpf}
          onChange={(e) => setCPF(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>REGISTRAR</button>
      </div>
    </div>
  );
}
