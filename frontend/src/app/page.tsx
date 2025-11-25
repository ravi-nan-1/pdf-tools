
"use client";

import { FileConverter } from "@/components/file-converter";
import { Header } from "@/components/header";
import { TrustAndSecurity } from "@/components/trust-and-security";
import { SeoContent } from "@/components/seo-content";
import { RelatedTools } from "@/components/related-tools";
import Link from "next/link";
import { FeatureGrid } from "@/components/feature-grid";
import { useState, useMemo } from "react";
import type { ConversionType } from "@/components/file-converter";


export default function Home() {
  const [conversionType, setConversionType] = useState<ConversionType>("pdf-to-word");

  const pageHeadings = useMemo(() => {
    switch (conversionType) {
      case "pdf-to-word":
        return {
          title: "Free PDF to Word Converter – Fast, Accurate & No Signup",
          subtitle: "Convert PDF to Word Online (Fast & Free)"
        };
      case "word-to-pdf":
        return {
          title: "Free Word to PDF Converter – Simple & Reliable",
          subtitle: "Convert Word to PDF Online (Fast & Free)"
        };
      case "pdf-to-jpg":
        return {
          title: "Free PDF to JPG Converter – High Quality Images",
          subtitle: "Convert PDF to JPG Online (Fast & Free)"
        };
      case "jpg-to-pdf":
        return {
          title: "Free JPG to PDF Converter – Simple & Secure",
          subtitle: "Convert JPG to PDF Online (Fast & Free)"
        };
      case "pdf-to-excel":
        return {
          title: "Free PDF to Excel Converter – Accurate Data Extraction",
          subtitle: "Convert PDF to Excel Online (Fast & Free)"
        };
      default:
        return {
          title: "Free PDF to Word Converter – Fast, Accurate & No Signup",
          subtitle: "Convert PDF to Word Online (Fast & Free)"
        };
    }
  }, [conversionType]);

  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-black">
      <Header />
      <main className="flex-1 flex flex-col items-center p-4">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-center my-8">
          {pageHeadings.title}
        </h1>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mb-8">
          A PDF to Word converter is an online tool that transforms a PDF file into an editable Microsoft Word document (in .docx format). While PDFs are perfect for sharing and printing, they are difficult to edit. That’s why converting a PDF to Word is essential when you want to update information, fix formatting, or reuse content. Our free PDF to Word converter unlocks your PDF, allowing you to make changes instantly in Word, Google Docs, or any text editor.
        </p>
        <h2 className="text-3xl font-bold text-center mb-6">{pageHeadings.subtitle}</h2>
        <FileConverter conversionType={conversionType} setConversionType={setConversionType} />
        <FeatureGrid setConversionType={setConversionType} />
        <TrustAndSecurity />
        <SeoContent />
        <RelatedTools />
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground bg-slate-50 dark:bg-slate-900 border-t">
        © {new Date().getFullYear()} PDF2Word. A part of <Link href="https://www.all2ools.com/" className="underline" target="_blank" rel="noopener noreferrer">All2ools.com</Link>
      </footer>
    </div>
  );
}
