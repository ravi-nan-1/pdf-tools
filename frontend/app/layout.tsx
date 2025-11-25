import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Free PDF to Word Converter Online | Fast & Accurate | PDF2Word',
  description:
    'Convert PDF to Word (DOCX) online for free. Fast, accurate, and secure PDF to Word converter. No sign-up required.',
  keywords: 'pdf to word, convert pdf to docx, free pdf converter, word to pdf, pdf tools, pdf to word converter no sign up, best pdf to word tool, convert scanned pdf, ocr pdf to word, convert large pdf to word, fast pdf converter, pdf editor, edit pdf in word',
  robots: 'index, follow',
  openGraph: {
    title: 'Free PDF to Word Converter Online | Fast & Accurate',
    description: 'Convert PDF to Word (DOCX) online for free. Fast, accurate and secure. No signup required.',
    url: 'https://pdf2word.all2ools.com/',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PDF2Word Converter',
      },
    ],
    siteName: 'PDF2Word',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free PDF to Word Converter Online',
    description: 'Fast, secure and accurate PDF to Word converter.',
    images: ['/og-image.png'],
  },
  metadataBase: new URL('https://pdf2word.all2ools.com'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://pdf2word.all2ools.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Free PDF to Word Converter Online",
              "description": "Convert PDF to Word (DOCX) online for free. Fast, accurate, and secure PDF to Word converter. No sign-up required.",
              "url": "https://pdf2word.all2ools.com/",
              "mainEntity": {
                "@type": "SoftwareApplication",
                "name": "PDF2Word Converter",
                "operatingSystem": "Any (Web-based)",
                "applicationCategory": "ProductivityApplication",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                },
                "featureList": [
                  "Convert PDF to Word",
                  "Convert Word to PDF",
                  "Secure file handling",
                  "No registration needed",
                  "High accuracy conversion"
                ]
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is this PDF to Word converter free to use?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, our online PDF to Word converter is completely free. There are no hidden charges, and you can convert as many files as you need without any limits."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I need to sign up or provide an email?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, you do not need to sign up or provide any personal information. We believe in providing a hassle-free experience, allowing you to convert your files instantly and anonymously."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How secure are my files?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Your security is our top priority. We use AES-256 bit encryption to secure your files during upload and conversion. Furthermore, we automatically delete all files from our servers 60 minutes after conversion, ensuring your data remains private."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Will the formatting of my document be preserved?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Our converter uses advanced technology to maintain the original formatting, including text, images, lists, and tables, as accurately as possible. While complex layouts may see minor variations, we strive for a near-perfect conversion every time."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I convert scanned PDF files?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, our tool is equipped with Optical Character Recognition (OCR) technology, allowing you to convert scanned PDFs into editable Word documents. The accuracy of the OCR depends on the quality of the scanned document."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What file formats do you support?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We support the most common document formats. For PDF to Word conversion, we accept .pdf files and convert them to .docx. For Word to PDF, we accept .doc and .docx files and convert them to .pdf."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is there a limit on the file size?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "For optimal performance, we recommend uploading files up to 50 MB. While our system can handle larger files, processing times may be longer."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I use this tool on my mobile device?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. Our website is fully responsive and works on all devices, including desktops, tablets, and smartphones. You can convert files on the go, anytime, anywhere."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens to my uploaded files?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Your privacy is paramount. All uploaded files are automatically and permanently deleted from our servers one hour after processing. We do not store or share your data."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why should I choose your converter over others?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Our converter stands out for its combination of speed, security, and high-quality results—all for free and without requiring registration. We provide a seamless, user-friendly experience focused on protecting your privacy while delivering professional-grade conversions."
                        }
                    }
                ]
            }),
          }}
        />
      </head>
      <body className="font-body">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
