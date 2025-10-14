import { useState } from "react";
import { Link } from "react-router-dom";

const editais = [
  {
    id: "1",
    titulo: "Prêmio de Música Popular 2025",
    municipio: "Pinhais",
    modalidade: "Prêmio",
    area_cultural: "Música",
    valor_total: 150000,
    valor_disponivel: 150000,
    status: "aberto",
    data_encerramento: "2025-03-15",
    vagas: 15,
    propostas: 8,
    visualizacoes: 234
  },
  {
    id: "2",
    titulo: "Fomento ao Teatro Infantil",
    municipio: "Colombo",
    modalidade: "Fomento",
    area_cultural: "Teatro",
    valor_total: 120000,
    valor_disponivel: 120000,
    status: "ab

Vou continuar a implementação do projeto SISPNAB. Vamos criar o restante das tabelas do banco de dados:

<dyad-write path="prisma/migrations/20250101000000_init/migration.sql" description="Migração inicial do banco de dados - continuação">
-- CreateTable
CREATE TABLE "projetos" (
    "id" TEXT NOT NULL,
    "edital_id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "titulo" VARCHAR(255) NOT NULL,
    "descricao" TEXT NOT NULL,
    "justificativa" TEXT,
    "objetivos" TEXT,
    "metodologia" TEXT,
    "cronograma" TEXT,
    "valor_solicitado" DECIMAL(15,2) NOT NULL,
    "valor_aprovado" DECIMAL(15,2),
    "status" VARCHAR(30) NOT NULL DEFAULT 'rascunho',
    "parecer_tecnico" TEXT,
    "nota_avaliacao" DECIMAL(5,2),
    "data_submissao" TIMESTAMP(3),
    "data_avaliacao" TIMESTAMP(3),
    "data_inicio_execucao" DATE,
    "data_fim_execucao" DATE,
    "categoria" VARCHAR(100),
    "publico_alvo" VARCHAR(255),
    "documentos_anexos" TEXT[],
    "numero_protocolo" VARCHAR(50),
    "avaliado_por" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projetos_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "projetos_edital_id_fkey" FOREIGN KEY ("edital_id") REFERENCES "editais" ("id") ON DELETE CASCADE,
    CONSTRAINT "projetos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios" ("id") ON DELETE CASCADE
);

-- CreateTable
CREATE TABLE "indicadores" (
    "id" TEXT NOT NULL,
    "municipio_id" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "trimestre" INTEGER NOT NULL,
    "total_projetos" INTEGER NOT NULL DEFAULT 0,
    "projetos_aprovados" INTEGER NOT NULL DEFAULT 0,
    "projetos_em_execucao" INTEGER NOT NULL DEFAULT 0,
    "projetos_concluidos" INTEGER NOT NULL DEFAULT 0,
    "total_beneficiados" INTEGER NOT NULL DEFAULT 0,
    "total_investido" DECIMAL(15,2) NOT NULL DEFAULT 0,
    "total_executado" DECIMAL(15,2) NOT NULL DEFAULT 0,
    "areas_culturais" JSONB,
    "editais_publicados" INTEGER NOT NULL DEFAULT 0,
    "taxa_aprovacao" DECIMAL(5,2),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "indicadores_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "indicadores_municipio_id_fkey" FOREIGN KEY ("municipio_id") REFERENCES "municipios" ("id") ON DELETE CASCADE
);

-- CreateTable
CREATE TABLE "documentos" (
    "id" TEXT NOT NULL,
    "tipo" VARCHAR(50) NOT NULL,
    "titulo" VARCHAR(255) NOT NULL,
    "descricao" TEXT,
    "arquivo" TEXT NOT NULL,
    "tamanho_bytes" BIGINT,
    "formato" VARCHAR(10),
    "municipio_id" TEXT,
    "edital_id" TEXT,
    "publico" BOOLEAN NOT NULL DEFAULT true,
    "downloads" INTEGER NOT NULL DEFAULT 0,
    "enviado_por" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "documentos_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "documentos_municipio_id_fkey" FOREIGN KEY ("municipio_id") REFERENCES "municipios" ("id") ON DELETE SET NULL,
    CONSTRAINT "documentos_edital_id_fkey" FOREIGN KEY ("edital_id") REFERENCES "editais" ("id") ON DELETE SET NULL,
    CONSTRAINT "documentos_enviado_por_fkey" FOREIGN KEY ("enviado_por") REFERENCES "usuarios" ("id") ON DELETE SET NULL
);

-- CreateTable
CREATE TABLE "notificacoes" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "titulo" VARCHAR(255) NOT NULL,
    "mensagem" TEXT NOT NULL,
    "tipo" VARCHAR(30) NOT NULL,
    "lida" BOOLEAN NOT NULL DEFAULT false,
    "link" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notificacoes_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "notificacoes_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios" ("id") ON DELETE CASCADE
);

-- CreateTable
CREATE TABLE "historico_status" (
    "id" TEXT NOT NULL,
    "projeto_id" TEXT NOT NULL,
    "status_anterior" VARCHAR(30),
    "status_novo" VARCHAR(30) NOT NULL,
    "observacao" TEXT,
    "alterado_por" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "historico_status_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "historico_status_projeto_id_fkey" FOREIGN KEY ("projeto_id") REFERENCES "projetos" ("id") ON DELETE CASCADE
);

-- CreateTable
CREATE TABLE "avaliacoes" (
    "id" TEXT NOT NULL,
    "projeto_id" TEXT NOT NULL,
    "avaliador_id" TEXT NOT NULL,
    "qualidade_artistica" DECIMAL(5,2),
    "viabilidade" DECIMAL(5,2),
    "impacto_social" DECIMAL(5,2),
    "orcamento" DECIMAL(5,2),
    "nota_final" DECIMAL(5,2),
    "parecer_tecnico" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "avaliacoes_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "avaliacoes_projeto_id_fkey" FOREIGN KEY ("projeto_id") REFERENCES "projetos" ("id") ON DELETE CASCADE,
    CONSTRAINT "avaliacoes_avaliador_id_fkey" FOREIGN KEY ("avaliador_id") REFERENCES "usuarios" ("id") ON DELETE CASCADE
);

-- CreateTable
CREATE TABLE "logs_sistema" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT,
    "acao" VARCHAR(100) NOT NULL,
    "entidade" VARCHAR(50),
    "entidade_id" TEXT,
    "detalhes" JSONB,
    "ip_address" TEXT,
    "user_agent" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "logs_sistema_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "logs_sistema_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios" ("id") ON DELETE SET NULL
);

-- CreateTable
CREATE TABLE "faq" (
    "id" TEXT NOT NULL,
    "pergunta" TEXT NOT NULL,
    "resposta" TEXT NOT NULL,
    "categoria" VARCHAR(50) NOT NULL,
    "ordem" INTEGER NOT NULL DEFAULT 0,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "visualizacoes" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "faq_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "indicadores_municipio_id_ano_trimestre_key" ON "indicadores"("municipio_id", "ano", "trimestre");