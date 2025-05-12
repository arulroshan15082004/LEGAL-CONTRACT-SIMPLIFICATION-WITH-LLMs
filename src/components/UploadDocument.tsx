import React, { useState } from 'react';
import { Upload, FileText, AlertCircle } from 'lucide-react';

const UploadDocument: React.FC<{
  onDocumentUpload: (text: string) => void;
}> = ({ onDocumentUpload }) => {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    setError(null);
    
    // Validate file type (simple check based on extension)
    const validTypes = ['text/plain', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      setError('Please upload a valid document (TXT, PDF, DOC, DOCX)');
      return;
    }
    
    setFileName(file.name);
    
    // For demo purposes, we're just reading text files
    // In a real app, you would use specific libraries to handle PDF, DOCX, etc.
    if (file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          onDocumentUpload(e.target.result as string);
        }
      };
      reader.readAsText(file);
    } else {
      // Simulating processing of non-text files
      setTimeout(() => {
        // In a real application, you would extract text from the file
        // Here we're just using a placeholder message
        onDocumentUpload(`This is simulated text extraction from ${file.name}. In a real application, we would use specific libraries to extract text from ${file.type} files.`);
      }, 1000);
    }
  };

  return (
    <div className="mb-8">
      <div 
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          dragActive ? 'border-[#E6B31E] bg-[#fff8e5]' : 'border-gray-300 hover:border-[#E6B31E] bg-white'
        } transition-colors duration-200`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center">
          <Upload size={48} className={`mb-4 ${dragActive ? 'text-[#E6B31E]' : 'text-gray-400'}`} />
          
          {fileName ? (
            <div className="flex items-center space-x-2 mb-4">
              <FileText size={20} className="text-[#2C3E50]" />
              <span className="font-medium text-[#2C3E50]">{fileName}</span>
            </div>
          ) : (
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Drag & drop your legal document here
            </h3>
          )}
          
          <p className="text-sm text-gray-500 mb-4">
            Supported formats: TXT, PDF, DOC, DOCX
          </p>
          
          {error && (
            <div className="flex items-center text-red-500 text-sm mb-4">
              <AlertCircle size={16} className="mr-1" />
              {error}
            </div>
          )}
          
          <div className="relative">
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileChange}
              accept=".txt,.pdf,.doc,.docx"
            />
            <button className="bg-[#2C3E50] text-white px-4 py-2 rounded hover:bg-[#1A252F] transition-colors duration-200">
              Select Document
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDocument;