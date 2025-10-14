import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { email, senha } = await request.json();

    if (!email || !senha) {
      return NextResponse.json(
        { message: "Email e senha são obrigatórios" },
        { status: 400 }
      );
    }

    const user = await prisma.usuario.findUnique({
      where: {
        email
      },
      include: {
        municipio: true
      }
    });

    if (!user || !user.ativo) {
      return NextResponse.json(
        { message: "Credenciais inválidas" },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(senha, user.senha);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Credenciais inválidas" },
        { status: 401 }
      );
    }

    // Atualizar último acesso
    await prisma.usuario.update({
      where: { id: user.id },
      data: { ultimo_acesso: new Date() }
    });

    return NextResponse.json({
      id: user.id,
      email: user.email,
      nome: user.nome,
      tipo: user.tipo,
      municipio: user.municipio
    });
  } catch (error) {
    console.error("Erro no login:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}