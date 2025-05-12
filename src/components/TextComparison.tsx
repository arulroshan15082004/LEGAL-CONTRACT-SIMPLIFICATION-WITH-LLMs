import React, { useState, useRef } from 'react';
import { Download, Copy, Check, ExternalLink } from 'lucide-react';
import { legalTerms } from '../data/sampleDataset';

interface TextComparisonProps {
  originalText: string;
  simplifiedText: string;
}

const TextComparison: React.FC<TextComparisonProps> = ({ originalText, simplifiedText }) => {
  const [copied, setCopied] = useState<'original' | 'simplified' | null>(null);
  const [activeTerm, setActiveTerm] = useState<string | null>(null);
  const originalRef = useRef<HTMLDivElement>(null);
  const simplifiedRef = useRef<HTMLDivElement>(null);
  
  // Synchronized scrolling between panels
  const handleScroll = (source: 'original' | 'simplified', e: React.UIEvent<HTMLDivElement>) => {
    const sourceElement = e.currentTarget;
    const targetRef = source === 'original' ? simplifiedRef : originalRef;
    const targetElement = targetRef.current;
    
    if (targetElement && sourceElement) {
      const percentage = sourceElement.scrollTop / (sourceElement.scrollHeight - sourceElement.clientHeight);
      
      // Only apply if the target has scrollable content
      if (targetElement.scrollHeight > targetElement.clientHeight) {
        targetElement.scrollTop = percentage * (targetElement.scrollHeight - targetElement.clientHeight);
      }
    }
  };
  
  const copyToClipboard = async (text: string, type: 'original' | 'simplified') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };
  
  const highlightLegalTerms = (text: string) => {
    // Create an array of term matches
    const termMatches: {term: string, index: number}[] = [];
    
    // Find all matches for each legal term
    Object.keys(legalTerms).forEach(term => {
      const regex = new RegExp(`\\b${term}\\b`, 'gi');
      let match;
      
      while ((match = regex.exec(text)) !== null) {
        termMatches.push({
          term,
          index: match.index
        });
      }
    });
    
    // Sort matches by their position in the text
    termMatches.sort((a, b) => a.index - b.index);
    
    // Build the highlighted text
    let lastIndex = 0;
    let result = [];
    
    for (const match of termMatches) {
      // Add the text before this match
      if (match.index > lastIndex) {
        result.push(text.substring(lastIndex, match.index));
      }
      
      // Add the highlighted term
      const matchedText = text.substring(match.index, match.index + match.term.length);
      result.push(
        <span 
          key={`term-${match.index}`}
          className="bg-yellow-100 text-yellow-800 px-1 py-0.5 rounded cursor-pointer hover:bg-yellow-200 transition-colors duration-200"
          onClick={() => setActiveTerm(match.term)}
        >
          {matchedText}
        </span>
      );
      
      lastIndex = match.index + match.term.length;
    }
    
    // Add any remaining text
    if (lastIndex < text.length) {
      result.push(text.substring(lastIndex));
    }
    
    return result;
  };
  
  const processedOriginalText = typeof originalText === 'string' 
    ? highlightLegalTerms(originalText)
    : 'No text to display';
  
  return (
    <>
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-[#2C3E50]">Document Comparison</h2>
        <div className="flex space-x-2">
          <button 
            className="bg-[#2C3E50] text-white px-3 py-1.5 rounded text-sm flex items-center hover:bg-[#1A252F] transition-colors duration-200"
          >
            <Download size={16} className="mr-1.5" />
            Export
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Original Text Panel */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg">
          <div className="bg-[#2C3E50] text-white px-4 py-3 flex justify-between items-center">
            <h3 className="font-medium">Original Legal Text</h3>
            <button 
              onClick={() => copyToClipboard(originalText, 'original')}
              className="text-white hover:text-[#E6B31E] transition-colors duration-200"
              title="Copy original text"
            >
              {copied === 'original' ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </div>
          <div 
            ref={originalRef}
            onScroll={(e) => handleScroll('original', e)}
            className="p-4 h-[400px] overflow-y-auto font-serif text-gray-800 text-sm leading-relaxed"
          >
            {processedOriginalText}
          </div>
        </div>
        
        {/* Simplified Text Panel */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg">
          <div className="bg-[#3c8dbc] text-white px-4 py-3 flex justify-between items-center">
            <h3 className="font-medium">Simplified Text</h3>
            <button 
              onClick={() => copyToClipboard(simplifiedText, 'simplified')}
              className="text-white hover:text-[#E6B31E] transition-colors duration-200"
              title="Copy simplified text"
            >
              {copied === 'simplified' ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </div>
          <div 
            ref={simplifiedRef}
            onScroll={(e) => handleScroll('simplified', e)}
            className="p-4 h-[400px] overflow-y-auto font-sans text-gray-800 text-base leading-relaxed"
          >
            {simplifiedText}
          </div>
        </div>
      </div>
      
      {/* Term Definition Popup */}
      {activeTerm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4" onClick={() => setActiveTerm(null)}>
          <div 
            className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full animate-fadeIn"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-[#2C3E50]">{activeTerm}</h3>
              <button onClick={() => setActiveTerm(null)} className="text-gray-400 hover:text-gray-600">
                ✕
              </button>
            </div>
            <p className="text-gray-700 mb-4">{legalTerms[activeTerm]}</p>
            <div className="flex justify-end">
              <a 
                href={`https://www.law.cornell.edu/wex/search/wex/${encodeURIComponent(activeTerm)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
              >
                Learn more <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TextComparison;