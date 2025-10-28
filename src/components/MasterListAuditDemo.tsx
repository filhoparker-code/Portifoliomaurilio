import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Download, FileCheck, AlertTriangle } from 'lucide-react';

interface MasterListAuditDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

const MasterListAuditDemo = ({ isOpen, onClose }: MasterListAuditDemoProps) => {
  const auditData = [
    {
      codigo: 'DG-PRC-01-V02',
      titulo: 'CONTROLE DA INFORMAÇÃO DOCUMENTADA_em revisão',
      statusMestra: 'NÃO CONSTA NA LISTA',
      statusNormal: 'N/A',
      statusEscProcessos: 'Em Andamento',
      qtdeNormas: 0,
      qtdeProcessos: 1,
      conformidade: 'NÃO CONFORME',
      detalhamento: 'Arquivo órfão (não consta na Lista Mestra).',
      localizacao: ''
    },
    {
      codigo: 'DG-PRC-02-V00',
      titulo: 'ABNT NBR ISO 9001:2015 - EVC INDUSTRIAL',
      statusMestra: 'Superada',
      statusNormal: 'N/A',
      statusEscProcessos: 'Superado',
      qtdeNormas: 0,
      qtdeProcessos: 1,
      conformidade: 'CONFORME',
      detalhamento: '',
      localizacao: ''
    },
    {
      codigo: 'DG-PRC-03-V00',
      titulo: 'RELATÓRIO DE AUDITORIA',
      statusMestra: 'NÃO CONSTA NA LISTA',
      statusNormal: 'N/A',
      statusEscProcessos: 'Vigente',
      qtdeNormas: 0,
      qtdeProcessos: 2,
      conformidade: 'NÃO CONFORME',
      detalhamento: 'Arquivo órfão (não consta na Lista Mestra).',
      localizacao: ''
    },
    {
      codigo: 'DG-PRO-01-V00',
      titulo: 'EMBALAGENS SETOR SECO',
      statusMestra: 'NÃO CONSTA NA LISTA',
      statusNormal: 'N/A',
      statusEscProcessos: 'Em Andamento',
      qtdeNormas: 0,
      qtdeProcessos: 2,
      conformidade: 'NÃO CONFORME',
      detalhamento: 'Arquivo órfão (não consta na Lista Mestra).',
      localizacao: ''
    },
    {
      codigo: 'DG-PROC-03-V00',
      titulo: 'RELATÓRIO DE AUDITORIA',
      statusMestra: 'Vigente',
      statusNormal: 'Vigente',
      statusEscProcessos: 'N/A',
      qtdeNormas: 1,
      qtdeProcessos: 0,
      conformidade: 'CONFORME',
      detalhamento: '',
      localizacao: ''
    },
    {
      codigo: 'DG-PVP-01-V00',
      titulo: 'MONITORAMENTO CFTV',
      statusMestra: 'Superada',
      statusNormal: 'N/A',
      statusEscProcessos: 'Superado',
      qtdeNormas: 0,
      qtdeProcessos: 2,
      conformidade: 'NÃO CONFORME',
      detalhamento: 'Divergência de nome (Processos).',
      localizacao: ''
    },
    {
      codigo: 'DG-PVP-02-V00',
      titulo: 'REGRAS PARA CONTROLE DE ACESSO - PORTARIA',
      statusMestra: 'NÃO CONSTA NA LISTA',
      statusNormal: 'N/A',
      statusEscProcessos: 'Em Andamento',
      qtdeNormas: 0,
      qtdeProcessos: 1,
      conformidade: 'NÃO CONFORME',
      detalhamento: 'Arquivo órfão (não consta na Lista Mestra).',
      localizacao: ''
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[90vh] overflow-hidden p-0">
        <DialogHeader className="p-6 pb-4 border-b bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold flex items-center gap-2">
              <FileCheck className="text-primary" size={24} />
              Demo - Auditoria da Lista Mestra
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X size={20} />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="overflow-auto max-h-[calc(90vh-120px)]">
          <div className="p-6 space-y-6">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Relatório de Auditoria
              </h2>
              <div className="flex justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Download size={16} className="mr-2" />
                  Exportar para Excel
                </Button>
              </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <AlertTriangle className="text-red-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-red-600">5</div>
                <div className="text-sm text-red-700">Não Conformes</div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <FileCheck className="text-green-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-green-600">2</div>
                <div className="text-sm text-green-700">Conformes</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <FileCheck className="text-blue-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-blue-600">7</div>
                <div className="text-sm text-blue-700">Total Analisado</div>
              </div>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-lg border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="p-3 text-left min-w-[120px]">Código</th>
                      <th className="p-3 text-left min-w-[200px]">Título (Lista Mestra)</th>
                      <th className="p-3 text-left min-w-[120px]">Status (Lista Mestra)</th>
                      <th className="p-3 text-left min-w-[100px]">Status (Normas)</th>
                      <th className="p-3 text-left min-w-[120px]">Status (Esc. Processos)</th>
                      <th className="p-3 text-center min-w-[80px]">Qtde. Normas</th>
                      <th className="p-3 text-center min-w-[90px]">Qtde. Processos</th>
                      <th className="p-3 text-center min-w-[100px]">Conformidade</th>
                      <th className="p-3 text-left min-w-[200px]">Detalhamento da Divergência</th>
                      <th className="p-3 text-left min-w-[100px]">Localização</th>
                    </tr>
                  </thead>
                  <tbody>
                    {auditData.map((item, index) => (
                      <tr key={index} className={`border-b hover:bg-gray-50 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                        <td className="p-3 font-mono text-blue-600">{item.codigo}</td>
                        <td className="p-3">{item.titulo}</td>
                        <td className="p-3">
                          <span className={`px-2 py-1 rounded text-xs ${
                            item.statusMestra === 'NÃO CONSTA NA LISTA' ? 'bg-red-100 text-red-700' :
                            item.statusMestra === 'Vigente' ? 'bg-green-100 text-green-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {item.statusMestra}
                          </span>
                        </td>
                        <td className="p-3">{item.statusNormal}</td>
                        <td className="p-3">
                          <span className={`px-2 py-1 rounded text-xs ${
                            item.statusEscProcessos === 'Vigente' ? 'bg-green-100 text-green-700' :
                            item.statusEscProcessos === 'Em Andamento' ? 'bg-yellow-100 text-yellow-700' :
                            item.statusEscProcessos === 'Superado' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {item.statusEscProcessos}
                          </span>
                        </td>
                        <td className="p-3 text-center">{item.qtdeNormas}</td>
                        <td className="p-3 text-center">{item.qtdeProcessos}</td>
                        <td className="p-3 text-center">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            item.conformidade === 'CONFORME' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {item.conformidade}
                          </span>
                        </td>
                        <td className="p-3">{item.detalhamento}</td>
                        <td className="p-3">{item.localizacao}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-start gap-3">
                <FileCheck className="text-blue-600 mt-1" size={20} />
                <div className="text-sm text-blue-800">
                  <div className="font-medium mb-2">Funcionalidades do Sistema:</div>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Análise automática da Lista Mestra de Documentos</li>
                    <li>Comparação com diretórios físicos dos arquivos</li>
                    <li>Identificação de documentos órfãos e desatualizados</li>
                    <li>Geração de relatórios em Excel com divergências</li>
                    <li>Controle de versões e status dos documentos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MasterListAuditDemo;