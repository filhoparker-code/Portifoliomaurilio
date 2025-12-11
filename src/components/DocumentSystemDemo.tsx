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
    <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
      <div className="flex justify-between items-center sticky top-0 bg-white pb-4 border-b">
        <h1 className="text-2xl font-semibold text-gray-800">Novo Documento</h1>
        <Button variant="outline" onClick={() => setCurrentScreen('list')}>
          Voltar
        </Button>
      </div>

      {/* Construção do Código */}
      <Card className="p-6 bg-blue-50">
        <h3 className="font-semibold mb-4 text-blue-900">CONSTRUÇÃO DO CÓDIGO</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">TIPO</label>
            <select 
              className="w-full border rounded-lg px-3 py-2"
              value={formData.tipo}
              onChange={(e) => setFormData({...formData, tipo: e.target.value})}
            >
              <option>IT - INSTRUÇÕES DE TRABALHO</option>
              <option>PR - PROCEDIMENTO</option>
              <option>PO - POLÍTICA</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">SIGLA ÁREA</label>
            <select 
              className="w-full border rounded-lg px-3 py-2"
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
            <label className="block text-sm font-medium mb-2 text-gray-700">NÚMERO</label>
            <Input 
              type="text" 
              value={formData.numero}
              onChange={(e) => setFormData({...formData, numero: e.target.value})}
              className="bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">VERSÃO (ATUAL)</label>
            <Input 
              type="text" 
              value={formData.versao}
              onChange={(e) => setFormData({...formData, versao: e.target.value})}
              className="bg-green-50"
              disabled
            />
          </div>
        </div>
        <div className="mt-4 p-4 bg-white rounded-lg text-center">
          <span className="text-2xl font-bold text-blue-900">{formData.tipo.split(' - ')[0]}-{formData.sigla}-{formData.numero}-V{formData.versao}</span>
        </div>
      </Card>

      {/* Título do Procedimento */}
      <div>
        <label className="block text-sm font-medium mb-2 text-gray-700">TÍTULO DO PROCEDIMENTO</label>
        <Input 
          type="text" 
          value={formData.titulo}
          onChange={(e) => setFormData({...formData, titulo: e.target.value})}
        />
      </div>

      {/* Ícone Cabeçalho */}
      <div className="flex items-center gap-3">
        <label className="text-sm font-medium text-gray-700">ÍCONE CABEÇALHO</label>
        <Button variant="outline" size="sm">Upload Ícone</Button>
        <div className="w-12 h-12 border-2 border-dashed rounded flex items-center justify-center">
          <CheckCircle className="w-6 h-6 text-green-600" />
        </div>
      </div>

      {/* Responsáveis */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">RESPONSÁVEL</label>
          <Input value={formData.responsavel} onChange={(e) => setFormData({...formData, responsavel: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">ELABORADOR</label>
          <Input value={formData.elaborador} onChange={(e) => setFormData({...formData, elaborador: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">REVISOR</label>
          <Input value={formData.revisor} onChange={(e) => setFormData({...formData, revisor: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">APROVADOR</label>
          <Input value={formData.aprovador} onChange={(e) => setFormData({...formData, aprovador: e.target.value})} />
        </div>
      </div>

      {/* Dados de Identificação */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4 text-gray-800">1. DADOS DE IDENTIFICAÇÃO</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">NOME DO PROJETO</label>
            <Input value={formData.nomeProjeto} onChange={(e) => setFormData({...formData, nomeProjeto: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">CÓDIGO</label>
            <Input value={formData.codigo} disabled className="bg-gray-50" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">MANAGER</label>
            <Input value={formData.manager} onChange={(e) => setFormData({...formData, manager: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">DATA DE DIAS</label>
            <Input value={formData.dataDias} onChange={(e) => setFormData({...formData, dataDias: e.target.value})} />
          </div>
        </div>
        <div className="mt-4">
          <label className="flex items-center gap-2">
            <input 
              type="checkbox" 
              checked={formData.firmaStatus}
              onChange={(e) => setFormData({...formData, firmaStatus: e.target.checked})}
              className="w-4 h-4"
            />
            <span className="text-sm">Firma</span>
          </label>
        </div>
      </Card>

      {/* Escopo e Objetivos */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4 text-gray-800">2. ESCOPO E OBJETIVOS</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">ESCOPO</label>
            <Textarea 
              value={formData.escopo}
              onChange={(e) => setFormData({...formData, escopo: e.target.value})}
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">OBJETIVOS</label>
            <Textarea 
              value={formData.objetivos}
              onChange={(e) => setFormData({...formData, objetivos: e.target.value})}
              rows={3}
            />
          </div>
        </div>
      </Card>

      {/* Cronograma de Entregas */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4 text-gray-800">3. CRONOGRAMA DE ENTREGAS</h3>
        <Button variant="outline" size="sm" className="mb-4">
          <Plus className="w-4 h-4 mr-2" />
          Add Entrega
        </Button>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-2 text-left text-sm font-medium">ID</th>
                <th className="border p-2 text-left text-sm font-medium">Fase</th>
                <th className="border p-2 text-left text-sm font-medium">Responsável</th>
                <th className="border p-2 text-left text-sm font-medium">Data</th>
                <th className="border p-2 text-left text-sm font-medium">Status</th>
                <th className="border p-2 text-center text-sm font-medium">Ações</th>
              </tr>
            </thead>
            <tbody>
              {formData.entregas.map((entrega, index) => (
                <tr key={index}>
                  <td className="border p-2 text-sm">{entrega.id}</td>
                  <td className="border p-2 text-sm">{entrega.fase}</td>
                  <td className="border p-2 text-sm">{entrega.responsavel}</td>
                  <td className="border p-2 text-sm">{entrega.data}</td>
                  <td className="border p-2 text-sm">
                    <span className={`px-2 py-1 rounded text-xs ${
                      entrega.status === 'Em andamento' ? 'bg-yellow-100 text-yellow-700' : 
                      entrega.status === 'A iniciar' ? 'bg-blue-100 text-blue-700' : 
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {entrega.status}
                    </span>
                  </td>
                  <td className="border p-2 text-center">
                    <Button variant="ghost" size="sm" className="text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Observações e Riscos */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4 text-gray-800">4. OBSERVAÇÕES E RISCOS</h3>
        <Textarea 
          value={formData.observacoes}
          onChange={(e) => setFormData({...formData, observacoes: e.target.value})}
          rows={4}
        />
      </Card>

      {/* Aprovações */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4 text-gray-800">5. APROVAÇÕES</h3>
        <div className="grid grid-cols-3 gap-4">
          {formData.aprovacoes.map((apr, index) => (
            <div key={index} className="border rounded p-4 text-center space-y-2">
              <div className="h-16 border-b flex items-center justify-center text-sm text-gray-500">
                Signatura
              </div>
              <p className="text-sm font-medium">{apr.nome}</p>
              <p className="text-xs text-gray-600">Signatura Projeto</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Controle de Versão */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4 text-gray-800">CONTROLE DE VERSÃO</h3>
        <Button variant="outline" size="sm" className="mb-4">
          <Plus className="w-4 h-4 mr-2" />
          Add Versão
        </Button>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-2 text-left text-sm font-medium">REVISÃO</th>
                <th className="border p-2 text-left text-sm font-medium">DATA</th>
                <th className="border p-2 text-left text-sm font-medium">ALTERAÇÃO</th>
                <th className="border p-2 text-center text-sm font-medium">Ações</th>
              </tr>
            </thead>
            <tbody>
              {formData.versoes.map((ver, index) => (
                <tr key={index}>
                  <td className="border p-2 text-sm">{ver.numero}</td>
                  <td className="border p-2 text-sm">{ver.data}</td>
                  <td className="border p-2 text-sm">{ver.alteracao}</td>
                  <td className="border p-2 text-center">
                    <Button variant="ghost" size="sm" className="text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Botões de Ação */}
      <div className="sticky bottom-0 bg-white pt-4 border-t flex gap-4">
        <Button 
          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
          onClick={() => {
            setShowSuccessMessage(true);
            setTimeout(() => {
              setShowSuccessMessage(false);
              setCurrentScreen('list');
            }, 2000);
          }}
        >
          <Download className="w-5 h-5 mr-2" />
          Baixar
        </Button>
        <Button variant="outline" onClick={() => setCurrentScreen('list')}>
          Rascunho não salvo
        </Button>
      </div>

      {showSuccessMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-in slide-in-from-top">
          <CheckCircle className="w-5 h-5" />
          Documento Validado e Pronto para Emissão
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
