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

  // Criar alguns editais de exemplo
  await prisma.edital.createMany({
    data: [
      {
        municipio_id: pinhais.id,
        titulo: "Prêmio de Música Popular 2025",
        descricao: "Fomento à produção musical na cidade de Pinhais",
        numero_edital: "001/2025-PINHAIS",
        modalidade: "Prêmio",
        area_cultural: "Música",
        valor_total: 150000,
        valor_disponivel: 150000,
        data_abertura: new Date("2025-01-15"),
        data_encerramento: new Date("2025-03-15"),
        status: "aberto",
        vagas: 15,
        documentos_necessarios: ["RG", "CPF", "Comprovante de Residência", "Currículo Artístico"],
      },
      {
        municipio_id: colombo.id,
        titulo: "Fomento ao Teatro Infantil",
        descricao: "Apoio a espetáculos teatrais infantis",
        numero_edital: "002/2025-COLOMBO",
        modalidade: "Fomento",
        area_cultural: "Teatro",
        valor_total: 120000,
        valor_disponivel: 120000,
        data_abertura: new Date("2025-01-20"),
        data_encerramento: new Date("2025-03-20"),
        status: "aberto",
        vagas: 10,
        documentos_necessarios: ["RG", "CPF", "Comprovante de Residência", "Currículo Artístico"],
      },
      {
        municipio_id: piraquara.id,
        titulo: "Bolsa de Artes Visuais 2024",
        descricao: "Incentivo a artistas plásticos e visuais",
        numero_edital: "003/2024-PIRAQUARA",
        modalidade: "Bolsa",
        area_cultural: "Artes Visuais",
        valor_total: 80000,
        valor_disponivel: 0,
        data_abertura: new Date("2024-06-01"),
        data_encerramento: new Date("2024-09-30"),
        status: "encerrado",
        vagas: 8,
        documentos_necessarios: ["RG", "CPF", "Comprovante de Residência", "Portfólio"],
      },
    ],
  });

  // Criar alguns projetos de exemplo
  await prisma.projeto.createMany({
    data: [
      {
        edital_id: "1", // Prêmio de Música Popular 2025
        usuario_id: "1", // João Almeida
        titulo: "Álbum 'Sons de Pinhais'",
        descricao: "Produção de um álbum com 10 faixas originais inspiradas na cultura local",
        justificativa: "Necessidade de registrar e difundir a música produzida em Pinhais",
        objetivos: "Produzir e lançar um álbum profissional com músicas autorais",
        metodologia: "Gravação estúdio, produção musical, mixagem e masterização",
        cronograma: "Janeiro a Junho de 2025",
        valor_solicitado: 35000,
        valor_aprovado: 35000,
        status: "aprovado",
        data_submissao: new Date("2025-02-15"),
        data_avaliacao: new Date("2025-03-01"),
        categoria: "Música Popular",
        publico_alvo: "Jovens e adultos interessados em música regional",
        documentos_anexos: ["curriculo.pdf", "portfolio.pdf"],
        numero_protocolo: "PNAB-2025-000001",
      },
      {
        edital_id: "2", // Fomento ao Teatro Infantil
        usuario_id: "1", // João Almeida
        titulo: "Espetáculo 'Memórias Urbanas'",
        descricao: "Espetáculo teatral sobre a história de Pinhais",
        justificativa: "Resgatar memórias históricas da cidade através do teatro",
        objetivos: "Criar um espetáculo acessível para crianças e adolescentes",
        metodologia: "Pesquisa histórica, criação cênica, ensaios e apresentações",
        cronograma: "Fevereiro a Agosto de 2025",
        valor_solicitado: 28000,
        valor_aprovado: 28000,
        status: "aprovado",
        data_submissao: new Date("2025-02-18"),
        data_avaliacao: new Date("2025-03-05"),
        categoria: "Teatro Infantil",
        publico_alvo: "Crianças de 6 a 12 anos",
        documentos_anexos: ["curriculo.pdf"],
        numero_protocolo: "PNAB-2025-000002",
      },
      {
        edital_id: null, // Rascunho
        usuario_id: "1", // João Almeida
        titulo: "Festival Cultural Comunitário",
        descricao: "Festival com diversas manifestações culturais",
        justificativa: "Promover a cultura local e integrar a comunidade",
        objetivos: "Realizar um festival anual com artistas locais",
        metodologia: "Organização de shows, oficinas e exposições",
        cronograma: "Setembro a Dezembro de 2025",
        valor_solicitado: 45000,
        status: "rascunho",
        categoria: "Artes Integradas",
        publico_alvo: "Toda a comunidade de Pinhais",
        documentos_anexos: [],
      },
    ],
  });

  // Criar indicadores de exemplo
  await prisma.indicador.createMany({
    data: [
      {
        municipio_id: pinhais.id,
        ano: 2024,
        trimestre: 4,
        total_projetos: 40,
        projetos_aprovados: 28,
        projetos_em_execucao: 12,
        projetos_concluidos: 8,
        total_beneficiados: 67,
        total_investido: 620000,
        total_executado: 452000,
        areas_culturais: { "Música": 35, "Teatro": 30, "Artes Visuais": 20, "Dança": 15 },
        editais_publicados: 8,
        taxa_aprovacao: 70,
      },
      {
        municipio_id: piraquara.id,
        ano: 2024,
        trimestre: 4,
        total_projetos: 37,
        projetos_aprovados: 29,
        projetos_em_execucao: 15,
        projetos_concluidos: 10,
        total_beneficiados: 45,
        total_investido: 350000,
        total_executado: 252000,
        areas_culturais: { "Artes Visuais": 40, "Música": 25, "Teatro": 20, "Literatura": 15 },
        editais_publicados: 6,
        taxa_aprovacao: 78,
      },
      {
        municipio_id: colombo.id,
        ano: 2024,
        trimestre: 4,
        total_projetos: 50,
        projetos_aprovados: 32,
        projetos_em_execucao: 18,
        projetos_concluidos: 12,
        total_beneficiados: 89,
        total_investido: 500000,
        total_executado: 370000,
        areas_culturais: { "Teatro": 35, "Literatura": 30, "Música": 20, "Artes Visuais": 15 },
        editais_publicados: 7,
        taxa_aprovacao: 64,
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