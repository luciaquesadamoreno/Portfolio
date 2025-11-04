import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Mail, User, FileText, Send } from 'lucide-react';
import { toast } from 'sonner';

interface ContactFormData {
  nombre: string;
  apellidos: string;
  correo: string;
  asunto: string;
  mensaje: string;
}

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
  
    try {
      const form = new FormData();
      form.append("email", data.correo);
      form.append("nombre", data.nombre);
      form.append("apellidos", data.apellidos);
      form.append("asunto", data.asunto);
      form.append("mensaje", data.mensaje);
      // Aquí se puede integrar con un servicio de envío de emails como:
      // - Formspree (https://formspree.io)
      // - EmailJS (https://www.emailjs.com)
      // - Web3Forms (https://web3forms.com)
      
      // Para producción, reemplaza esto con una llamada a tu servicio de email preferido:
        const res = await fetch('https://formspree.io/f/mjkpqday', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(data),
      });

      const payload = await res.json().catch(() => ({}));

      if (!res.ok || (payload && payload.errors)) {
        console.error("Formspree error:", res.status, payload);
        throw new Error(
          payload?.errors?.map((e: any) => e.message).join(", ") ||
          `Error ${res.status}`
        );
      }
    } catch (error) {
      toast.error('Error al enviar', {
        description: 'Ha ocurrido un error. Por favor, inténtalo de nuevo.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="mb-4">Contacto</h1>
          <p className="text-slate-600">
            ¿Tienes alguna pregunta o propuesta? Estaré encantada de escucharte
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Envíame un mensaje</CardTitle>
            <CardDescription>
              Completa el formulario y me pondré en contacto contigo lo antes posible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" action="https://formspree.io/f/mjkpqday" method="POST" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre">
                    <User className="w-4 h-4 inline mr-2" />
                    Nombre
                  </Label>
                  <Input
                    id="nombre"
                    placeholder="Tu nombre"
                    {...register('nombre', { 
                      required: 'El nombre es obligatorio',
                      minLength: {
                        value: 2,
                        message: 'El nombre debe tener al menos 2 caracteres'
                      }
                    })}
                  />
                  {errors.nombre && (
                    <p className="text-sm text-red-600">{errors.nombre.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="apellidos">Apellidos</Label>
                  <Input
                    id="apellidos"
                    placeholder="Tus apellidos"
                    {...register('apellidos', { 
                      required: 'Los apellidos son obligatorios',
                      minLength: {
                        value: 2,
                        message: 'Los apellidos deben tener al menos 2 caracteres'
                      }
                    })}
                  />
                  {errors.apellidos && (
                    <p className="text-sm text-red-600">{errors.apellidos.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="correo">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Correo electrónico
                </Label>
                <Input
                  id="correo"
                  type="email"
                  placeholder="tu.email@ejemplo.com"
                  {...register('correo', { 
                    required: 'El correo es obligatorio',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Correo electrónico inválido'
                    }
                  })}
                />
                {errors.correo && (
                  <p className="text-sm text-red-600">{errors.correo.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="asunto">
                  <FileText className="w-4 h-4 inline mr-2" />
                  Asunto
                </Label>
                <Input
                  id="asunto"
                  placeholder="¿Sobre qué quieres hablar?"
                  {...register('asunto', { 
                    required: 'El asunto es obligatorio',
                    minLength: {
                      value: 5,
                      message: 'El asunto debe tener al menos 5 caracteres'
                    }
                  })}
                />
                {errors.asunto && (
                  <p className="text-sm text-red-600">{errors.asunto.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea
                  id="mensaje"
                  placeholder="Escribe tu mensaje aquí..."
                  rows={6}
                  {...register('mensaje', { 
                    required: 'El mensaje es obligatorio',
                    minLength: {
                      value: 10,
                      message: 'El mensaje debe tener al menos 10 caracteres'
                    }
                  })}
                />
                {errors.mensaje && (
                  <p className="text-sm text-red-600">{errors.mensaje.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar mensaje
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 p-6 bg-slate-50 rounded-lg">
          <h3 className="mb-4">Otras formas de contacto</h3>
          <div className="space-y-2 text-slate-600">
            <p>
              <Mail className="w-4 h-4 inline mr-2" />
              Email: <a href="mailto:luciaqm2003@gmail.com" className="text-blue-600 hover:underline">luciaqm2003@gmail.com</a>
            </p>
            <p className="text-sm">
              También puedes encontrarme en mis redes sociales en el footer de la página.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
