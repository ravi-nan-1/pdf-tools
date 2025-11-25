import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, Star, Zap, Gem } from "lucide-react";

export function SeoContent() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 space-y-12 text-lg leading-relaxed">
      
      <section>
        <h2 className="text-3xl font-bold mb-4">How Does PDF to Word Conversion Work?</h2>
        <p className="mb-4">Our online converter uses advanced algorithms to produce highly accurate DOCX files. Here’s how the process works:</p>
        <ol className="list-decimal list-inside space-y-2">
            <li><strong>Structural Analysis</strong>: The converter scans your PDF and detects: text blocks, fonts and formatting, images, tables, headers and footers, and page layout.</li>
            <li><strong>Content Extraction</strong>: The system extracts text, images, lists, and objects while preserving: font size, colors, bold/italic styles, and paragraph alignment.</li>
            <li><strong>OCR for Scanned PDFs (Image PDFs)</strong>: If your PDF is scanned, our OCR (Optical Character Recognition) engine detects text inside images and converts it into editable Word text. This works great for photocopies, mobile-scanned documents, and old printed pages.</li>
            <li><strong>Word Reconstruction</strong>: Finally, your document is rebuilt into an editable .docx file, closely matching the formatting of the original PDF.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Features & Benefits</h2>
        <ul className="space-y-4">
            <li className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-2 mt-1 shrink-0" /> <div><strong>High-Accuracy Conversion:</strong> Preserves layout, text, images, tables, spacing, lists, and overall structure.</div></li>
            <li className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-2 mt-1 shrink-0" /> <div><strong>Free OCR PDF to Word:</strong> Convert scanned PDFs to editable text without paying for premium tools.</div></li>
            <li className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-2 mt-1 shrink-0" /> <div><strong>No Registration Required:</strong> Use the converter instantly — no email, no login.</div></li>
            <li className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-2 mt-1 shrink-0" /> <div><strong>100% Free and Unlimited:</strong> Convert as many PDFs as you want with no daily limits.</div></li>
            <li className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-2 mt-1 shrink-0" /> <div><strong>No Watermarks:</strong> Your converted Word file has no watermarks, no branding, and no restrictions.</div></li>
            <li className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-2 mt-1 shrink-0" /> <div><strong>Private & Secure:</strong> Your files are protected with SSL encryption, automatically deleted after one hour, and never stored or shared.</div></li>
            <li className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-2 mt-1 shrink-0" /> <div><strong>Works on All Devices:</strong> Use it on Windows, macOS, iPhone, Android, and Linux.</div></li>
            <li className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-2 mt-1 shrink-0" /> <div><strong>Generous File Size Limit:</strong> You can convert PDF files up to 50MB instantly. Larger PDFs are also supported but may take longer.</div></li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Supported Formats & Use Cases</h2>
        <p>Our tool supports various file types and user needs:</p>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
            <div>
                <h3 className="font-bold text-xl mb-2">For Students</h3>
                <p>Convert: Lecture notes, Textbook PDFs, Study materials, Research papers.</p>
            </div>
            <div>
                <h3 className="font-bold text-xl mb-2">For Office Professionals</h3>
                <p>Edit: Contracts, Reports, Invoices, Manuals, Client proposals.</p>
            </div>
            <div>
                <h3 className="font-bold text-xl mb-2">For Freelancers</h3>
                <p>Use it to: Extract text, Edit client documents, Reformat PDFs into Word.</p>
            </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">How to Convert PDF to Word (Step-by-Step)</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Click <strong>Upload</strong> or drag-and-drop your PDF.</li>
          <li>Wait a few seconds while the tool converts your file.</li>
          <li>Download the Word (.docx) file instantly.</li>
        </ol>
        <p className="mt-2 font-semibold">That’s it — fast, simple, and free.</p>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold mb-4">Why Choose Our PDF to Word Converter?</h2>
         <p className="mb-4">Our converter stands out for speed, security, and high-conversion accuracy — without registration or fees.</p>
         <ComparisonTable />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions (FAQ)</h2>
        <FaqAccordion />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
        <p>
          Our free PDF to Word converter provides fast, accurate, and secure document conversions without signups or limits. Whether you're a student, professional, or freelancer, you can convert PDFs to DOCX online instantly—anytime, on any device.
        </p>
      </section>
    </div>
  );
}

const ComparisonTable = () => (
    <div className="overflow-x-auto">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Feature</TableHead>
                    <TableHead>PDF2Word</TableHead>
                    <TableHead>Other PDF Tools</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Cost</TableCell>
                    <TableCell className="text-green-600 font-semibold">Free Forever</TableCell>
                    <TableCell>Paid plans or limits</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Registration</TableCell>
                    <TableCell className="text-green-600 font-semibold">Not Required</TableCell>
                    <TableCell>Email required</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>File Security</TableCell>
                    <TableCell className="text-green-600 font-semibold">Auto-delete in 1 hour</TableCell>
                    <TableCell>Often stored</TableCell>
                </TableRow>
                 <TableRow>
                    <TableCell>Conversion Limits</TableCell>
                    <TableCell className="text-green-600 font-semibold">Unlimited</TableCell>
                    <TableCell>1–2/day</TableCell>
                </TableRow>
                 <TableRow>
                    <TableCell>OCR Support</TableCell>
                    <TableCell className="text-green-600 font-semibold">Included Free</TableCell>
                    <TableCell>Paid upgrade</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
);

const FaqAccordion = () => {
    const faqs = [
        {
            question: "Is this PDF to Word converter free to use?",
            answer: "Yes, our online PDF to Word converter is completely free. There are no hidden charges, and you can convert as many files as you need without any limits."
        },
        {
            question: "Do I need to sign up or provide an email?",
            answer: "No, you do not need to sign up or provide any personal information. We believe in providing a hassle-free experience, allowing you to convert your files instantly and anonymously."
        },
        {
            question: "How secure are my files?",
            answer: "Your security is our top priority. We use AES-256 bit encryption to secure your files during upload and conversion. Furthermore, we automatically delete all files from our servers 60 minutes after conversion, ensuring your data remains private."
        },
        {
            question: "Will the formatting of my document be preserved?",
            answer: "Our converter uses advanced technology to maintain the original formatting, including text, images, lists, and tables, as accurately as possible. While complex layouts may see minor variations, we strive for a near-perfect conversion every time."
        },
        {
            question: "Can I convert scanned PDF files?",
            answer: "Yes, our tool is equipped with Optical Character Recognition (OCR) technology, allowing you to convert scanned PDFs into editable Word documents. The accuracy of the OCR depends on the quality of the scanned document."
        },
        {
            question: "What file formats do you support?",
            answer: "We support the most common document formats. For PDF to Word conversion, we accept .pdf files and convert them to .docx. For Word to PDF, we accept .doc and .docx files and convert them to .pdf."
        },
        {
            question: "Is there a limit on the file size?",
            answer: "For optimal performance, we recommend uploading files up to 50 MB. While our system can handle larger files, processing times may be longer."
        },
        {
            question: "Can I use this tool on my mobile device?",
            answer: "Absolutely. Our website is fully responsive and works on all devices, including desktops, tablets, and smartphones. You can convert files on the go, anytime, anywhere."
        },
        {
            question: "What happens to my uploaded files?",
            answer: "Your privacy is paramount. All uploaded files are automatically and permanently deleted from our servers one hour after processing. We do not store or share your data."
        },
        {
            question: "Why should I choose your converter over others?",
            answer: "Our converter stands out for its combination of speed, security, and high-quality results—all for free and without requiring registration. We provide a seamless, user-friendly experience focused on protecting your privacy while delivering professional-grade conversions."
        }
    ];

    return (
        <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-base">
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};
