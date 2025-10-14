# SISPNAB - Sistema de Informação e Transparência PNAB

Plataforma web para transparência e gestão da Política Nacional Aldir Blanc (PNAB) na Região Metropolitana de Curitiba (RMC).

## 🚀 Funcionalidades

- **Transparência Ativa**: Visualização pública de dados culturais e financeiros
- **Gestão de Editais**: Criação, edição e publicação de editais culturais
- **Submissão de Projetos**: Sistema completo para artistas e produtores culturais
- **Avaliação de Projetos**: Ferramentas para gestores municipais avaliarem propostas
- **Análise Estratégica**: Dashboards completos para análise de dados culturais
- **4 Tipos de Usuários**: Visitante, Proponente, Gestor e Analista

## 🛠️ Stack Tecnológica

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes, PostgreSQL, Prisma ORM
- **Autenticação**: NextAuth.js
- **Deploy**: Railway

## 📦 Instalação

### Pré-requisitos

- Node.js 18+
- PostgreSQL
- Railway CLI (opcional, para deploy)

### Passos

1. Clone o repositório:
```bash
git clone <repositorio>
cd sispnab
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

4. Configure o banco de dados:
```bash
# Crie o banco de dados no PostgreSQL
createdb sispnab

# Execute as migrações
npx prisma migrate dev

# Popule o banco com dados iniciais
npx prisma db seed
```

5. Inicie o desenvolvimento:
```bash
npm run dev
```

Acesse `http://localhost:8080` para ver a aplicação.

## 🔐 Usuários de Teste

### Proponente
- Email: joao.almeida@email.com
- Senha: senha123
- Município: Pinhais

### Gestores Municipais
**Pinhais:**
- Email: fernanda.santos@pinhais.pr.gov.br
- Senha: senha123

**Colombo:**
- Email: carlos.silva@colombo.pr.gov.br
- Senha: senha123

**Piraquara:**
- Email: roberto.lima@piraquara.pr.gov.br
- Senha: senha123

### Analista
- Email: analista@sispnab.gov.br
- Senha: senha123

## 🚢 Deploy no Railway

1. Instale o Railway CLI:
```bash
npm install -g @railway/cli
```

2. Faça login no Railway:
```bash
railway login
```

3. Crie um novo projeto:
```bash
railway init
```

4. Siga as instruções para conectar o repositório

5. Configure as variáveis de ambiente no Railway:
- `DATABASE_URL`: URL do banco de dados Railway
- `NEXTAUTH_SECRET`: Segredo para NextAuth
- `NEXTAUTH_URL`: URL da aplicação Railway

6. Faça o deploy:
```bash
railway up
```

## 📊 Estrutura do Banco de Dados

O sistema utiliza PostgreSQL com as seguintes entidades principais:

- **Municípios**: Dados dos municípios participantes
- **Usuários**: Cadastro dos 4 tipos de usuários
- **Editais**: Chamadas públicas para projetos culturais
- **Projetos**: Propostas submetidas por artistas
- **Indicadores**: Métricas culturais e financeiras
- **Documentos**: Arquivos e legislação
- **Notificações**: Sistema de comunicação
- **Histórico de Status**: Controle de mudanças
- **Avaliações**: Sistema de pontuação técnica
- **Logs**: Auditoria do sistema
- **FAQ**: Perguntas frequentes

## 🎨 Design System

O sistema utiliza uma paleta de cores específica para cada tipo de usuário:

- **Visitante**: Verde (#10b981)
- **Proponente**: Azul Bebê (#7dd3fc)
- **Gestor**: Azul Escuro (#1e40af)
- **Analista**: Roxo (#a855f7)

## 📈 Métricas Principais

- Total de Propostas: 127 (+15% ano anterior)
- Propostas Aprovadas: 89 (+12% ano anterior)
- Taxa de Aprovação: 70% (+5% ano anterior)
- Artistas Beneficiados: 201 (+18% ano anterior)
- Investimento Total: R$ 1,75M (+25% ano anterior)

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie sua feature branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob licença da Prefeitura Municipal de Pinhais.

## 📞 Contato

Para dúvidas e suporte:
- Email: cultura@pinhais.pr.gov.br
- Telefone: (41) 3912-xxxx

---

Desenvolvido com ❤️ pela equipe de cultura de Pinhais