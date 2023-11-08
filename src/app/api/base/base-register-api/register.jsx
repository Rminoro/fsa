import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

const dbFilePath = process.cwd() + '/src/app/api/base/db.json';

export async function POST(request, response) {
  try {
    const data = await request.json();
    
    const file = await fs.readFile(dbFilePath, 'utf-8');
    const dbData = JSON.parse(file);
    
    // Adicione a lógica para validar os dados de registro
    if (!data.placa || !data.cpf) {
      return NextResponse.json({ status: 'error', message: 'Campos inválidos' });
    }

    // Adicione a lógica para verificar se os dados já existem no banco
    for (const user of dbData.usuarios) {
      if (user.placa === data.placa && user.cpf === data.cpf) {
        return NextResponse.json({ status: 'error', message: 'Usuário já registrado' });
      }
    }

    // Se os dados forem válidos e únicos, adicione o novo usuário ao banco
    dbData.usuarios.push(data);
    await fs.writeFile(dbFilePath, JSON.stringify(dbData, null, 2));
    
    return NextResponse.json({ status: 'ok', message: 'Registro efetuado com sucesso' });
  } catch (error) {
    return NextResponse.json({ status: 'error', message: 'Erro no servidor' });
  }
}
