import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectDetailModalProps {
  project: any;
  trigger: React.ReactNode;
  children?: React.ReactNode;
}

export function ProjectDetailModal({ project, trigger, children }: ProjectDetailModalProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "aprovado": return "bg-green-100 text-green-800";
      case "em_analise": return "bg-yellow-100 text-yellow-800";
      case "rascunho": return "bg-gray-100 text-gray-800";
      case "submetido": return "bg-blue-100 text-blue-800";
      case "reprovado": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "aprovado": return "APROVADO";
      case "em_analise": return "EM ANÁLISE";
      case "rascunho": return "RASCUNHO";
      case "submetido": return "SUBMETIDO";
      case "reprovado": return "REPROVADO";
      default: return status.toUpperCase();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{project.titulo}</DialogTitle>
          <DialogDescription>
            Detalhes completos do projeto cultural
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Informações Básicas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Informações Gerais</h4>
              <div className="space-y-2 text-sm">
                <div><span className="text-gray-600">Status:</span> <Badge className={getStatusColor(project.status)}>{getStatusText(project.status)}</Badge></div>
                <div><span className="text-gray-600">Edital:</span> {project.edital || "Não selecionado"}</div>
                <div><span className="text-gray-600">Data Submissão:</span> {project.data_submissao || "Não submetido"}</div>
                <div><span className="text-gray-600">Valor:</span> R$ {(project.valor_aprovado || project.valor_solicitado)?.toLocaleString()}</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Descrição</h4>
              <p className="text-sm text-gray-600">{project.descricao}</p>
            </div>
          </div>

          {/* Justificativa */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Justificativa</h4>
            <p className="text-sm text-gray-600">{project.justificativa}</p>
          </div>

          {/* Objetivos */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Objetivos</h4>
            <ul className="space-y-1">
              {project.objetivos.map((obj: string, index: number) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span className="text-sm text-gray-600">{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metodologia */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Metodologia</h4>
            <ul className="space-y-1">
              {project.metodologia.map((met: string, index: number) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-sm text-gray-600">{met}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cronograma */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Cronograma</h4>
            <div className="space-y-2">
              {project.cronograma.map((item: any, index: number) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium text-gray-900">{item.fase}</span>
                    <div className="text-xs text-gray-500">{item.inicio} - {item.fim}</div>
                  </div>
                  <div className="text-xs text-gray-500">
                    {Math.ceil((new Date(item.fim).getTime() - new Date(item.inicio).getTime()) / (1000 * 60 * 60 * 24))} dias
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Orçamento */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Orçamento</h4>
            <div className="space-y-2">
              {project.orcamento.map((item: any, index: number) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">{item.item}</span>
                  <span className="font-semibold text-green-600">R$ {item.valor.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-900">Total:</span>
                <span className="font-bold text-xl text-green-600">
                  R$ {project.orcamento.reduce((sum: number, item: any) => sum + item.valor, 0).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Conteúdo adicional se fornecido */}
          {children && (
            <div className="pt-4 border-t">
              {children}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}