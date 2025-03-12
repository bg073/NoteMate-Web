import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Fallback privacy policy (minimal version)
const fallbackPolicy = {
  title: "Privacy Policy for NoteMateX\nEffective Date: March 11, 2025\nLast Updated: March 11, 2025",
  sections: [
    {
      title: "Introduction and Scope",
      content: "This Privacy Policy outlines how NoteMateX collects, uses, and protects your personal information. By using our application, you agree to the terms outlined in this policy."
    },
    {
      title: "Personal Data Collected",
      content: "We collect minimal data necessary to provide our services, including account information and usage statistics."
    },
    {
      title: "Contact Information",
      content: "For questions about this privacy policy, please contact us at notematexinc@gmail.com."
    }
  ]
};

export async function GET() {
  try {
    // Read the privacy policy file
    const filePath = path.join(process.cwd(), 'Privacy Policy for NoteMateX 1.0.0 .txt');
    let fileContent;
    
    try {
      fileContent = fs.readFileSync(filePath, 'utf8');
    } catch (fileError) {
      console.warn('Privacy policy file not found, using fallback:', fileError);
      return NextResponse.json(fallbackPolicy);
    }
    
    // Extract the title section (everything before the first numbered heading)
    const titleEndIndex = fileContent.indexOf('\n1. ');
    const title = titleEndIndex > 0 ? fileContent.substring(0, titleEndIndex) : 'Privacy Policy';
    
    // Extract the main content (everything after the title)
    const mainContent = titleEndIndex > 0 ? fileContent.substring(titleEndIndex) : fileContent;
    
    // Split the content by main section headings (e.g., "1. Introduction")
    const sectionRegex = /\n(\d+\.\s+[^\n]+)/g;
    const sections: Array<{ title: string, content: string }> = [];
    
    let lastIndex = 0;
    let match;
    
    while ((match = sectionRegex.exec(mainContent)) !== null) {
      const headingText = match[1].trim();
      const startIndex = match.index + match[0].length;
      
      // If this isn't the first heading, add the previous section
      if (lastIndex > 0) {
        const previousHeadingText = sections[sections.length - 1].title;
        const contentStartIndex = mainContent.indexOf('\n', lastIndex);
        const content = mainContent.substring(contentStartIndex, match.index).trim();
        sections[sections.length - 1].content = content;
      }
      
      // Add the new section with its heading
      sections.push({
        title: headingText.replace(/^\d+\.\s+/, ''),
        content: ''
      });
      
      lastIndex = startIndex;
    }
    
    // Add the content for the last section
    if (sections.length > 0) {
      const contentStartIndex = mainContent.indexOf('\n', lastIndex);
      const content = mainContent.substring(contentStartIndex).trim();
      sections[sections.length - 1].content = content;
    }
    
    // Return the processed content
    return NextResponse.json({
      title,
      sections
    });
  } catch (error) {
    console.error('Error processing privacy policy:', error);
    return NextResponse.json(fallbackPolicy);
  }
} 