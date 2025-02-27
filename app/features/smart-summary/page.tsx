'use client';

import React from 'react';
import FeatureLayout from '../../components/FeatureLayout';
import { motion } from 'framer-motion';
import { DocumentTextIcon, SparklesIcon, ClockIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const benefits = [
  {
    name: 'AI-Powered Analysis',
    description: 'Our advanced AI technology analyzes your documents to extract key concepts and important information.',
    icon: SparklesIcon,
  },
  {
    name: 'Time-Saving',
    description: 'Get comprehensive summaries in seconds, saving hours of manual note-taking and review.',
    icon: ClockIcon,
  },
  {
    name: 'Smart Highlighting',
    description: 'Automatically identifies and highlights key terms, definitions, and important passages.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Customizable Detail Level',
    description: 'Adjust the summary length and detail level based on your needs and time constraints.',
    icon: ChartBarIcon,
  },
];

export default function SmartSummaryPage() {
  return (
    <FeatureLayout
      title="Smart Summary"
      description="Transform lengthy documents into clear, concise summaries while retaining all crucial information."
    >
      <div className="space-y-16">
        {/* How it works section */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">How it works</h2>
          <div className="mt-6 text-lg text-gray-600 space-y-6">
            <p>
              NoteMate's Smart Summary feature uses advanced natural language processing to analyze your study materials
              and generate comprehensive summaries. Our AI understands context, identifies key concepts, and maintains
              the logical flow of information.
            </p>
            <p>
              Whether you're studying for an exam, reviewing research papers, or trying to grasp complex topics quickly,
              Smart Summary helps you focus on what matters most.
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

        {/* Usage Examples */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Usage Examples</h2>
          <div className="mt-6 space-y-4 text-gray-600">
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-900">Study Materials</h3>
              <p className="mt-2">
                Upload your textbook chapters or lecture notes to get concise summaries that highlight key concepts,
                definitions, and important examples.
              </p>
            </div>
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-900">Research Papers</h3>
              <p className="mt-2">
                Quickly understand research papers by getting summaries that focus on methodology, findings, and conclusions.
              </p>
            </div>
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-900">Exam Preparation</h3>
              <p className="mt-2">
                Create quick review materials by summarizing your study documents, making last-minute revision more effective.
              </p>
            </div>
          </div>
        </section>
      </div>
    </FeatureLayout>
  );
} 