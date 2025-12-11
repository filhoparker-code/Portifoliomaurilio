import { useState } from 'react';
import { X, FileText, Calendar, Download, CheckCircle, Edit2, Trash2, Plus, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface DocumentSystemDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

const DocumentSystemDemo = ({ isOpen, onClose }: DocumentSystemDemoProps) => {
  const [currentScreen, setCurrentScreen] = useState<'list' | 'form' | 'preview'>('list');
  const [selectedDocument, setSelectedDocument] = useState<any>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Dados do formulário
  const [formData, setFormData] = useState({
    tipo: 'IT - INSTRUÇÕES DE TRABALHO',
    sigla: 'DIR',
    numero: '39',
    versao: '01',
    titulo: 'LANÇAMENTO DE PRODUTO',
    responsavel: 'Coordenação',
    elaborador: 'Analista de engenharia',
    revisor: 'Coordenador de engenharia de processos',
    aprovador: 'Engenheiro Especialista',
    nomeProjeto: 'Lançamento de produto',
    codigo: 'IT-DIR-39-V01',
    manager: 'Coordenador',
    dataDias: '62',
    firmaStatus: true,
    escopo: 'Desenvolver produto completo e estruturado para atender todos os usuários de forma adequada causando uma experiência agradável e limpa',
    objetivos: 'Desenvolver produto completo e estruturado para atender todos os usuários de forma adequada causando uma experiência agradável e limpa',
    entregas: [
      { id: '01', fase: 'Brainstorm', responsavel: 'Time de processos', data: '18/12/2025', status: 'Em andamento' },
      { id: '02', fase: 'Kickoff', responsavel: 'Qualidade', data: '25/12/2025', status: 'A iniciar' },
      { id: '03', fase: 'Início do desenvolvimento', responsavel: 'Responsável', data: 'dd/mm/aaaa', status: 'Status' }
    ],
    observacoes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    aprovacoes: [
      { nome: 'Maurilio Cesar', posicao: 'Maurilio Cesar' },
      { nome: 'Maurilio Cesar', posicao: 'Maurilio Cesar' },
      { nome: 'Maurilio Cesar', posicao: 'Maurilio Cesar' }
    ],
    versoes: [
      { numero: '01', data: '12/12/2025', alteracao: 'Revisão periódica – sem alterações' },
      { numero: '00', data: '11/12/2025', alteracao: 'Mudança de responsabilidade sobre o documento' }
    ]
  });

  const documentos = [
    {
      id: 1,
      codigo: 'IT-DIR-39-V01',
      titulo: 'LANÇAMENTO DE PRODUTO',
      dataEmissao: '11/12/2025',
      versao: '01',
      status: 'Validado'
    },
    {
      id: 2,
      codigo: 'IT-QUA-24-V02',
      titulo: 'CONTROLE DE QUALIDADE',
      dataEmissao: '05/12/2025',
      versao: '02',
      status: 'Validado'
    },
    {
      id: 3,
      codigo: 'PR-ENG-15-V01',
      titulo: 'PROCEDIMENTO DE ENGENHARIA',
      dataEmissao: '01/12/2025',
      versao: '01',
      status: 'Em revisão'
    }
  ];

  const renderList = () => (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Sistema de Elaboração de Documentos</h1>
        <Button 
          onClick={() => setCurrentScreen('form')}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Novo Documento
        </Button>
      </div>

      <Card className="p-6">
        <h3 className="font-semibold mb-4 text-gray-700">📋 Documentos Cadastrados</h3>
        <p className="text-sm text-gray-600 mb-6">Lista de instruções de trabalho e procedimentos do sistema</p>
        
        <div className="space-y-3">
          {documentos.map((doc) => (
            <Card key={doc.id} className="p-4 border-l-4 border-l-blue-500 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-4">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-gray-800">{doc.titulo}</h4>
                      <p className="text-sm text-gray-600">Código: {doc.codigo}</p>
                    </div>
                  </div>
                  <div className="flex gap-6 text-sm text-gray-600 ml-9">
                    <div>
                      <span className="font-medium">Data de Emissão:</span> {doc.dataEmissao}
                    </div>
                    <div>
                      <span className="font-medium">Versão:</span> {doc.versao}
                    </div>
                    <div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        doc.status === 'Validado' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {doc.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setSelectedDocument(doc);
                      setCurrentScreen('preview');
                    }}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Visualizar
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setCurrentScreen('form')}>
                    <Edit2 className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderForm = () => (
    <div className="flex h-[85vh] bg-gray-100 gap-1">
      {/* Coluna Esquerda - Formulário */}
      <div className="w-1/2 overflow-y-auto bg-gray-50 p-6 space-y-6">
        <div className="flex justify-between items-center sticky top-0 bg-gray-50 pb-4 z-10">
          <div className="bg-green-500 text-white px-4 py-2 rounded text-sm">
            Documento Validado e Pronto para Emissão
          </div>
          <Button variant="outline" size="sm" onClick={() => setCurrentScreen('list')}>
            Voltar
          </Button>
        </div>

      {/* Construção do Código */}
      <Card className="p-6 bg-blue-50 border-blue-200">
        <h3 className="font-semibold mb-4 text-blue-900 text-sm uppercase">CONSTRUÇÃO DO CÓDIGO</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-medium mb-1 text-gray-700 uppercase">TIPO</label>
            <select 
              className="w-full border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
              value={formData.tipo}
              onChange={(e) => setFormData({...formData, tipo: e.target.value})}
            >
              <option>IT - INSTRUÇÕES DE TRABALHO</option>
              <option>PR - PROCEDIMENTO</option>
              <option>PO - POLÍTICA</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-gray-700 uppercase">SIGLA ÁREA</label>
            <select 
              className="w-full border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
              value={formData.sigla}
              onChange={(e) => setFormData({...formData, sigla: e.target.value})}
            >
              <option>DIR</option>
              <option>ENG</option>
              <option>QUA</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium mb-1 text-gray-700 uppercase">NÚMERO</label>
            <Input 
              type="text" 
              value={formData.numero}
              onChange={(e) => setFormData({...formData, numero: e.target.value})}
              className="bg-white text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-gray-700 uppercase">VERSÃO (ATUAL)</label>
            <Input 
              type="text" 
              value={formData.versao}
              onChange={(e) => setFormData({...formData, versao: e.target.value})}
              className="bg-green-100 text-sm"
              disabled
            />
          </div>
        </div>
        <div className="mt-6 p-4 bg-white rounded-lg text-center border-2 border-blue-300">
          <span className="text-3xl font-bold text-blue-900">{formData.tipo.split(' - ')[0]}-{formData.sigla}-{formData.numero}-V{formData.versao}</span>
        </div>
      </Card>

      {/* Título do Procedimento */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <label className="block text-xs font-medium mb-2 text-gray-700 uppercase">TÍTULO DO PROCEDIMENTO</label>
        <Input 
          type="text" 
          value={formData.titulo}
          onChange={(e) => setFormData({...formData, titulo: e.target.value})}
          className="text-sm"
        />
      </div>

      {/* Ícone Cabeçalho */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center gap-4">
          <label className="text-xs font-medium text-gray-700 uppercase">ÍCONE CABEÇALHO</label>
          <Button variant="outline" size="sm" className="text-sm">Upload Ícone</Button>
          <div className="w-12 h-12 border-2 border-dashed border-gray-300 rounded flex items-center justify-center bg-white">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>
      </div>

      {/* Responsáveis */}
      <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium mb-1 text-gray-700 uppercase">RESPONSÁVEL</label>
            <Input 
              value={formData.responsavel} 
              onChange={(e) => setFormData({...formData, responsavel: e.target.value})} 
              className="text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-gray-700 uppercase">ELABORADOR</label>
            <Input 
              value={formData.elaborador} 
              onChange={(e) => setFormData({...formData, elaborador: e.target.value})} 
              className="text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-gray-700 uppercase">REVISOR</label>
            <Input 
              value={formData.revisor} 
              onChange={(e) => setFormData({...formData, revisor: e.target.value})} 
              className="text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-gray-700 uppercase">APROVADOR</label>
            <Input 
              value={formData.aprovador} 
              onChange={(e) => setFormData({...formData, aprovador: e.target.value})} 
              className="text-sm"
            />
          </div>
        </div>
      </div>

      {/* Dados de Identificação */}
      <Card className="p-6 bg-white shadow-sm">
        <h3 className="font-semibold mb-4 text-gray-800 text-sm">1. DADOS DE IDENTIFICAÇÃO</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium mb-1 text-gray-700 uppercase">NOME DO PROJETO</label>
            <Input 
              value={formData.nomeProjeto} 
              onChange={(e) => setFormData({...formData, nomeProjeto: e.target.value})} 
              className="text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-gray-700 uppercase">CÓDIGO</label>
            <Input 
              value={formData.codigo} 
              disabled 
              className="bg-gray-100 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-gray-700 uppercase">MANAGER</label>
            <Input 
              value={formData.manager} 
              onChange={(e) => setFormData({...formData, manager: e.target.value})} 
              className="text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-gray-700 uppercase">DATA DE DIAS</label>
            <Input 
              value={formData.dataDias} 
              onChange={(e) => setFormData({...formData, dataDias: e.target.value})} 
              className="text-sm"
            />
          </div>
        </div>
        <div className="mt-4 pt-4 border-t">
          <label className="block text-xs font-medium mb-2 text-gray-700 uppercase">STATUS</label>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={formData.firmaStatus}
                onChange={(e) => setFormData({...formData, firmaStatus: e.target.checked})}
                className="w-4 h-4 rounded"
              />
              <span className="text-sm">Firma</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                className="w-4 h-4 rounded"
              />
              <span className="text-sm">Status</span>
            </label>
          </div>
        </div>
      </Card>

      {/* Escopo e Objetivos */}
      <Card className="p-6 bg-white shadow-sm">
        <h3 className="font-semibold mb-4 text-gray-800 text-sm">2. ESCOPO E OBJETIVOS</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium mb-1 text-gray-700 uppercase">ESCOPO</label>
            <Textarea 
              value={formData.escopo}
              onChange={(e) => setFormData({...formData, escopo: e.target.value})}
              rows={3}
              className="text-sm resize-none"
            />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-gray-700 uppercase">OBJETIVOS</label>
            <Textarea 
              value={formData.objetivos}
              onChange={(e) => setFormData({...formData, objetivos: e.target.value})}
              rows={3}
              className="text-sm resize-none"
            />
          </div>
        </div>
      </Card>

      {/* Cronograma de Entregas */}
      <Card className="p-6 bg-white shadow-sm">
        <h3 className="font-semibold mb-4 text-gray-800 text-sm">3. CRONOGRAMA DE ENTREGAS</h3>
        <Button variant="outline" size="sm" className="mb-4 text-xs">
          <Plus className="w-3 h-3 mr-1" />
          Add Entrega
        </Button>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left text-xs font-semibold">ID</th>
                <th className="border border-gray-300 p-2 text-left text-xs font-semibold">Fase</th>
                <th className="border border-gray-300 p-2 text-left text-xs font-semibold">Responsável</th>
                <th className="border border-gray-300 p-2 text-left text-xs font-semibold">Data</th>
                <th className="border border-gray-300 p-2 text-left text-xs font-semibold">Status</th>
                <th className="border border-gray-300 p-2 text-center text-xs font-semibold">Ações</th>
              </tr>
            </thead>
            <tbody>
              {formData.entregas.map((entrega, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-2 text-xs">{entrega.id}</td>
                  <td className="border border-gray-300 p-2 text-xs">{entrega.fase}</td>
                  <td className="border border-gray-300 p-2 text-xs">{entrega.responsavel}</td>
                  <td className="border border-gray-300 p-2 text-xs">
                    <input 
                      type="text" 
                      value={entrega.data}
                      className="w-full bg-transparent border-none focus:outline-none"
                    />
                  </td>
                  <td className="border border-gray-300 p-2 text-xs">
                    <span className={`px-2 py-1 rounded text-xs ${
                      entrega.status === 'Em andamento' ? 'bg-yellow-100 text-yellow-700' : 
                      entrega.status === 'A iniciar' ? 'bg-blue-100 text-blue-700' : 
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {entrega.status}
                    </span>
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    <Button variant="ghost" size="sm" className="text-red-600 h-6 w-6 p-0">
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Observações e Riscos */}
      <Card className="p-6 bg-white shadow-sm">
        <h3 className="font-semibold mb-4 text-gray-800 text-sm">4. OBSERVAÇÕES E RISCOS</h3>
        <Textarea 
          value={formData.observacoes}
          onChange={(e) => setFormData({...formData, observacoes: e.target.value})}
          rows={4}
          className="text-sm resize-none"
        />
      </Card>

      {/* Aprovações */}
      <Card className="p-6 bg-white shadow-sm">
        <h3 className="font-semibold mb-4 text-gray-800 text-sm">5. APROVAÇÕES</h3>
        <div className="grid grid-cols-3 gap-4">
          {formData.aprovacoes.map((apr, index) => (
            <div key={index} className="border border-gray-300 rounded p-3 text-center space-y-2">
              <div className="text-xs font-medium text-gray-600 mb-2">Signatura</div>
              <div className="h-16 border-b border-gray-200 flex items-center justify-center text-xs text-gray-400">
                [Espaço para assinatura]
              </div>
              <input 
                type="text"
                value={apr.nome}
                className="w-full text-center text-xs font-medium border-none focus:outline-none"
              />
              <div className="text-xs text-gray-500">Signatura Projeto</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Controle de Versão */}
      <Card className="p-6 bg-white shadow-sm">
        <h3 className="font-semibold mb-4 text-gray-800 text-sm">HISTÓRICO DE VERSÃO</h3>
        <Button variant="outline" size="sm" className="mb-4 text-xs">
          <Plus className="w-3 h-3 mr-1" />
          Add Versão
        </Button>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left text-xs font-semibold">REVISÃO</th>
                <th className="border border-gray-300 p-2 text-left text-xs font-semibold">DATA</th>
                <th className="border border-gray-300 p-2 text-left text-xs font-semibold">ALTERAÇÃO</th>
                <th className="border border-gray-300 p-2 text-center text-xs font-semibold">Ações</th>
              </tr>
            </thead>
            <tbody>
              {formData.versoes.map((ver, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-2 text-xs text-center">{ver.numero}</td>
                  <td className="border border-gray-300 p-2 text-xs">
                    <input 
                      type="text" 
                      value={ver.data}
                      className="w-full bg-transparent border-none focus:outline-none"
                    />
                  </td>
                  <td className="border border-gray-300 p-2 text-xs">{ver.alteracao}</td>
                  <td className="border border-gray-300 p-2 text-center">
                    <Button variant="ghost" size="sm" className="text-red-600 h-6 w-6 p-0">
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Botões de Ação */}
        <div className="sticky bottom-0 bg-gray-50 pt-6 pb-2">
          <Button 
            className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-base font-semibold shadow-lg"
            onClick={() => {
              setShowSuccessMessage(true);
              setTimeout(() => {
                setShowSuccessMessage(false);
              }, 1500);
            }}
          >
            <Download className="w-5 h-5 mr-2" />
            Baixar
          </Button>
          <span className="text-xs text-gray-600 text-center block mt-2">Rascunho não salvo</span>
        </div>
      </div>

      {/* Coluna Direita - Preview em Tempo Real */}
      <div className="w-1/2 overflow-y-auto bg-gray-200 p-6">
        <Card className="bg-white shadow-lg">
          {/* Cabeçalho */}
          <div className="border-2 border-black p-3">
            <div className="flex items-start justify-between gap-4">
              <div className="w-14 h-14 border-2 border-black flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="flex-1 text-center">
                <h2 className="text-base font-bold uppercase">INSTRUÇÕES DE TRABALHO</h2>
                <p className="text-xs font-semibold mt-1">Título: {formData.titulo}</p>
              </div>
              <div className="text-right text-xs flex-shrink-0">
                <p><strong>Código:</strong> {formData.codigo}</p>
                <p><strong>Versão:</strong> {formData.versao}</p>
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-black">
              <p className="text-xs"><strong>Data de Emissão:</strong> 11/12/2025</p>
            </div>
          </div>

          {/* 1. Dados de Identificação */}
          <div className="p-4">
            <h3 className="font-bold text-sm mb-2 border-b-2 border-black pb-1">1. DADOS DE IDENTIFICAÇÃO</h3>
            <table className="w-full border-collapse border border-black text-xs">
              <tbody>
                <tr>
                  <td className="border border-black p-1 font-semibold bg-gray-50 w-1/4">Nome do Projeto:</td>
                  <td className="border border-black p-1">{formData.nomeProjeto}</td>
                  <td className="border border-black p-1 font-semibold bg-gray-50 w-1/6">Código:</td>
                  <td className="border border-black p-1">{formData.codigo}</td>
                </tr>
                <tr>
                  <td className="border border-black p-1 font-semibold bg-gray-50">Manager:</td>
                  <td className="border border-black p-1">{formData.manager}</td>
                  <td className="border border-black p-1 font-semibold bg-gray-50">Data de Dias:</td>
                  <td className="border border-black p-1">{formData.dataDias}</td>
                </tr>
                <tr>
                  <td className="border border-black p-1 font-semibold bg-gray-50">Status:</td>
                  <td className="border border-black p-1" colSpan={3}>
                    {formData.firmaStatus ? '☑' : '☐'} Firma   ☐ Status
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 2. Escopo e Objetivos */}
          <div className="px-4 pb-4">
            <h3 className="font-bold text-sm mb-2 border-b-2 border-black pb-1">2. ESCOPO E OBJETIVOS</h3>
            <table className="w-full border-collapse border border-black text-xs">
              <tbody>
                <tr>
                  <td className="border border-black p-2 align-top w-1/2">
                    <p className="font-semibold mb-1">Escopo</p>
                    <p className="text-xs leading-relaxed">{formData.escopo}</p>
                  </td>
                  <td className="border border-black p-2 align-top w-1/2">
                    <p className="font-semibold mb-1">Objetivos</p>
                    <p className="text-xs leading-relaxed">{formData.objetivos}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 3. Cronograma de Entregas */}
          <div className="px-4 pb-4">
            <h3 className="font-bold text-sm mb-2 border-b-2 border-black pb-1">3. CRONOGRAMA DE ENTREGAS</h3>
            <table className="w-full border-collapse border border-black text-xs">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-black p-1 text-xs">ID</th>
                  <th className="border border-black p-1 text-xs">Fase</th>
                  <th className="border border-black p-1 text-xs">Responsável</th>
                  <th className="border border-black p-1 text-xs">Data</th>
                  <th className="border border-black p-1 text-xs">Status</th>
                </tr>
              </thead>
              <tbody>
                {formData.entregas.map((entrega, index) => (
                  <tr key={index}>
                    <td className="border border-black p-1 text-center text-xs">{entrega.id}</td>
                    <td className="border border-black p-1 text-xs">{entrega.fase}</td>
                    <td className="border border-black p-1 text-xs">{entrega.responsavel}</td>
                    <td className="border border-black p-1 text-center text-xs">{entrega.data}</td>
                    <td className="border border-black p-1 text-center text-xs">{entrega.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 4. Observações e Riscos */}
          <div className="px-4 pb-4">
            <h3 className="font-bold text-sm mb-2 border-b-2 border-black pb-1">4. OBSERVAÇÕES E RISCOS</h3>
            <div className="border border-black p-2">
              <p className="text-xs text-justify leading-relaxed">{formData.observacoes}</p>
            </div>
          </div>

          {/* 5. Aprovações */}
          <div className="px-4 pb-4">
            <h3 className="font-bold text-sm mb-2 border-b-2 border-black pb-1">5. APROVAÇÕES</h3>
            <table className="w-full border-collapse border border-black text-xs">
              <thead>
                <tr>
                  <th className="border border-black p-2 text-xs">Signatura</th>
                  <th className="border border-black p-2 text-xs">Signatura</th>
                  <th className="border border-black p-2 text-xs">Signatura</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black p-6"></td>
                  <td className="border border-black p-6"></td>
                  <td className="border border-black p-6"></td>
                </tr>
                <tr>
                  <td className="border border-black p-1 text-center text-xs">Signatura Projeto</td>
                  <td className="border border-black p-1 text-center text-xs">Signatura Projeto</td>
                  <td className="border border-black p-1 text-center text-xs">Signatura Projeto</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Controle de Versão */}
          <div className="px-4 pb-4">
            <h3 className="font-bold text-sm mb-2 border-b-2 border-black pb-1">CONTROLE DE VERSÃO</h3>
            <table className="w-full border-collapse border border-black text-xs">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-black p-1 text-xs">REVISÃO</th>
                  <th className="border border-black p-1 text-xs">DATA</th>
                  <th className="border border-black p-1 text-xs">ALTERAÇÃO</th>
                </tr>
              </thead>
              <tbody>
                {formData.versoes.map((ver, index) => (
                  <tr key={index}>
                    <td className="border border-black p-1 text-center text-xs">{ver.numero}</td>
                    <td className="border border-black p-1 text-center text-xs">{ver.data}</td>
                    <td className="border border-black p-1 text-xs">{ver.alteracao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {showSuccessMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-xl flex items-center gap-3 animate-in slide-in-from-top z-50">
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">Documento Validado e Pronto para Emissão</span>
        </div>
      )}
    </div>
  );

  const renderPreview = () => (
    <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto bg-gray-50">
      <div className="flex justify-between items-center sticky top-0 bg-gray-50 pb-4 z-10">
        <Button variant="outline" onClick={() => setCurrentScreen('list')}>
          ← Voltar
        </Button>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            PDF
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            WORD
          </Button>
        </div>
      </div>

      {/* Preview do Documento */}
      <Card className="p-8 bg-white max-w-4xl mx-auto">
        {/* Cabeçalho */}
        <div className="border-2 border-black p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="w-16 h-16 border-2 border-black flex items-center justify-center">
              <CheckCircle className="w-10 h-10" />
            </div>
            <div className="flex-1 text-center">
              <h2 className="text-xl font-bold">INSTRUÇÕES DE TRABALHO</h2>
              <p className="font-semibold mt-1">Título: {formData.titulo}</p>
            </div>
            <div className="text-right">
              <p className="text-sm"><strong>Código:</strong> {formData.codigo}</p>
              <p className="text-sm"><strong>Versão:</strong> {formData.versao}</p>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-black">
            <p className="text-sm"><strong>Data de Emissão:</strong> 11/12/2025</p>
          </div>
        </div>

        {/* 1. Dados de Identificação */}
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-3 border-b-2 border-black pb-1">1. DADOS DE IDENTIFICAÇÃO</h3>
          <table className="w-full border-collapse border border-black">
            <tbody>
              <tr>
                <td className="border border-black p-2 font-semibold bg-gray-50">Nome do Projeto:</td>
                <td className="border border-black p-2">{formData.nomeProjeto}</td>
                <td className="border border-black p-2 font-semibold bg-gray-50">Código:</td>
                <td className="border border-black p-2">{formData.codigo}</td>
              </tr>
              <tr>
                <td className="border border-black p-2 font-semibold bg-gray-50">Manager:</td>
                <td className="border border-black p-2">{formData.manager}</td>
                <td className="border border-black p-2 font-semibold bg-gray-50">Data de Dias:</td>
                <td className="border border-black p-2">{formData.dataDias}</td>
              </tr>
              <tr>
                <td className="border border-black p-2 font-semibold bg-gray-50">Status:</td>
                <td className="border border-black p-2" colSpan={3}>
                  {formData.firmaStatus ? '☑' : '☐'} Firma   ☐ Status
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 2. Escopo e Objetivos */}
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-3 border-b-2 border-black pb-1">2. ESCOPO E OBJETIVOS</h3>
          <table className="w-full border-collapse border border-black">
            <tbody>
              <tr>
                <td className="border border-black p-3 align-top w-1/2">
                  <p className="font-semibold mb-2">Escopo</p>
                  <p className="text-sm">{formData.escopo}</p>
                </td>
                <td className="border border-black p-3 align-top w-1/2">
                  <p className="font-semibold mb-2">Objetivos</p>
                  <p className="text-sm">{formData.objetivos}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 3. Cronograma de Entregas */}
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-3 border-b-2 border-black pb-1">3. CRONOGRAMA DE ENTREGAS</h3>
          <table className="w-full border-collapse border border-black text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-black p-2">ID</th>
                <th className="border border-black p-2">Fase</th>
                <th className="border border-black p-2">Responsável</th>
                <th className="border border-black p-2">Data</th>
                <th className="border border-black p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {formData.entregas.map((entrega, index) => (
                <tr key={index}>
                  <td className="border border-black p-2 text-center">{entrega.id}</td>
                  <td className="border border-black p-2">{entrega.fase}</td>
                  <td className="border border-black p-2">{entrega.responsavel}</td>
                  <td className="border border-black p-2 text-center">{entrega.data}</td>
                  <td className="border border-black p-2 text-center">{entrega.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 4. Observações e Riscos */}
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-3 border-b-2 border-black pb-1">4. OBSERVAÇÕES E RISCOS</h3>
          <div className="border border-black p-3">
            <p className="text-sm text-justify">{formData.observacoes}</p>
          </div>
        </div>

        {/* 5. Aprovações */}
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-3 border-b-2 border-black pb-1">5. APROVAÇÕES</h3>
          <table className="w-full border-collapse border border-black">
            <thead>
              <tr>
                <th className="border border-black p-3">Signatura</th>
                <th className="border border-black p-3">Signatura</th>
                <th className="border border-black p-3">Signatura</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black p-8"></td>
                <td className="border border-black p-8"></td>
                <td className="border border-black p-8"></td>
              </tr>
              <tr>
                <td className="border border-black p-2 text-center text-sm">Signatura Projeto</td>
                <td className="border border-black p-2 text-center text-sm">Signatura Projeto</td>
                <td className="border border-black p-2 text-center text-sm">Signatura Projeto</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Controle de Versão */}
        <div>
          <h3 className="font-bold text-lg mb-3 border-b-2 border-black pb-1">CONTROLE DE VERSÃO</h3>
          <table className="w-full border-collapse border border-black text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-black p-2">REVISÃO</th>
                <th className="border border-black p-2">DATA</th>
                <th className="border border-black p-2">ALTERAÇÃO</th>
              </tr>
            </thead>
            <tbody>
              {formData.versoes.map((ver, index) => (
                <tr key={index}>
                  <td className="border border-black p-2 text-center">{ver.numero}</td>
                  <td className="border border-black p-2 text-center">{ver.data}</td>
                  <td className="border border-black p-2">{ver.alteracao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] h-[90vh] p-0 overflow-hidden">
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold">Sistema de Elaboração de Documentos - Demo Interativa</h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
          <div className="flex-1 overflow-auto">
            {currentScreen === 'list' && renderList()}
            {currentScreen === 'form' && renderForm()}
            {currentScreen === 'preview' && renderPreview()}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DocumentSystemDemo;
