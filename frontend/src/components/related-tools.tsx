import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const tools = [
  {
    name: "PDF Splitter",
    href: "https://pdfsplitter.all2ools.com",
    description: "Split your PDF files into multiple documents."
  },
  {
    name: "Image Compressor",
    href: "https://imagecompressor.all2ools.com",
    description: "Reduce image file sizes for free."
  },
  {
    name: "More PDF Tools",
    href: "https://all2ools.com",
    description: "Explore our full suite of online tools."
  }
];

export function RelatedTools() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 border-t py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Related Tools</h2>
        <p className="text-center text-lg mb-8">To improve productivity, try our other free tools:</p>
        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link key={tool.name} href={tool.href} target="_blank" rel="noopener noreferrer" className="block hover:scale-105 transition-transform">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {tool.name}
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{tool.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
