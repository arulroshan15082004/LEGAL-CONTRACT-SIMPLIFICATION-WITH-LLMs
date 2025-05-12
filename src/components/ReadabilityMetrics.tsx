import React from 'react';
import { BarChart, PieChart, TrendingUp, TrendingDown } from 'lucide-react';

interface ReadabilityMetricsProps {
  originalScore: number;
  simplifiedScore: number;
  complexityReduction: number;
  wordCountReduction: number;
}

const ReadabilityMetrics: React.FC<ReadabilityMetricsProps> = ({
  originalScore,
  simplifiedScore,
  complexityReduction,
  wordCountReduction
}) => {
  // Calculate improvement percentage
  const readabilityImprovement = ((simplifiedScore - originalScore) / originalScore) * 100;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-lg font-semibold text-[#2C3E50] mb-4 flex items-center">
        <BarChart size={20} className="mr-2 text-[#E6B31E]" />
        Readability Metrics
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500 mb-1">Original Readability</div>
          <div className="flex items-end">
            <span className="text-2xl font-semibold text-[#2C3E50]">{originalScore.toFixed(1)}</span>
            <span className="text-sm text-gray-500 ml-1">/ 100</span>
          </div>
          <div className="mt-2 text-xs">
            {originalScore < 30 ? 'Very Complex' : 
             originalScore < 50 ? 'Complex' : 
             originalScore < 70 ? 'Moderate' : 'Simple'}
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500 mb-1">Simplified Readability</div>
          <div className="flex items-end">
            <span className="text-2xl font-semibold text-[#2C3E50]">{simplifiedScore.toFixed(1)}</span>
            <span className="text-sm text-gray-500 ml-1">/ 100</span>
          </div>
          <div className="mt-2 text-xs">
            {simplifiedScore < 30 ? 'Very Complex' : 
             simplifiedScore < 50 ? 'Complex' : 
             simplifiedScore < 70 ? 'Moderate' : 'Simple'}
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500 mb-1">Complexity Reduction</div>
          <div className="flex items-center">
            <span className="text-2xl font-semibold text-[#2C3E50]">{complexityReduction}%</span>
            <TrendingDown size={20} className="ml-2 text-green-500" />
          </div>
          <div className="mt-2 text-xs">
            {complexityReduction < 20 ? 'Minor improvement' : 
             complexityReduction < 40 ? 'Good improvement' : 
             complexityReduction < 60 ? 'Significant improvement' : 'Major improvement'}
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500 mb-1">Word Count Reduction</div>
          <div className="flex items-center">
            <span className="text-2xl font-semibold text-[#2C3E50]">{wordCountReduction}%</span>
            <TrendingDown size={20} className="ml-2 text-green-500" />
          </div>
          <div className="mt-2 text-xs">
            {wordCountReduction < 10 ? 'Minimal reduction' : 
             wordCountReduction < 25 ? 'Moderate reduction' : 
             wordCountReduction < 40 ? 'Significant reduction' : 'Substantial reduction'}
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-[#f0f7ff] p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-medium text-[#2C3E50] flex items-center mb-2">
          <TrendingUp size={16} className="mr-1 text-blue-500" />
          Summary
        </h4>
        <p className="text-sm text-gray-600">
          The text has been simplified by reducing complexity by <strong>{complexityReduction}%</strong> and 
          word count by <strong>{wordCountReduction}%</strong>. Readability has improved 
          by <strong>{Math.abs(readabilityImprovement).toFixed(1)}%</strong>, making the document 
          significantly more accessible to non-legal readers while preserving the legal intent.
        </p>
      </div>
    </div>
  );
};

export default ReadabilityMetrics;