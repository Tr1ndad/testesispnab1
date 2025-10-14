-- CreateTable
CREATE TABLE "municipios" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "codigo_ibge" VARCHAR(7) NOT NULL,
    "populacao" INTEGER,
    "recursos_totais_recebidos" DECIMAL(15,2) NOT NULL DEFAULT 0,
    "recursos_executados" DECIMAL(15,2) NOT NULL DEFAULT 0,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "municipios_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "municipios_nome_key" UNIQUE ("nome"),
    CONSTRAINT "municipios_codigo_ibge_key" UNIQUE ("codigo_ibge")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "senha" VARCHAR(255) NOT NULL,
    "cpf" VARCHAR(14),
    "telefone" VARCHAR(20),
    "tipo" VARCHAR(20) NOT NULL,
    "municipio_id" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "email_verificado" BOOLEAN NOT NULL DEFAULT false,
    "data_cadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ultimo_acesso" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "usuarios_email_key" UNIQUE ("email"),
    CONSTRAINT "usuarios_cpf_key" UNIQUE ("cpf"),
    CONSTRAINT "usuarios_municipio_id_fkey" FOREIGN KEY ("municipio_id") REFERENCES "municipios" ("id") ON DELETE SET NULL
);

-- CreateTable
CREATE TABLE "editais" (
    "id" TEXT NOT NULL,
    "municipio_id" TEXT NOT NULL,
    "titulo" VARCHAR(255) NOT NULL,
    "descricao" TEXT NOT NULL,
    "numero_edital" VARCHAR(50) NOT NULL,
    "modalidade" VARCHAR(100) NOT NULL,
    "area_cultural" VARCHAR(100),
    "valor_total" DECIMAL(15,2) NOT NULL,
    "valor_disponivel" DECIMAL(15,2) NOT NULL,
    "data_abertura" TIMESTAMP(3) NOT NULL,
    "data_encerramento" TIMESTAMP(3) NOT NULL,
    "data_resultado" TIMESTAMP(3),
    "status" VARCHAR(20) NOT NULL DEFAULT 'rascunho',
    "arquivo_pdf" TEXT,
    "requisitos" TEXT,
    "documentos_necessarios" TEXT[],
    "vagas" INTEGER,
    "visualizacoes" INTEGER NOT NULL DEFAULT 0,
    "criado_por" TEXT
Vou continuar a implementação do projeto SISPNAB. Vamos criar o restante da estrutura:

<dyad-write path="src/app/api/auth/signin/route.ts" description="API de login">
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