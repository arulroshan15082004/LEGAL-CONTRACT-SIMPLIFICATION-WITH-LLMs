export interface LegalDocument {
  id: string;
  title: string;
  originalText: string;
  simplifiedText: string;
  dateProcessed: Date;
  readabilityScore: {
    original: number;
    simplified: number;
  };
  complexityScore: {
    original: number;
    simplified: number;
  };
}

export interface TermDefinition {
  term: string;
  definition: string;
  category: 'contract' | 'litigation' | 'corporate' | 'property' | 'general';
}

export interface DatasetEntry {
  id: string;
  category: string;
  originalText: string;
  simplifiedText: string;
  tags: string[];
}