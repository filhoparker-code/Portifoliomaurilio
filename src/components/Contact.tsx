import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  // Note: form will be submitted directly to Formsubmit (see form attributes below).

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Fill _next hidden input dynamically so Formsubmit redirects back to the same host
  useEffect(() => {
    try {
      const next = document.getElementById('_next') as HTMLInputElement | null;
      if (next) next.value = window.location.origin + '/thank-you.html';
    } catch (e) {
      // ignore in environments without window
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20" style={{ background: 'var(--section-contact)' }}>
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">
              Vamos <span className="text-primary">Conversar?</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Entre em contato comigo para oportunidades e projetos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <form action="https://formsubmit.co/filhocesarp@gmail.com" method="POST" className="space-y-6" onSubmit={() => {
                // ensure dynamic hidden inputs are populated right before submit
                try {
                  const next = document.getElementById('_next') as HTMLInputElement | null;
                  if (next && !next.value) next.value = window.location.origin + '/thank-you.html';
                  const reply = document.getElementById('_replyto') as HTMLInputElement | null;
                  if (reply) reply.value = formData.email || '';
                } catch (e) {
                  // ignore
                }
              }}>
                {/* Formsubmit hidden inputs: _next will be filled dynamically so it works locally and in production */}
                <input type="hidden" name="_next" id="_next" value="" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Novo contato do site" />
                <input type="hidden" name="_replyto" id="_replyto" value="" />
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Nome</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="h-12 rounded-xl border-2"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">E-mail</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu.email@exemplo.com"
                    className="h-12 rounded-xl border-2"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Mensagem</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva sua proposta, oportunidade ou dúvida..."
                    rows={6}
                    className="rounded-xl border-2"
                    required
                  />
                </div>
                
                <Button type="submit" translate="no" className="w-full bg-primary hover:bg-primary/90 text-white h-14 rounded-xl text-lg font-semibold">
                  <Send size={20} className="mr-2" />
                  Enviar
                </Button>
              </form>
            </div>

            {/* Right - Contact Info */}
            <div className="space-y-6">
              {/* Contact Cards */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center">
                    <Mail size={28} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">E-mail</p>
                    <a href="mailto:mauriliocesar.n@gmail.com" className="text-white/80 hover:text-primary transition-colors">
                      mauriliocesar.n@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center">
                    <Phone size={28} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Telefone</p>
                    <a href="tel:+5585992993933" className="text-white/80 hover:text-primary transition-colors">
                      (85) 99299-3933
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center">
                    <MapPin size={28} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Localização</p>
                    <p className="text-white/80">Fortaleza - CE, Brasil</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center">
                    <Linkedin size={28} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/maurilio-cesar-2ab94b1b9/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-primary transition-colors"
                    >
                      Perfil Profissional
                    </a>
                  </div>
                </div>
              </div>

              {/* Status card removed as requested */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;