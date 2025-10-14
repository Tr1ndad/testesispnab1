import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed do banco de dados...");

  // Criar municípios
  const pinhais = await prisma.municipio.upsert({
    where: { nome: "Pinhais" },
    update: {},
    create: {
      nome: "Pinhais",
      codigo_ibge: "4119152",
      populacao: 132157,
      recursos_totais_recebidos: 850000,
      recursos_executados: 620000,
    },
  });

  const piraquara = await prisma.municipio.upsert({
    where: { nome: "Piraquara" },
    update: {},
    create: {
      nome: "Piraquara",
      codigo_ibge: "4119301",
      populacao: 112717,
      recursos_totais_recebidos: 485000,
      recursos_executados: 350000,
    },
  });

  const colombo = await prisma.municipio.upsert({
    where: { nome: "Colombo" },
    update: {},
    create: {
      nome: "Colombo",
      codigo_ibge: "4118204",
      populacao: 240977,
      recursos_totais_recebidos: 680000,
      recursos_executados: 500000,
    },
  });

  // Criar usuários de teste
  const hashedPassword = await bcrypt.hash("senha123", 10);

  // Visitante (não precisa de login, mas criamos para testes)
  await prisma.usuario.upsert({
    where: { email: "visitante@teste.com" },
    update: {},
    create: {
      nome: "Visitante Teste",
      email: "visitante@teste.com",
      senha: hashedPassword,
      tipo: "visitante",
      ativo: true,
    },
  });

  // Proponente
  await prisma.usuario.upsert({
    where: { email: "joao.almeida@email.com" },
    update: {},
    create: {
      nome: "João Almeida",
      email: "joao.almeida@email.com",
      senha: hashedPassword,
      cpf: "123.456.789-01",
      telefone: "(41) 99999-0001",
      tipo: "proponente",
      municipio_id: pinhais.id,
      ativo: true,
    },
  });

  // Gestores municipais
  await prisma.usuario.upsert({
    where: { email: "fernanda.santos@pinhais.pr.gov.br" },
    update: {},
    create: {
      nome: "Fernanda Santos",
      email: "fernanda.santos@pinhais.pr.gov.br",
      senha: hashedPassword,
      cpf: "987.654.321-01",
      telefone: "(41) 99999-0002",
      tipo: "gestor",
      municipio_id: pinhais.id,
      ativo: true,
    },
  });

  await prisma.usuario.upsert({
    where: { email: "carlos.silva@colombo.pr.gov.br" },
    update: {},
    create: {
      nome: "Carlos Silva",
      email: "carlos.silva@colombo.pr.gov.br",
      senha: hashedPassword,
      cpf: "456.789.012-01",
      telefone: "(41) 99999-0003",
      tipo: "gestor",
      municipio_id: colombo.id,
      ativo: true,
    },
  });

  await prisma.usuario.upsert({
    where: { email: "roberto.lima@piraquara.pr.gov.br" },
    update: {},
    create: {
      nome: "Roberto Lima",
      email: "roberto.lima@piraquara.pr.gov.br",
      senha: hashedPassword,
      cpf: "789.012.345-01",
      telefone: "(41) 99999-0004",
      tipo: "gestor",
      municipio_id: piraquara.id,
      ativo: true,
    },
  });

  // Analista
  await prisma.usuario.upsert({
    where: { email: "analista@sispnab.gov.br" },
    update: {},
    create: {
      nome: "Maria Fernandes",
      email: "analista@sispnab.gov.br",
      senha: hashedPassword,
      cpf: "321.654.987-01",
      telefone: "(41) 99999-0005",
      tipo: "analista",
      ativo: true,
    },
  });

  // Criar alguns FAQs
  await prisma.fAQ.createMany({
    data: [
      {
        pergunta: "O que é a PNAB?",
        resposta: "A Política Nacional Aldir Blanc (PNAB) é uma política pública de fomento à cultura, instituída pela Lei nº 14.399/2022, que destina recursos para apoiar artistas, produtores culturais e equipamentos culturais em todo o Brasil.",
        categoria: "pnab",
        ordem: 1,
      },
      {
        pergunta: "Quem pode participar dos editais?",
        resposta: "Podem participar artistas, produtores culturais, grupos culturais e organizações da sociedade civil que atendam aos requisitos específicos de cada edital, incluindo residência no município e comprovação de experiência na área cultural.",
        categoria: "editais",
        ordem: 1,
      },
      {
        pergunta: "Como faço para me cadastrar?",
        resposta: "Clique em 'Criar Conta' no menu superior e preencha o formulário com seus dados pessoais, informações culturais e de contato. Após o cadastro, você poderá se inscrever nos editais disponíveis.",
        categoria: "geral",
        ordem: 1,
      },
    ],
  });

  console.log("✅ Seed concluído com sucesso!");
}

main()
  .catch((e) => {
    console.error("❌ Erro no seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });