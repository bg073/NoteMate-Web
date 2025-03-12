'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Script from 'next/script';

// This component fetches and displays the privacy policy
function PrivacyPolicyContent() {
  const [policyContent, setPolicyContent] = useState<{ title: string, sections: Array<{ title: string, content: string }> }>({
    title: '',
    sections: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPolicy() {
      try {
        const response = await fetch('/api/privacy-policy');
        const data = await response.json();
        setPolicyContent(data);
      } catch (error) {
        console.error('Error fetching privacy policy:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPolicy();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading privacy policy...</div>;
  }

  // Function to format subsection headings
  const formatContent = (content: string) => {
    // Replace subsection headings with properly formatted HTML
    return content
      .replace(/(\d+\.\d+\s+[^\n]+)/g, '<h3 class="text-xl font-medium text-emerald-400 mt-8 mb-4">$1</h3>')
      .replace(/\n/g, '<br />');
  };

  return (
    <div className="space-y-12">
      <div className="prose prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: policyContent.title.replace(/\n/g, '<br />') }} />
      </div>
      
      {policyContent.sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-white">{index + 1}. {section.title}</h2>
          <div className="prose prose-invert max-w-none">
            <div 
              dangerouslySetInnerHTML={{ 
                __html: formatContent(section.content)
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-200">
      {/* Schema.org metadata */}
      <Script id="privacy-policy-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy",
            "description": "NoteMate Privacy Policy - Learn how we protect your data and privacy.",
            "publisher": {
              "@type": "Organization",
              "name": "NoteMateX Inc.",
              "logo": {
                "@type": "ImageObject",
                "url": "https://notemate.com/logo.png"
              }
            },
            "datePublished": "2025-03-11",
            "dateModified": "2025-03-11"
          }
        `}
      </Script>
      
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="space-y-4 mb-8">
            <p className="text-emerald-400">Effective Date: March 11, 2025</p>
            <p className="text-emerald-400">Last Updated: March 11, 2025</p>
          </div>

          <PrivacyPolicyContent />
        </motion.div>
      </div>
    </div>
  );
} 