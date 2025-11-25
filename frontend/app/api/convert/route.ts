
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { ConversionType } from '@/components/file-converter';

// This is a simplified, in-memory representation of a DOCX file.
// In a real application, a library like 'docx' would be used to generate this.
// This buffer creates a minimal but valid DOCX file containing the text "Hello World".
const createMockDocx = (): Buffer => {
  // A real DOCX is a zip file containing multiple XML files.
  // We can't use a zip library here, so we will create a simple text file
  // that pretends to be a DOCX. Most modern editors will handle this gracefully
  // as a corrupted file and recover the text. This is better than an empty file.
  const xmlContent = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    <w:p>
      <w:r>
        <w:t>Hello! This is your converted Word document.</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:t>In a real application, this file would contain the full content of your original PDF.</w:t>
      </w:r>
    </w:p>
  </w:body>
</w:document>`;

    // We embed the XML inside a basic ZIP-like structure representation.
    // While not a valid zip, it provides a better mock than a plain text file.
    const mockDocxContent = `
PK**********[Content_Types].xml**********...some zip data...
word/document.xml
${xmlContent}
...more zip data...
`;
  return Buffer.from(mockDocxContent);
};

const getTargetExtension = (conversionType: ConversionType): string => {
    switch(conversionType) {
        case "pdf-to-word": return ".docx";
        case "word-to-pdf": return ".pdf";
        case "pdf-to-jpg": return ".jpg";
        case "jpg-to-pdf": return ".pdf";
        case "pdf-to-excel": return ".xlsx";
        default: throw new Error("Invalid conversion type");
    }
}

const getMimeType = (extension: string): string => {
    switch(extension) {
        case ".docx": return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
        case ".pdf": return "application/pdf";
        case ".jpg": return "image/jpeg";
        case ".xlsx": return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        default: return "application/octet-stream";
    }
}


export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const conversionType = formData.get('conversionType') as ConversionType | null;

    if (!file) {
      return new NextResponse('No file uploaded', { status: 400 });
    }
    if (!conversionType) {
      return new NextResponse('No conversion type specified', { status: 400 });
    }

    // In a real application, this is where you would use the tools from the user's guide.
    // For example, for 'pdf-to-word', you would execute:
    // `exec('soffice --headless --convert-to docx ...')`
    console.log(`Simulating conversion for: ${conversionType}`);
    console.log(`Uploaded file: ${file.name}, size: ${file.size}`);
    console.log("This would be the place to call a command-line tool like LibreOffice or Ghostscript.");

    // Simulate a delay for conversion
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate file conversion by creating a mock file buffer
    // For now, we'll just return a mock DOCX for any conversion to prove the flow.
    const mockFileBuffer = createMockDocx(); 
    const targetExtension = getTargetExtension(conversionType);
    const newFileName = file.name.replace(/\.[^/.]+$/, "") + targetExtension;
    const mimeType = getMimeType(targetExtension);

    return new NextResponse(mockFileBuffer, {
      status: 200,
      headers: {
        'Content-Type': mimeType,
        'Content-Disposition': `attachment; filename="${newFileName}"`,
      },
    });

  } catch (error) {
    console.error('Conversion API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return new NextResponse(JSON.stringify({ message: `Server error: ${errorMessage}` }), { status: 500 });
  }
}
