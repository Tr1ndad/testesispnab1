import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { showSuccess, showError } from "@/utils/toast";
import { useNavigate } from "react-router-dom";

const cadastroSchema = z.object({
  nome: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),
  data_nascimento: z.string().min(10, "Data de nascimento inválida"),
  telefone: z.string().min(14, "Telefone inválido"),
  cep: z.string().min(8, "CEP inválido"),
  municipio: z.string().min(1, "Selecione um município"),
  rua: z.string().min(3, "Rua inválida"),
  numero: z.string().min(1, "Número inválido"),
  bairro: z.string().min(3, "Bairro inválido"),
  complemento: z.string().optional(),
  area_cultural: z.string().min(1, "Selecione uma área cultural"),
  outras_areas: z.array(z.string()),
  curriculo: z.string().min(10, "Currículo inválido"),
  portfolio: z.string().url().optional().or(z.literal("")),
  email: z.string().email("Email inválido"),
  senha: z.string().min(8, "Senha deve ter no mínimo 8 caracteres"),
  confirmar_senha: z.string(),
  termos: z.boolean().refine(val => val === true, "Você deve aceitar os termos"),
}).refine(data => data.senha === data.confirmar_senha, {
  message: "As senhas não coincidem",
  path: ["confirmar_senha"],
});

type CadastroFormData = z.infer<typeof cadastroSchema>;

const municipios = [
  { value: "pinhais", label: "Pinhais" },
  { value: "piraquara", label: "Piraquara" },
  { value: "colombo", label: "Colombo" },
];

const areasCulturais = [
  "Música",
  "Teatro",
  "Dança",
  "Artes Visuais",
  "Literatura",
  "Cinema",
  "Artes Cênicas",
  "Artes Integradas",
  "Patrimônio Cultural",
  "Outros"
];

const Cadastro = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [etapa, setEtapa] = useState(1);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<CadastroFormData>({
    resolver: zodResolver(cadastroSchema),
    defaultValues: {
      outras_areas: [],
      complemento: "",
    },
  });

  const { fields: outrasAreasFields, append: appendOutraArea, remove: removeOutraArea } = useFieldArray({
    control,
    name: "outras_areas",
  });

  const watchedOutrasAreas = watch("outras_areas");

  const onSubmit = async (data: CadastroFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          outras_areas: data.outras_areas.filter(area => area.trim() !== ""),
        }),
      });

      if (response.ok) {
        showSuccess("Cadastro realizado com sucesso! Verifique seu email.");
        navigate("/login");
      } else {
        const error = await response.json();
        showError(error.message || "Erro ao realizar cadastro");
      }
    } catch (error) {
      showError("Erro ao realizar cadastro");
    } finally {
      setIsLoading(false);
    }
  };

  const formatarCPF = (value: string) => {
    return value.replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  };

  const formatarTelefone = (value: string) => {
    return value.replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  };

  const formatarCEP = (value: string) => {
    return value.replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{3})\d+?$/, "$1");
  };

  const proximaEtapa = () => {
    if (etapa < 4) {
      setEtapa(etapa + 1);
    }
  };

  const etapaAnterior = () => {
    if (etapa > 1) {
      setEtapa(etapa - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Cadastro de Proponente
          </h2>
          <p className="text-gray-600">
            Etapa {etapa} de 4
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(etapa / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Etapa 1: Dados Pessoais */}
          {etapa === 1 && (
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Dados Pessoais
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    {...register("nome")}
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="João da Silva"
                  />
                  {errors.nome && (
                    <p className="mt-1 text-sm text-red-600">{errors.nome.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">
                    CPF *
                  </label>
                  <input
                    {...register("cpf")}
                    type="text"
                    onChange={(e) => {
                      const formatted = formatarCPF(e.target.value);
                      e.target.value = formatted;
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="123.456.789-00"
                  />
                  {errors.cpf && (
                    <p className="mt-1 text-sm text-red-600">{errors.cpf.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="data_nascimento" className="block text-sm font-medium text-gray-700 mb-1">
                    Data de Nascimento *
                  </label>
                  <input
                    {...register("data_nascimento")}
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  {errors.data_nascimento && (
                    <p className="mt-1 text-sm text-red-600">{errors.data_nascimento.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone *
                  </label>
                  <input
                    {...register("telefone")}
                    type="tel"
                    onChange={(e) => {
                      const formatted = formatarTelefone(e.target.value);
                      e.target.value = formatted;
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="(41) 99999-0000"
                  />
                  {errors.telefone && (
                    <p className="mt-1 text-sm text-red-600">{errors.telefone.message}</p>
                  )}
                </div>
              </div>

              <div className="flex justify-end mt-8">
                <button
                  type="button"
                  onClick={proximaEtapa}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Próxima Etapa
                </button>
              </div>
            </div>
          )}

          {/* Etapa 2: Endereço */}
          {etapa === 2 && (
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Endereço
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="cep" className="block text-sm font-medium text-gray-700 mb-1">
                    CEP *
                  </label>
                  <input
                    {...register("cep")}
                    type="text"
                    onChange={(e) => {
                      const formatted = formatarCEP(e.target.value);
                      e.target.value = formatted;
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="83313-000"
                  />
                  {errors.cep && (
                    <p className="mt-1 text-sm text-red-600">{errors.cep.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="municipio" className="block text-sm font-medium text-gray-700 mb-1">
                    Municipio *
                  </label>
                  <select
                    {...register("municipio")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Selecione um município</option>
                    {municipios.map((municipio) => (
                      <option key={municipio.value} value={municipio.value}>
                        {municipio.label}
                      </option>
                    ))}
                  </select>
                  {errors.municipio && (
                    <p className="mt-1 text-sm text-red-600">{errors.municipio.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="bairro" className="block text-sm font-medium text-gray-700 mb-1">
                    Bairro *
                  </label>
                  <input
                    {...register("bairro")}
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Centro"
                  />
                  {errors.bairro && (
                    <p className="mt-1 text-sm text-red-600">{errors.bairro.message}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="rua" className="block text-sm font-medium text-gray-700 mb-1">
                    Rua *
                  </label>
                  <input
                    {...register("rua")}
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Rua das Flores"
                  />
                  {errors.rua && (
                    <p className="mt-1 text-sm text-red-600">{errors.rua.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="numero" className="block text-sm font-medium text-gray-700 mb-1">
                    Numero *
                  </label>
                  <input
                    {...register("numero")}
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="123"
                  />
                  {errors.numero && (
                    <p className="mt-1 text-sm text-red-600">{errors.numero.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="complemento" className="block text-sm font-medium text-gray-700 mb-1">
                    Complemento
                  </label>
                  <input
                    {...register("complemento")}
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Ap. 101"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={etapaAnterior}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={proximaEtapa}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Proxima Etapa
                </button>
              </div>
            </div>
          )}

          {/* Etapa 3: Dados Culturais */}
          {etapa === 3 && (
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Dados Culturais
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="area_cultural" className="block text-sm font-medium text-gray-700 mb-1">
                    Área Cultural Principal *
                  </label>
                  <select
                    {...register("area_cultural")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Selecione uma área cultural</option>
                    {areasCulturais.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                  {errors.area_cultural && (
                    <p className="mt-1 text-sm text-red-600">{errors.area_cultural.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Outras Áreas Culturais
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {areasCulturais.map((area) => (
                      <label key={area} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          value={area}
                          onChange={(e) => {
                            if (e.target.checked) {
                              appendOutraArea(area);
                            } else {
                              const index = watchedOutrasAreas.indexOf(area);
                              if (index > -1) {
                                removeOutraArea(index);
                              }
                            }
                          }}
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                        />
                        <span className="text-sm text-gray-700">{area}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="curriculo" className="block text-sm font-medium text-gray-700 mb-1">
                    Breve Currículo Artístico *
                  </label>
                  <textarea
                    {...register("curriculo")}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Descreva sua experiência, formações, projetos realizados, etc."
                  />
                  {errors.curriculo && (
                    <p className="mt-1 text-sm text-red-600">{errors.curriculo.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
                    Link do Portfólio/Site
                  </label>
                  <input
                    {...register("portfolio")}
                    type="url"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="https://seuportfolio.com"
                  />
                  {errors.portfolio && (
                    <p className="mt-1 text-sm text-red-600">{errors.portfolio.message}</p>
                  )}
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={etapaAnterior}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={proximaEtapa}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Próxima Etapa
                </button>
              </div>
            </div>
          )}

          {/* Etapa 4: Acesso */}
          {etapa === 4 && (
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Dados de Acesso
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email (será seu login) *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">
                      Senha *
                    </label>
                    <input
                      {...register("senha")}
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="••••••••"
                    />
                    {errors.senha && (
                      <p className="mt-1 text-sm text-red-600">{errors.senha.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="confirmar_senha" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirmar Senha *
                    </label>
                    <input
                      {...register("confirmar_senha")}
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="••••••••"
                    />
                    {errors.confirmar_senha && (
                      <p className="mt-1 text-sm text-red-600">{errors.confirmar_senha.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="termos"
                      {...register("termos")}
                      type="checkbox"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="termos" className="text-gray-600">
                      Eu li e aceito os{" "}
                      <a href="#" className="text-green-600 hover:text-green-500">
                        Termos de Uso
                      </a>{" "}
                      e{" "}
                      <a href="#" className="text-green-600 hover:text-green-500">
                        Política de Privacidade
                      </a>
                    </label>
                  </div>
                </div>
                {errors.termos && (
                  <p className="text-sm text-red-600">{errors.termos.message}</p>
                )}
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={etapaAnterior}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Anterior
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Cadastrando..." : "Finalizar Cadastro"}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Cadastro;