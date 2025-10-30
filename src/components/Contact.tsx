import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Initialize EmailJS with public key (if provided via env)
  useEffect(() => {
    try {
      const key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
      if (key) emailjs.init(key);
    } catch (e) {
      // ignore on server
    }
  }, []);

  // Submit handler using EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

  const serviceId = 'service_dgpdj19';
  // fallbacks: use env vars if available, otherwise use the provided keys
  const templateId = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string) || 'template_cbry756';
  const publicKey = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string) || 'DwGEdjk-5ezcBqv4J';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      reply_to: formData.email,
    };

    try {
      // ensure initialized (EmailJS requires a public key)
      try {
        emailjs.init(publicKey);
      } catch (e) {
        console.warn('EmailJS init warning', e);
      }

      console.log('EmailJS sending', { serviceId, templateId, publicKey, templateParams });
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({ title: 'Mensagem enviada!', description: 'Entrarei em contato em breve.' });
      setFormData({ name: '', email: '', message: '' });
      // redirect to thank-you page
      try { window.location.href = '/thank-you.html'; } catch (err) { /* ignore */ }
    } catch (err) {
      console.error('EmailJS error', err);
      // Try to extract useful info from the error object
      try {
        // EmailJS may return an object with status and text
        // @ts-ignore
        const status = err.status || (err && err.statusCode);
        // @ts-ignore
        const text = err.text || (err && err.response && err.response.text) || err.message;
        console.error('EmailJS error detail', { status, text });
        toast({ title: 'Erro ao enviar', description: text ? String(text).slice(0, 200) : 'Tente novamente mais tarde.' });
      } catch (e) {
        toast({ title: 'Erro ao enviar', description: 'Tente novamente mais tarde.' });
      }
    }
  };

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
              <form onSubmit={handleSubmit} className="space-y-6">
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