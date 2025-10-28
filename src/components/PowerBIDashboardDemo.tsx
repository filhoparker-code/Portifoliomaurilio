import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, BarChart3, Calendar, Filter, Download } from 'lucide-react';
import { useState } from 'react';

interface PowerBIDashboardDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

const PowerBIDashboardDemo = ({ isOpen, onClose }: PowerBIDashboardDemoProps) => {
  const [currentView, setCurrentView] = useState<'actions' | 'schedule'>('actions');

  const ActionsView = () => (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard de Ações</h1>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* Sidebar */}
        <div className="col-span-3 bg-blue-600 rounded-lg p-4 text-white">
          <div className="bg-white text-blue-600 rounded-lg p-4 mb-4 text-center">
            <div className="text-3xl font-bold">53</div>
            <div className="text-sm">Total Ações</div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-4">
              <Filter size={16} />
              <span className="text-sm">Filtros</span>
            </div>
            
            <select className="w-full p-2 rounded text-gray-800 text-sm">
              <option>Selecionar tudo</option>
            </select>
            
            <div className="space-y-1">
              {['março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro'].map((month) => (
                <div key={month} className={`p-2 rounded text-sm cursor-pointer ${month === 'agosto' ? 'bg-gray-800' : 'bg-white/20'}`}>
                  {month}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-9 space-y-4">
          {/* Charts Row 1 */}
          <div className="grid grid-cols-2 gap-4">
            {/* Aderência das Ações */}
            <div className="bg-white rounded-lg p-4 border">
              <h3 className="font-semibold text-center mb-4 text-blue-600">ADERÊNCIA DAS AÇÕES</h3>
              <div className="relative mx-auto w-48 h-48">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold">61,82%</div>
                  </div>
                </div>
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="35" fill="none" stroke="#e5e7eb" strokeWidth="8"/>
                  <circle cx="50" cy="50" r="35" fill="none" stroke="#3b82f6" strokeWidth="8" strokeDasharray="136 220" strokeLinecap="round"/>
                  <circle cx="50" cy="50" r="35" fill="none" stroke="#f97316" strokeWidth="8" strokeDasharray="54 220" strokeDashoffset="-136" strokeLinecap="round"/>
                  <circle cx="50" cy="50" r="35" fill="none" stroke="#1e40af" strokeWidth="8" strokeDasharray="30 220" strokeDashoffset="-190" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex justify-center gap-4 text-xs mt-4">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>Concluído</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span>Em andamento</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-blue-800"></div>
                  <span>(Em branco)</span>
                </div>
              </div>
              <div className="mt-4 text-center text-sm text-gray-600">
                <div>6 - 13 - 34</div>
              </div>
            </div>

            {/* Ações Reprogramadas */}
            <div className="bg-white rounded-lg p-4 border">
              <h3 className="font-semibold text-center mb-4 text-blue-600">AÇÕES REPROGRAMADAS</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center p-2 border-l-4 border-blue-500 bg-gray-50">
                  <span>Almoxarifado</span>
                  <span>Em andamento</span>
                  <span className="font-semibold">2</span>
                </div>
                <div className="flex justify-between items-center p-2 border-l-4 border-blue-500 bg-gray-50">
                  <span>Auditoria</span>
                  <span>Em andamento</span>
                  <span className="font-semibold">1</span>
                </div>
                <div className="flex justify-between items-center p-2 border-l-4 border-blue-500 bg-gray-50">
                  <span>Compras</span>
                  <span>Em andamento</span>
                  <span className="font-semibold">1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Row 2 */}
          <div className="grid grid-cols-2 gap-4">
            {/* Ação por Setor */}
            <div className="bg-white rounded-lg p-4 border">
              <h3 className="font-semibold text-center mb-4 text-blue-600">AÇÃO POR SETOR</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 text-xs">13</div>
                  <div className="flex-1 bg-gray-200 rounded">
                    <div className="bg-blue-500 h-6 rounded flex items-center justify-center text-white text-xs" style={{width: '65%'}}>8</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 text-xs"></div>
                  <div className="flex-1 bg-gray-200 rounded">
                    <div className="bg-blue-500 h-6 rounded flex items-center justify-center text-white text-xs" style={{width: '25%'}}>4</div>
                  </div>
                </div>
                {/* More bars would go here */}
              </div>
            </div>

            {/* Total Não Conformidades por Setor */}
            <div className="bg-white rounded-lg p-4 border">
              <h3 className="font-semibold text-center mb-4 text-blue-600">TOTAL NÃO CONFORMIDADES POR SETOR</h3>
              <div className="flex justify-around items-end h-32">
                <div className="flex flex-col items-center">
                  <div className="bg-blue-500 w-12 h-20 rounded-t flex items-center justify-center text-white font-bold">3</div>
                  <div className="text-xs mt-1 transform -rotate-45 origin-top-left">Contabilidade</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-500 w-12 h-20 rounded-t flex items-center justify-center text-white font-bold">3</div>
                  <div className="text-xs mt-1 transform -rotate-45 origin-top-left">Contas a pagar</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-400 w-12 h-16 rounded-t flex items-center justify-center text-white font-bold">2</div>
                  <div className="text-xs mt-1 transform -rotate-45 origin-top-left">Qualidade (CQ)</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-300 w-12 h-12 rounded-t flex items-center justify-center text-white font-bold">1</div>
                  <div className="text-xs mt-1 transform -rotate-45 origin-top-left">Custos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg border overflow-hidden">
            <table className="w-full text-xs">
              <thead className="bg-blue-100">
                <tr>
                  <th className="p-2 text-left">Descrição da NC</th>
                  <th className="p-2 text-left">Setor/Subsetor</th>
                  <th className="p-2 text-left">Responsável</th>
                  <th className="p-2 text-left">Status</th>
                  <th className="p-2 text-left">Prazo Final</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">Todos os processos passaram a ser realizado no Sankya não necessitando mais das planilhas</td>
                  <td className="p-2">Laboratório</td>
                  <td className="p-2">Djavan de Almeida - Assistente de qualidade</td>
                  <td className="p-2"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Concluído</span></td>
                  <td className="p-2">15/08/2025</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Procedimento não realizado</td>
                  <td className="p-2">Produção</td>
                  <td className="p-2">Matheus silva - cronoanalista</td>
                  <td className="p-2"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Concluído</span></td>
                  <td className="p-2">13/05/2025</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Processos necessitando de revisão</td>
                  <td className="p-2">Almoxarifado</td>
                  <td className="p-2">Jessica Tamires - Encarregada de almoxarifado</td>
                  <td className="p-2"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">Em andamento</span></td>
                  <td className="p-2">15/09/2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const ScheduleView = () => (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard de Cronograma</h1>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* Sidebar */}
        <div className="col-span-3 bg-blue-600 rounded-lg p-4 text-white">
          <div className="bg-white text-blue-600 rounded-lg p-4 mb-4 text-center">
            <div className="text-3xl font-bold">108%</div>
            <div className="text-sm">Indicador</div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-4">
              <Filter size={16} />
              <span className="text-sm">Filtros</span>
            </div>
            
            <select className="w-full p-2 rounded text-gray-800 text-sm">
              <option>Selecionar tudo</option>
            </select>
            
            <div className="space-y-1">
              {['março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro'].map((month) => (
                <div key={month} className={`p-2 rounded text-sm cursor-pointer ${month === 'agosto' ? 'bg-gray-800' : 'bg-white/20'}`}>
                  {month}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-9 space-y-4">
          {/* Top Row */}
          <div className="grid grid-cols-2 gap-4">
            {/* Total Executado */}
            <div className="bg-white rounded-lg p-4 border">
              <h3 className="font-semibold text-center mb-4 text-blue-600">Total Executado</h3>
              <div className="relative mx-auto w-32 h-32">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-2xl font-bold">54</div>
                </div>
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="35" fill="none" stroke="#e5e7eb" strokeWidth="8"/>
                  <circle cx="50" cy="50" r="35" fill="none" stroke="#3b82f6" strokeWidth="8" strokeDasharray="190 220" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="text-center text-xs mt-2">
                <div>0 ——————— 50</div>
              </div>
            </div>

            {/* Calendar */}
            <div className="bg-white rounded-lg p-4 border">
              <div className="grid grid-cols-7 gap-1 text-xs">
                <div className="text-center font-semibold bg-blue-500 text-white p-1">dom</div>
                <div className="text-center font-semibold bg-blue-500 text-white p-1">seg</div>
                <div className="text-center font-semibold bg-blue-500 text-white p-1">ter</div>
                <div className="text-center font-semibold bg-blue-500 text-white p-1">qua</div>
                <div className="text-center font-semibold bg-blue-500 text-white p-1">qui</div>
                <div className="text-center font-semibold bg-blue-500 text-white p-1">sex</div>
                <div className="text-center font-semibold bg-blue-500 text-white p-1">sab</div>
                
                {/* Calendar days */}
                {Array.from({length: 31}, (_, i) => i + 1).map((day) => (
                  <div key={day} className={`text-center p-1 border ${
                    day === 6 ? 'bg-blue-100 text-blue-600' : 
                    day === 12 ? 'bg-blue-100 text-blue-600' :
                    day === 19 ? 'bg-blue-100 text-blue-600' :
                    day === 25 ? 'bg-blue-100 text-blue-600' :
                    day === 28 ? 'bg-blue-100 text-blue-600' : ''
                  }`}>
                    {day}
                    {day === 6 && <div className="text-xs text-blue-600">Qualidade (CQ)</div>}
                    {day === 12 && <div className="text-xs text-blue-600">Contas a pagar</div>}
                    {day === 25 && <div className="text-xs text-blue-600">Custos</div>}
                    {day === 28 && <div className="text-xs text-blue-600">Contabilidade</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Row */}
          <div className="grid grid-cols-2 gap-4">
            {/* Executado / Planejado */}
            <div className="bg-white rounded-lg p-4 border">
              <h3 className="font-semibold text-center mb-4 text-blue-600">Executado / Planejado</h3>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-20">Contas a pagar</div>
                  <div className="flex-1 bg-gray-200 rounded h-4 relative">
                    <div className="bg-blue-500 h-full rounded" style={{width: '100%'}}></div>
                    <div className="absolute right-1 top-0 h-full flex items-center text-white text-xs">17/17</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-20">Contabilidade</div>
                  <div className="flex-1 bg-gray-200 rounded h-4 relative">
                    <div className="bg-blue-500 h-full rounded" style={{width: '75%'}}></div>
                    <div className="absolute right-1 top-0 h-full flex items-center text-gray-700 text-xs">15/15</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-20">Qualidade (CQ)</div>
                  <div className="flex-1 bg-gray-200 rounded h-4 relative">
                    <div className="bg-blue-400 h-full rounded" style={{width: '60%'}}></div>
                    <div className="absolute right-1 top-0 h-full flex items-center text-gray-700 text-xs">9/10</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Não Conformidades por Setor */}
            <div className="bg-white rounded-lg p-4 border">
              <h3 className="font-semibold text-center mb-4 text-blue-600">Total Não Conformidades por Setor</h3>
              <div className="flex justify-around items-end h-32">
                <div className="flex flex-col items-center">
                  <div className="bg-blue-500 w-12 h-20 rounded-t flex items-center justify-center text-white font-bold">3</div>
                  <div className="text-xs mt-1 transform -rotate-45 origin-top-left">Contabilidade</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-500 w-12 h-20 rounded-t flex items-center justify-center text-white font-bold">3</div>
                  <div className="text-xs mt-1 transform -rotate-45 origin-top-left">Contas a pagar</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-400 w-12 h-16 rounded-t flex items-center justify-center text-white font-bold">2</div>
                  <div className="text-xs mt-1 transform -rotate-45 origin-top-left">Qualidade (CQ)</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-300 w-12 h-12 rounded-t flex items-center justify-center text-white font-bold">1</div>
                  <div className="text-xs mt-1 transform -rotate-45 origin-top-left">Custos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Próximas Análises */}
          <div className="bg-white rounded-lg p-4 border">
            <h3 className="font-semibold text-center mb-4 text-blue-600">Próximas Análises</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="border border-blue-200 rounded p-3 text-center">
                <div className="text-blue-600 font-semibold">Produção - s...</div>
                <div className="text-sm text-gray-600">05/09/2025</div>
              </div>
              <div className="border border-blue-200 rounded p-3 text-center">
                <div className="text-blue-600 font-semibold">PCP</div>
                <div className="text-sm text-gray-600">11/09/2025</div>
              </div>
              <div className="border border-blue-200 rounded p-3 text-center">
                <div className="text-blue-600 font-semibold">Manutenção</div>
                <div className="text-sm text-gray-600">18/09/2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[90vh] overflow-hidden p-0">
        <DialogHeader className="p-6 pb-4 border-b">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold">
              Demo - Dashboard Power BI de Auditorias
            </DialogTitle>
            <div className="flex items-center gap-4">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <Button
                  variant={currentView === 'actions' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setCurrentView('actions')}
                  className="flex items-center gap-2"
                >
                  <BarChart3 size={16} />
                  Ações
                </Button>
                <Button
                  variant={currentView === 'schedule' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setCurrentView('schedule')}
                  className="flex items-center gap-2"
                >
                  <Calendar size={16} />
                  Cronograma
                </Button>
              </div>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X size={20} />
              </Button>
            </div>
          </div>
        </DialogHeader>
        
        <div className="overflow-auto max-h-[calc(90vh-120px)]">
          {currentView === 'actions' ? <ActionsView /> : <ScheduleView />}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PowerBIDashboardDemo;