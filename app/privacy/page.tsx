'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
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
    return <div className="text-center py-10 text-white">Loading privacy policy...</div>;
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
      <style jsx global>{`
        .privacy-content {
          color: #d1d5db; /* text-gray-300 */
        }
        .privacy-content br {
          margin-bottom: 0.5rem;
        }
      `}</style>
      
      <div className="prose prose-invert max-w-none text-gray-300">
        <div className="privacy-content" dangerouslySetInnerHTML={{ __html: policyContent.title.replace(/\n/g, '<br />') }} />
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
              className="privacy-content text-gray-300"
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
  // Use motion values for smoother cursor animation
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Add spring physics for smoother movement
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update motion values directly
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* Custom cursor with optimized animation */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-white rounded-full pointer-events-none mix-blend-difference z-50"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring
        }}
      />

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