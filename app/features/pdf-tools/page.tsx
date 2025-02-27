'use client';

import React from 'react';
import FeatureLayout from '../../components/FeatureLayout';
import { motion } from 'framer-motion';
import { DocumentTextIcon, ArrowsRightLeftIcon, ScissorsIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

const benefits = [
  {
    name: 'All-in-One Solution',
    description: 'Complete toolkit for all your PDF needs - convert, split, merge, and edit documents.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Format Conversion',
    description: 'Convert PDFs to and from various formats while maintaining formatting and quality.',
    icon: ArrowsRightLeftIcon,
  },
  {
    name: 'Smart Editing',
    description: 'Edit PDF content, add annotations, and make changes without losing original formatting.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Document Management',
    description: 'Split, merge, and organize your PDF documents efficiently.',
    icon: ScissorsIcon,
  },
];

export default function PdfToolsPage() {
  return (
    <FeatureLayout
      title="PDF Tools Suite"
      description="Your complete toolkit for managing, editing, and optimizing PDF documents."
    >
      <div className="space-y-16">
        {/* How it works section */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">How it works</h2>
          <div className="mt-6 text-lg text-gray-600 space-y-6">
            <p>
              The PDF Tools Suite provides a comprehensive set of tools for working with PDF documents. 
              Whether you need to convert formats, edit content, split or merge documents, or add annotations, 
              our toolkit has you covered with intuitive and powerful features.
            </p>
            <p>
              All operations maintain document quality and formatting, ensuring your study materials 
              remain clear and professional. The suite integrates seamlessly with other NoteMate features 
              for a smooth workflow.
            </p>
          </div>
        </section>

        {/* Benefits section */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Key Benefits</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.name}
                  className="relative rounded-2xl border border-gray-200 p-6"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{benefit.name}</h3>
                  </div>
                  <p className="mt-4 text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Tools and Features */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Tools and Features</h2>
          <div className="mt-6 space-y-4 text-gray-600">
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-900">Format Conversion</h3>
              <p className="mt-2">
                Convert PDFs to Word, Excel, PowerPoint, and other formats while preserving layout and formatting. 
                Convert various document types to PDF with high-quality results.
              </p>
            </div>
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-900">Document Editing</h3>
              <p className="mt-2">
                Edit text, images, and other content directly in PDF documents. Add highlights, annotations, 
                and comments. Insert, delete, or rearrange pages with ease.
              </p>
            </div>
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-900">Organization Tools</h3>
              <p className="mt-2">
                Split large PDFs into smaller documents, merge multiple PDFs into one, compress files without 
                losing quality, and organize pages efficiently.
              </p>
            </div>
          </div>
        </section>
      </div>
    </FeatureLayout>
  );
} 