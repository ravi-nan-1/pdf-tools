
"use client";

import { useState, useMemo, type ChangeEvent } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { UploadCloud, FileText, FileSignature, ArrowRight, Download, X, FileImage, FileSpreadsheet } from "lucide-react";

export type ConversionType = "pdf-to-word" | "word-to-pdf" | "pdf-to-jpg" | "jpg-to-pdf" | "pdf-to-excel";
type ConversionStatus = "idle" | "uploading" | "converting" | "done" | "error";

interface FileConverterProps {
  conversionType: ConversionType;
  setConversionType: (type: ConversionType) => void;
}

export function FileConverter({ conversionType, setConversionType }: FileConverterProps) {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ConversionStatus>("idle");
  const [progress, setProgress] = useState(0);
  const [convertedFile, setConvertedFile] = useState<{ blob: Blob, name: string } | null>(null);
  const { toast } = useToast();

  const onTabChange = (value: string) => {
    setConversionType(value as ConversionType);
    resetState();
  };

  const resetState = () => {
    setFile(null);
    setStatus("idle");
    setProgress(0);
    setConvertedFile(null);
    // Also reset the file input element
    const fileInput = document.getElementById('file-upload') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const conversionInfo = useMemo(() => {
    switch (conversionType) {
      case "pdf-to-word":
        return {
          title: "PDF to Word",
          fromIcon: <FileText className="h-10 w-10 text-destructive" />,
          toIcon: <FileSignature className="h-10 w-10 text-primary" />,
          fromType: "PDF",
          toType: "Word",
          accept: "application/pdf",
        };
      case "word-to-pdf":
        return {
          title: "Word to PDF",
          fromIcon: <FileSignature className="h-10 w-10 text-primary" />,
          toIcon: <FileText className="h-10 w-10 text-destructive" />,
          fromType: "Word",
          toType: "PDF",
          accept: "application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword",
        };
      case "pdf-to-jpg":
        return {
          title: "PDF to JPG",
          fromIcon: <FileText className="h-10 w-10 text-destructive" />,
          toIcon: <FileImage className="h-10 w-10 text-primary" />,
          fromType: "PDF",
          toType: "JPG",
          accept: "application/pdf",
        };
      case "jpg-to-pdf":
        return {
          title: "JPG to PDF",
          fromIcon: <FileImage className="h-10 w-10 text-primary" />,
          toIcon: <FileText className="h-10 w-10 text-destructive" />,
          fromType: "JPG",
          toType: "PDF",
          accept: "image/jpeg",
        };
      case "pdf-to-excel":
        return {
            title: "PDF to Excel",
            fromIcon: <FileText className="h-10 w-10 text-destructive" />,
            toIcon: <FileSpreadsheet className="h-10 w-10 text-primary" />,
            fromType: "PDF",
            toType: "Excel",
            accept: "application/pdf",
        };
      default:
        return {
          title: "PDF to Word",
          fromIcon: <FileText className="h-10 w-10 text-destructive" />,
          toIcon: <FileSignature className="h-10 w-10 text-primary" />,
          fromType: "PDF",
          toType: "Word",
          accept: "application/pdf",
        };
    }
  }, [conversionType]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      const allowedTypes = conversionInfo.accept.split(',').map(t => t.trim());

      if (allowedTypes.includes(selectedFile.type)) {
        setFile(selectedFile);
        setStatus("uploading");
      } else {
        toast({
          title: "Unsupported File Format",
          description: `We don't support this file format. Please upload a ${conversionInfo.fromType} file.`,
          variant: "destructive",
        });
        e.target.value = '';
      }
    }
  };

  const handleConvert = async () => {
    if (!file) return;

    setStatus("converting");
    setProgress(0);

    const animateProgress = () => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 95) {
            clearInterval(interval);
            return 95;
          }
          return prev + 5;
        });
      }, 100);
      return interval;
    };
    const progressInterval = animateProgress();

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("conversionType", conversionType);

      const response = await fetch('/api/convert', {
        method: 'POST',
        body: formData,
      });

      clearInterval(progressInterval);
      setProgress(100);

      if (!response.ok) {
        throw new Error(`Conversion failed: ${response.statusText}`);
      }
      
      const blob = await response.blob();
      const contentDisposition = response.headers.get('content-disposition');
      let filename = "converted-file";
      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename="?(.+)"?/i);
        if (filenameMatch && filenameMatch.length > 1) {
          filename = filenameMatch[1];
        }
      }
      
      setConvertedFile({ blob, name: filename });
      setStatus("done");
      toast({
        title: "Conversion Successful!",
        description: "Your file is ready for download.",
      });

    } catch (error) {
      clearInterval(progressInterval);
      setStatus("error");
      console.error(error);
      toast({
        title: "Conversion Error",
        description: error instanceof Error ? error.message : "An unknown error occurred.",
        variant: "destructive",
      });
      // Allow user to try again
      setTimeout(() => {
        setStatus("uploading");
      }, 2000);
    }
  };

  const handleDownload = () => {
    if (!convertedFile) return;
    
    const url = URL.createObjectURL(convertedFile.blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = convertedFile.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Download Started",
      description: `Downloading ${convertedFile.name}.`,
    });
  };

  const { title, fromIcon, toIcon, fromType, toType, accept } = conversionInfo;
  
  const isTabbedTool = conversionType === 'pdf-to-word' || conversionType === 'word-to-pdf';

  return (
    <Card className="w-full max-w-2xl shadow-xl border-t-4 border-primary">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-headline">{title}</CardTitle>
        <CardDescription>The simplest way to convert your documents.</CardDescription>
      </CardHeader>
      <CardContent>
        {isTabbedTool ? (
          <Tabs value={conversionType} onValueChange={onTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="pdf-to-word">PDF to Word</TabsTrigger>
              <TabsTrigger value="word-to-pdf">Word to PDF</TabsTrigger>
            </TabsList>
            <TabsContent value={conversionType} className="pt-6">
              <FileDropZone />
            </TabsContent>
          </Tabs>
        ) : (
          <div className="pt-6">
            <FileDropZone />
          </div>
        )}
      </CardContent>
    </Card>
  );

  function FileDropZone() {
    return (
      <div className="space-y-6">
        <div className="flex justify-center items-center gap-6">
          {fromIcon}
          <ArrowRight className="h-8 w-8 text-muted-foreground" />
          {toIcon}
        </div>

        {status === "idle" || status === "uploading" ? (
          <div className="relative border-2 border-dashed border-border rounded-lg p-10 text-center hover:border-primary transition-colors group">
            <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity rounded-lg" />
            <UploadCloud className="mx-auto h-12 w-12 text-muted-foreground" />
            <p className="mt-4 font-semibold text-foreground">
              Drop your {fromType} file here
            </p>
            <p className="text-sm text-muted-foreground">or click to browse</p>
            <Input
              id="file-upload"
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileChange}
              accept={accept}
              aria-label={`Upload ${fromType} file`}
              disabled={status !== 'idle' && status !== 'uploading'}
            />
          </div>
        ) : null}

        {file && (status === "uploading" || status === "converting" || status === "done" || status === 'error') && (
          <div className="border rounded-lg p-4 flex items-center justify-between bg-secondary/50">
            <div className="flex items-center gap-3 overflow-hidden">
              {fromIcon}
              <span className="font-medium text-sm truncate">{file.name}</span>
            </div>
            <Button variant="ghost" size="icon" onClick={resetState} aria-label="Remove file">
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        {status === 'converting' && (
          <div className="space-y-2 text-center">
            <Progress value={progress} className="w-full" />
            <p className="text-sm text-muted-foreground animate-pulse">Converting... {progress}%</p>
          </div>
        )}

        {status === "uploading" && (
          <Button onClick={handleConvert} className="w-full" size="lg">
            Convert to {toType}
          </Button>
        )}

        {status === "done" && (
          <div className="grid gap-4 sm:grid-cols-2">
             <Button onClick={handleDownload} className="w-full" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download {toType}
            </Button>
            <Button onClick={() => {
              if(isTabbedTool) {
                resetState();
              } else {
                setConversionType('pdf-to-word');
                resetState();
              }
            }} className="w-full" size="lg" variant="outline">
              Convert Another File
            </Button>
          </div>
        )}
      </div>
    );
  }
}
