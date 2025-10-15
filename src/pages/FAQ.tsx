'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronRight, HelpCircle, BookOpen, FileText, Users, Calendar } from 'lucide-react';

const faqItems = [
  {
    category: 'Sobre a PNAB',
    icon: BookOpen,
    questions: [
      {
        question: 'O que é a Política Nacional Aldir Blanc (PNAB)?',
        answer: 'A PNAB é uma política pública de fomento à cultura, instituída pela Lei nº 14.399/2022, que destina recursos para apoiar artistas, produtores culturais e equipamentos culturais em todo o Brasil. O objetivo é garantir a manutenção das atividades culturais durante a pandemia de COVID-19 e fortalecer o setor cultural brasileiro.'
      },
      {
        question: 'Quem pode participar dos editais da PNAB?',
        answer: 'Podem participar artistas, produtores culturais, grupos culturais e organizações da sociedade civil que atendam aos requisitos específicos de cada edital, incluindo residência no município e comprovação de experiência na área cultural. Cada edital possui critérios específicos que devem ser consultados no edital correspondente.'
      },
      {
        question: 'Como são distribuídos os recursos da PNAB?',
        answer: 'Os recursos são distribuídos entre os municípios e estados com base em critérios populacionais. Cada município recebe um valor proporcional à sua população, que deve ser aplicado em editais culturais, bolsas para artistas e manutenção de equipamentos culturais.'
      }
    ]
  },
  {
    category: 'Editais e Projetos',
    icon: FileText,
    questions: [
      {
        question: 'Como me inscrever em um edital?',
        answer: 'Para se inscrever em um edital, você precisa criar uma conta no SISPNAB, preencher seu perfil cultural e acessar a página do edital desejado. Lá você encontrará todas as informações necessárias, incluindo documentos necessários, prazos e critérios de avaliação.'
      },
      {
        question: 'Quais documentos são necessários para submeter um projeto?',
        answer: 'Os documentos variam conforme o tipo de edital, mas geralmente incluem: RG e CPF, comprovante de residência, currículo artístico, proposta detalhada do projeto, orçamento e documentos comprobatórios da experiência na área cultural. Consulte sempre o edital específico para a lista completa.'
      },
      {
        question: 'Como acompanhar o status da minha proposta?',
        answer: 'Você pode acompanhar o status da sua proposta acessando seu painel pessoal no SISPNAB. Lá você encontrará informações sobre cada etapa do processo: análise técnica, avaliação da comissão e resultado final. Você também receberá notificações por email sobre atualizações.'
      }
    ]
  },
  {
    category: 'Usuários e Cadastro',
    icon: Users,
    questions: [
      {
        question: 'Quais são os tipos de usuários no SISPNAB?',
        answer: 'O sistema possui quatro tipos de usuários: Visitante (acesso público), Proponente (artistas e produtores culturais), Gestor (funcionários municipais responsáveis pelos editais) e Analista (equipe responsável pela análise de dados e indicadores).'
      },
      {
        question: 'Como criar minha conta como proponente?',
        answer: 'Para criar sua conta, acesse a página de cadastro e preencha todas as informações solicitadas em quatro etapas: dados pessoais, endereço, dados culturais e acesso. Após o cadastro, você poderá se inscrever nos editais disponíveis e acompanhar seus projetos.'
      },
      {
        question: 'Esqueci minha senha, o que fazer?',
        answer: 'Na página de login, clique em "Esqueceu a senha?" e siga as instruções para redefinir sua senha. Você receberá um email com um link para criar uma nova senha. Se não receber o email, verifique sua caixa de spam ou entre em contato com o suporte.'
      }
    ]
  },
  {
    category: 'Indicadores e Dados',
    icon: Calendar,
    questions: [
      {
        question: 'Onde encontro os indicadores culturais?',
        answer: 'Todos os indicadores culturais e financeiros estão disponíveis na página "Indicadores" do site. Você pode filtrar por ano, trimestre, município e área cultural para visualizar dados específicos e gerar relatórios personalizados.'
      },
      {
        question: 'Como os dados são coletados e atualizados?',
        answer: 'Os dados são coletados diretamente dos sistemas de gestão dos municípios e atualizados periodicamente. As informações sobre editais, projetos e investimentos são inseridas pelos gestores municipais e validadas pela equipe técnica do SISPNAB.'
      },
      {
        question: 'Posso exportar os dados para análise externa?',
        answer: 'Sim, na página de indicadores você pode exportar os dados em formatos CSV e Excel para análise externa. Também é possível gerar relatórios PDF com os dados selecionados.'
      }
    ]
  }
];

const FAQPage = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
    setOpenQuestion(null);
  };

  const toggleQuestion = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Perguntas Frequentes
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre o SISPNAB e a PNAB
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar perguntas..."
              className="w-full px-4 py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <HelpCircle className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto space-y-6">
          {faqItems.map((category) => {
            const Icon = category.icon;
            const isCategoryOpen = openCategory === category.category;
            
            return (
              <Card key={category.category} className="border-0 shadow-lg">
                <CardHeader>
                  <button
                    onClick={() => toggleCategory(category.category)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-green-600" />
                      </div>
                      <CardTitle className="text-xl">{category.category}</CardTitle>
                    </div>
                    {isCategoryOpen ? (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                </CardHeader>

                {isCategoryOpen && (
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {category.questions.map((question, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg">
                          <button
                            onClick={() => toggleQuestion(question.question)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                          >
                            <h3 className="font-medium text-gray-900">{question.question}</h3>
                            {openQuestion === question.question ? (
                              <ChevronDown className="h-4 w-4 text-gray-500" />
                            ) : (
                              <ChevronRight className="h-4 w-4 text-gray-500" />
                            )}
                          </button>
                          
                          {openQuestion === question.question && (
                            <div className="px-4 pb-4">
                              <p className="text-gray-600 leading-relaxed">{question.answer}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Não encontrou sua resposta?</CardTitle>
              <CardDescription>
                Nossa equipe está disponível para ajudar com suas dúvidas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">suporte@sispnab.gov.br</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Telefone</h3>
                  <p className="text-gray-600">(41) 3232-1000</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Horário</h3>
                  <p className="text-gray-600">Segunda a Sexta, 9h-18h</p>
                </div>
              </div>
              <Button className="bg-green-600 hover:bg-green-700">
                Entrar em Contato
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;