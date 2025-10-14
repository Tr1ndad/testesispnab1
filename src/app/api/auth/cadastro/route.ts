import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const {
      nome,
      cpf,
      email,
      senha,
      telefone,
      municipio,
      rua,
      numero,
      bairro,
      area_cultural,
      outras_areas,
      curriculo,
      portfolio,
    } = await request.json();

    if (!nome || !cpf || !email || !senha || !municipio || !rua || !numero || !bairro || !area_cultural || !curriculo) {
      return NextResponse.json(
        { message: "Todos os campos obrigatórios devem ser preenchidos" },
        { status: 400 }
      );
    }

    // Verificar se email já existe
    const existingUserByEmail = await prisma.usuario.findUnique({
      where: { email }
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        { message: "Email já cadastrado" },
        { status: 400 }
      );
    }

    // Verificar se CPF já existe
    const existingUserByCpf = await prisma.usuario.findUnique({
      where: { cpf }
    });

    if (existingUserByCpf) {
      return NextResponse.json(
        { message: "CPF já cadastrado" },
        { status: 400 }
      );
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(senha, 10);

    // Criar usuário
    const user = await prisma.usuario.create({
      data: {
        nome,
        cpf,
        email,
        senha: hashedPassword,
        telefone,
        tipo: "proponente",
        municipio_id: municipio,
      }
    });

    // Aqui você poderia adicionar mais lógica, como:
    // - Criar um perfil de artista
    // - Enviar email de confirmação
    // - Criar notificações, etc.

    return NextResponse.json({
      message: "Cadastro realizado com sucesso! Verifique seu email.",
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
      }
    });
  } catch (error) {
    console.error("Erro no cadastro:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}