import { useState } from 'react';
import { X, BarChart3, Calendar, FileText, Settings, Users, TrendingUp, Download, Filter, Plus, Eye, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface AuditSystemDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuditSystemDemo = ({ isOpen, onClose }: AuditSystemDemoProps) => {
  const [currentScreen, setCurrentScreen] = useState('dashboard');

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'reports', label: 'Relatórios', icon: FileText },
    { id: 'schedule', label: 'Cronograma', icon: Calendar },
    { id: 'actions', label: 'Ações', icon: TrendingUp },
    { id: 'indicators', label: 'Indicadores', icon: BarChart3 },
    { id: 'followup', label: 'Follow-up', icon: Users },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  const renderDashboard = () => (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <Filter className="w-5 h-5" />
          <select className="border rounded px-3 py-1">
            <option>Setembro</option>
          </select>
          <span className="text-sm text-muted-foreground">Última atualização: 05/09/2025</span>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4 bg-green-50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Auditorias Realizadas</p>
              <p className="text-2xl font-bold">0</p>
              <p className="text-xs text-green-600">↗ +20% Este mês</p>
            </div>
            <FileText className="w-8 h-8 text-green-600" />
          </div>
        </Card>
        
        <Card className="p-4 bg-green-50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Conformidade Média</p>
              <p className="text-2xl font-bold">0%</p>
              <p className="text-xs text-green-600">↗ +5% Últimos 30 dias</p>
            </div>
            <BarChart3 className="w-8 h-8 text-green-600" />
          </div>
        </Card>
        
        <Card className="p-4 bg-yellow-50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Ações Pendentes</p>
              <p className="text-2xl font-bold">9</p>
              <p className="text-xs text-red-600">↓ -3 Requerem atenção</p>
            </div>
            <TrendingUp className="w-8 h-8 text-yellow-600" />
          </div>
        </Card>
        
        <Card className="p-4 bg-green-50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Aderência ao Cronograma</p>
              <p className="text-2xl font-bold">0%</p>
              <p className="text-xs text-green-600">↗ +2% Meta: 90%</p>
            </div>
            <Calendar className="w-8 h-8 text-green-600" />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Status das Ações</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Concluídas</span>
              </div>
              <span className="font-semibold">29</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>Em Andamento</span>
              </div>
              <span className="font-semibold">4</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>Atrasadas</span>
              </div>
              <span className="font-semibold">0</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <span>Pendentes</span>
              </div>
              <span className="font-semibold">5</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Progresso Geral</span>
              <span>76%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '76%' }}></div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Próximas Atividades</h3>
          <div className="text-center text-muted-foreground py-8">
            <Calendar className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p>Nenhuma atividade próxima agendada</p>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Relatórios</h1>
      
      <Card className="p-6">
        <h3 className="font-semibold mb-4">📋 Relatórios Salvos</h3>
        <p className="text-sm text-muted-foreground mb-6">Lista de todos os relatórios de auditoria salvos no sistema.</p>
        
        <div className="space-y-4">
          {[
            { name: 'Auditoria', conformity: '53% Conformidade', date: '11/07/2025', creation: '22/08/2025', procedures: '7 item(s)', files: '1 arquivo(s)' },
            { name: 'Assuntos Regulatórios', conformity: '90% Conformidade', date: '16/07/2025', creation: '28/08/2025', procedures: '11 item(s)', files: '2 arquivo(s)' },
            { name: 'Jurídico', conformity: '80% Conformidade', date: '23/07/2025', creation: '28/08/2025', procedures: '3 item(s)', files: '2 arquivo(s)' }
          ].map((report, index) => (
            <Card key={index} className="p-4 border-l-4 border-l-blue-500">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <h4 className="font-semibold">{report.name}</h4>
                    <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">{report.conformity}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-sm text-muted-foreground">
                    <div>
                      <p className="font-medium">Data Realizada:</p>
                      <p>{report.date}</p>
                    </div>
                    <div>
                      <p className="font-medium">Data de Criação:</p>
                      <p>{report.creation}</p>
                    </div>
                    <div>
                      <p className="font-medium">Procedimentos:</p>
                      <p>{report.procedures}</p>
                    </div>
                    <div>
                      <p className="font-medium">Arquivos:</p>
                      <p>{report.files}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm"><Eye className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="sm"><Download className="w-4 h-4" /> PDF</Button>
                  <Button variant="ghost" size="sm"><Download className="w-4 h-4" /> WORD</Button>
                  <Button variant="ghost" size="sm"><Edit className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="sm" className="text-red-500"><Trash2 className="w-4 h-4" /></Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderIndicators = () => (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Indicadores</h1>
          <p className="text-muted-foreground">Acompanhamento de metas e performance mensal</p>
        </div>
        <select className="border rounded px-3 py-1">
          <option>Setembro</option>
        </select>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4 text-center">
          <Calendar className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Aderência ao Cronograma</p>
          <p className="text-2xl font-bold">0%</p>
          <p className="text-xs text-muted-foreground">Conforme dados inseridos</p>
        </Card>
        
        <Card className="p-4 text-center">
          <BarChart3 className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Ações Concluídas</p>
          <p className="text-2xl font-bold">100%</p>
          <p className="text-xs text-muted-foreground">Meta 80%</p>
        </Card>
        
        <Card className="p-4 text-center">
          <TrendingUp className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Meta Mensal</p>
          <p className="text-2xl font-bold">0</p>
          <p className="text-xs text-muted-foreground">Auditorias planejadas</p>
        </Card>
        
        <Card className="p-4 text-center">
          <TrendingUp className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Tendência</p>
          <p className="text-2xl font-bold">—</p>
          <p className="text-xs text-muted-foreground">Tendência mensal</p>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Status das Ações - Setembro</h3>
          <div className="flex items-center justify-center h-48">
            <div className="w-32 h-32 rounded-full bg-green-500 flex items-center justify-center">
              <div className="w-20 h-20 bg-white rounded-full"></div>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">Distribuição atual das ações cadastradas</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Aderência Mensal (%)</h3>
          <div className="h-48 flex items-end justify-center">
            <div className="text-center text-muted-foreground">
              <div className="h-32 w-full border-l border-b flex items-end">
                <div className="flex-1 text-xs">Jan</div>
                <div className="flex-1 text-xs">Fev</div>
                <div className="flex-1 text-xs">Mar</div>
                <div className="flex-1 text-xs">Abr</div>
                <div className="flex-1 text-xs">Mai</div>
                <div className="flex-1 text-xs">Jun</div>
                <div className="flex-1 text-xs">Jul</div>
                <div className="flex-1 text-xs">Ago</div>
                <div className="flex-1 text-xs">Set</div>
              </div>
              <p className="text-xs mt-2">Executado ÷ Planejado × 100</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderActions = () => (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Gerenciamento de Ações</h1>
          <p className="text-muted-foreground">Controle de ações corretivas e preventivas</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><Download className="w-4 h-4 mr-2" /> Exportar Excel</Button>
          <Button variant="outline"><Download className="w-4 h-4 mr-2" /> Gerar PDF</Button>
          <Button><Plus className="w-4 h-4 mr-2" /> Nova Ação</Button>
        </div>
      </div>
      
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Lista de Ações</h3>
        <p className="text-sm text-muted-foreground mb-4">46 de 46 ações filtradas</p>
        
        <div className="space-y-4">
          {[
            { 
              code: 'FP-SGI-35-V00 – RNC (RELATÓRIO DE NÃO CONFORMIDADE)', 
              action: 'Verificar com o...',
              sector: 'Auditoria',
              responsible: 'YAGO',
              deadline: '27/07/2025',
              status: 'Concluído',
              statusColor: 'bg-green-100 text-green-700'
            },
            {
              code: 'PG-SGI-01-V02 – REALIZAR AUDITORIA INTERNA',
              action: 'O documento tem...',
              sector: 'Auditoria',
              responsible: 'YAGO',
              deadline: '28/08/2025',
              status: 'em andamento',
              statusColor: 'bg-yellow-100 text-yellow-700'
            }
          ].map((action, index) => (
            <Card key={index} className="p-4">
              <div className="flex justify-between items-start">
                <div className="space-y-2 flex-1">
                  <h4 className="font-medium text-sm">{action.code}</h4>
                  <p className="text-sm text-muted-foreground">{action.action}</p>
                  <div className="grid grid-cols-3 gap-4 text-xs text-muted-foreground">
                    <div>
                      <span className="font-medium">Setor:</span> {action.sector}
                    </div>
                    <div>
                      <span className="font-medium">Responsável:</span> {action.responsible}
                    </div>
                    <div>
                      <span className="font-medium">Prazo:</span> {action.deadline}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded ${action.statusColor}`}>
                    {action.status}
                  </span>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm"><Eye className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="sm"><Edit className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="sm" className="text-red-500"><Trash2 className="w-4 h-4" /></Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderSchedule = () => (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Cronograma de Análises</h1>
          <p className="text-muted-foreground">Gerencie e acompanhe o cronograma de análises de processos</p>
        </div>
        <Button><Download className="w-4 h-4 mr-2" /> Exportar PDF</Button>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Aderência ao Cronograma', value: '100%', subtitle: 'Realizado / Previsto (mês selecionado)' },
          { label: 'Total de Análises', value: '6', subtitle: 'No mês selecionado' },
          { label: 'Concluídas', value: '6', subtitle: 'Análises finalizadas (mês selecionado)' },
          { label: 'Pendentes', value: '0', subtitle: 'Aguardando confirmação (mês selecionado)' }
        ].map((item, index) => (
          <Card key={index} className="p-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="text-2xl font-bold">{item.value}</p>
              <p className="text-xs text-muted-foreground">{item.subtitle}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold">📅 agosto de 2025</h3>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">‹</Button>
            <Button variant="ghost" size="sm">›</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-2 mb-4">
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
            <div key={day} className="text-center text-sm font-medium p-2">{day}</div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
            <div key={day} className="aspect-square p-1">
              <div className="h-full w-full flex flex-col items-center justify-start text-xs border rounded">
                <span className="mb-1">{day}</span>
                {day === 6 && <div className="bg-blue-500 text-white px-1 py-0.5 rounded text-xs">Garantia da qualidade</div>}
                {day === 12 && <div className="bg-blue-500 text-white px-1 py-0.5 rounded text-xs">Qualidade (CQ)</div>}
                {day === 18 && <div className="bg-blue-500 text-white px-1 py-0.5 rounded text-xs">Contas a Pagar</div>}
                {day === 21 && <div className="bg-blue-500 text-white px-1 py-0.5 rounded text-xs">Contabilidade</div>}
                {day === 26 && <div className="bg-blue-500 text-white px-1 py-0.5 rounded text-xs">Custos</div>}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="font-semibold mb-4">🕐 Próximas Análises</h3>
        <div className="text-center text-muted-foreground py-8">
          <Calendar className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <p>Nenhuma análise próxima</p>
        </div>
      </Card>
    </div>
  );

  const renderFollowUp = () => (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">FollowUp / RMI</h1>
          <p className="text-muted-foreground">Reuniões semanais (FollowUp) e mensais (RMI) baseadas em dados reais do sistema</p>
        </div>
        <select className="border rounded px-3 py-1">
          <option>Semanal</option>
        </select>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">FollowUp Semanal</h3>
          <div className="space-y-4">
            {[
              { label: 'Atividades Realizadas', value: '0', subtitle: 'Na última semana' },
              { label: 'Ações Concluídas', value: '0', subtitle: 'Total no sistema' }
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <div>
                  <p className="font-medium">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </div>
                <span className="text-2xl font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">RMI Mensal</h3>
          <div className="space-y-4">
            {[
              { label: 'Próximas ao Vencimento', value: '39', subtitle: 'Próximos 7 dias' },
              { label: 'Ações Vencidas', value: '0', subtitle: 'Requer atenção' }
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <div>
                  <p className="font-medium">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </div>
                <span className="text-2xl font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="font-semibold mb-4">📋 FollowUp Semanal - 29/08/2025 - 05/09/2025</h3>
        <div className="text-center text-muted-foreground py-8">
          <FileText className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <p>Nenhuma atividade realizada na última semana.</p>
          <p className="text-sm">Crie relatórios ou análises para visualizar dados aqui.</p>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="font-semibold mb-4">⚠️ Ações Prioritárias</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 border rounded">
            <div>
              <p className="font-medium">Atualizar documento físico</p>
              <p className="text-sm text-muted-foreground">douglas lopes - assistente de PCP - PCP</p>
              <p className="text-xs text-muted-foreground">Vencimento: 02/05/2025</p>
            </div>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Concluído</span>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderSettings = () => (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Configurações</h1>
      <p className="text-muted-foreground">Gerencie as configurações do sistema</p>
      
      <Card className="p-6">
        <h3 className="font-semibold mb-4">⚙️ Informações do Sistema</h3>
        <p className="text-sm text-muted-foreground mb-6">Sistema de Gerenciamento de Análises de Processos</p>
        
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Versão:</span>
            <span>1.0.0</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Responsável:</span>
            <span>Maurilio Cesar</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Última atualização:</span>
            <span>05/09/2025</span>
          </div>
        </div>
      </Card>

      <Card className="p-6 border-red-200">
        <h3 className="font-semibold mb-4 text-red-600">🔄 Reset do Sistema</h3>
        <p className="text-sm text-muted-foreground mb-6">Esta ação irá apagar permanentemente todos os dados do sistema</p>
        
        <div className="bg-red-50 p-4 rounded mb-4">
          <p className="text-sm font-medium text-red-800 mb-2">⚠️ ATENÇÃO: Esta ação é irreversível!</p>
          <ul className="text-sm text-red-700 space-y-1">
            <li>• Todos os relatórios de auditoria</li>
            <li>• Cronogramas de auditorias</li>
            <li>• Ações corretivas e preventivas</li>
            <li>• Dados de indicadores</li>
            <li>• Registros de reuniões (FollowUp/RMI)</li>
          </ul>
        </div>
        
        <p className="text-sm mb-4">Para confirmar, digite: <strong>RESETAR SISTEMA</strong></p>
        <input 
          type="text" 
          placeholder="Digite a confirmação aqui..." 
          className="w-full p-2 border rounded mb-4"
        />
        <Button variant="destructive" className="w-full">
          🗑️ Resetar Sistema
        </Button>
      </Card>
    </div>
  );

  const renderLogin = () => (
    <div className="flex items-center justify-center h-full bg-gray-50">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-2">Login</h2>
          <p className="text-muted-foreground">Entre com suas credenciais para acessar o sistema</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Usuário</label>
            <input 
              type="text" 
              className="w-full p-3 border rounded bg-blue-50" 
              value="Mauriliocesar"
              readOnly
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Senha</label>
            <div className="relative">
              <input 
                type="password" 
                className="w-full p-3 border rounded" 
                value="••••••••"
                readOnly
              />
              <Eye className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
            </div>
          </div>
          
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700"
            onClick={() => setCurrentScreen('dashboard')}
          >
            Entrar
          </Button>
        </div>
      </Card>
    </div>
  );

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'dashboard': return renderDashboard();
      case 'reports': return renderReports();
      case 'indicators': return renderIndicators();
      case 'actions': return renderActions();
      case 'schedule': return renderSchedule();
      case 'followup': return renderFollowUp();
      case 'settings': return renderSettings();
      case 'login': return renderLogin();
      default: return renderDashboard();
    }
  };

  if (currentScreen === 'login') {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-6xl h-[80vh] p-0">
          {renderLogin()}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[80vh] p-0">
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-64 bg-blue-600 text-white p-4 space-y-2">
            <div className="flex items-center gap-3 mb-8 p-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-sm">Análise de Processos</p>
                <p className="text-xs opacity-80">Sistema de Auditoria</p>
              </div>
            </div>
            
            {sidebarItems.map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentScreen(item.id)}
                  className={`w-full flex items-center gap-3 p-2 rounded transition-colors ${
                    currentScreen === item.id ? 'bg-blue-500' : 'hover:bg-blue-500/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
            
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 p-2 bg-blue-500 rounded">
                <Users className="w-4 h-4" />
                <div className="text-xs">
                  <p className="font-medium">Mauriliocesar</p>
                  <p className="opacity-80">Administrador</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full mt-2 text-white hover:bg-blue-500"
                onClick={() => setCurrentScreen('login')}
              >
                Sair
              </Button>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 overflow-auto">
            {renderCurrentScreen()}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuditSystemDemo;