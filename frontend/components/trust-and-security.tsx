import { ShieldCheck, Zap, BadgeDollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Secure',
    description: 'Files are processed with TLS encryption and auto-deleted after 1 hour.',
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Fast',
    description: 'Instant conversions with no queues or waiting. Get your file in seconds.',
  },
  {
    icon: <BadgeDollarSign className="h-8 w-8 text-primary" />,
    title: 'Free',
    description: 'Unlimited conversions with no watermarks or sign-ups required.',
  },
];

export function TrustAndSecurity() {
  return (
    <section className="w-full max-w-4xl mx-auto py-12 md:py-20 px-4">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col items-center">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
