'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { showSuccess, showError } from '@/utils/toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const contatoSchema = z.object({
  nome: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  email: z.string().email('Email inválido'),
  telefone: z.string().min(14, 'Telefone inválido'),
  assunto: z.string().min(3, 'Assunto deve ter no mínimo 3 caracteres'),
  mensagem: z.string().min(10, 'Mensagem deve ter no mínimo 10 caracteres'),
});

type ContatoFormData = z.infer<typeof contatoSchema>;

const ContatoPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContatoFormData>({
    resolver: zodResolver(contatoSchema),
  });

  const onSubmit = async (data: ContatoFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      showSuccess('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      reset();
    } catch (error) {
      showError('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const formatarTelefone = (value: string) => {
    return value.replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Tem dúvidas, sugestões ou quer contribuir com o desenvolvimento do SISPNAB?
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Envie sua Mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e nossa equipe entrará em contato em breve.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome Completo *</Label>
                      <Input
                        {...register("nome")}
                        type="text"
                        placeholder="Seu nome completo"
                      />
                      {errors.nome && (
                        <p className="text-sm text-red-600">{errors.nome.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        {...register("email")}
                        type="email"
                        placeholder="seu.email@exemplo.com"
                      />
                      {errors.email && (
                        <p className="text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input
                        {...register("telefone")}
                        type="tel"
                        placeholder="(41) 99999-0000"
                        onChange={(e) => {
                          const formatted = formatarTelefone(e.target.value);
                          e.target.value = formatted;
                        }}
                      />
                      {errors.telefone && (
                        <p className="text-sm text-red-600">{errors.telefone.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="assunto">Assunto *</Label>
                      <Select onValueChange={(value) => register("assunto").onChange({ target: { value } })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o assunto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="duvidas">Dúvidas sobre o sistema</SelectItem>
                          <SelectItem value="sugestoes">Sugestões de melhoria</SelectItem>
                          <SelectItem value="problemas">Problemas técnicos</SelectItem>
                          <SelectItem value="parcerias">Propostas de parceria</SelectItem>
                          <SelectItem value="outros">Outros assuntos</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.assunto && (
                        <p className="text-sm text-red-600">{errors.assunto.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Mensagem *</Label>
                    <Textarea
                      {...register("mensagem")}
                      rows={6}
                      placeholder="Descreva sua dúvida, sugestão ou mensagem..."
                    />
                    {errors.mensagem && (
                      <p className="text-sm text-red-600">{errors.mensagem.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Informações de Contato</CardTitle>
                <CardDescription>
                  Entre em contato conosco através dos canais abaixo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">suporte@sispnab.gov.br</p>
                    <p className="text-sm text-gray-500">Resposta em até 48 horas úteis</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Telefone</h3>
                    <p className="text-gray-600">(41) 3232-1000</p>
                    <p className="text-sm text-gray-500">Segunda a Sexta, 9h-18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Endereço</h3>
                    <p className="text-gray-600">Av. das Culturas, 1000</p>
                    <p className="text-gray-600">Curitiba, Paraná - 80530-000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 9h - 18h</p>
                    <p className="text-gray-600">Sábado: 9h - 12h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Redes Sociais</CardTitle>
                <CardDescription>
                  Siga-nos para ficar por dentro das novidades
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="justify-start">
                    📘 Facebook
                  </Button>
                  <Button variant="outline" className="justify-start">
                    📷 Instagram
                  </Button>
                  <Button variant="outline" className="justify-start">
                    🐦 Twitter
                  </Button>
                  <Button variant="outline" className="justify-start">
                    💼 LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Central de Ajuda</CardTitle>
                <CardDescription>
                  Acesse nossa base de conhecimento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="ghost" className="w-full justify-start">
                    📖 Manual do Usuário
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    ❓ Perguntas Frequentes
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    🎥 Tutoriais em Vídeo
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    📞 Suporte Remoto
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContatoPage;