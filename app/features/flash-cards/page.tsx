'use client';

import React from 'react';
import FeatureLayout from '../../components/FeatureLayout';
import { motion } from 'framer-motion';
import { DocumentDuplicateIcon, SparklesIcon, ClockIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const benefits = [
  {
    name: 'AI-Powered Generation',
    description: 'Automatically create effective flash cards from your study materials using advanced AI.',
    icon: SparklesIcon,
  },
  {
    name: 'Time-Saving',
    description: 'Generate comprehensive flash card sets in seconds instead of hours of manual creation.',
    icon: ClockIcon,
  },
  {
    name: 'Customizable Format',
    description: 'Adjust card content, format, and difficulty to match your learning style.',
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: 'Smart Review System',
    description: 'Optimize your review sessions with spaced repetition and progress tracking.',
    icon: DocumentDuplicateIcon,
  },
];

export default function FlashCardPage() {
  return (
    <FeatureLayout
      title="Flash Card Generator"
      description="Transform your study materials into effective flash cards for optimal learning and retention."
    >
      <div className="space-y-16">
        {/* How it works section */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">How it works</h2>
          <div className="mt-6 text-lg text-gray-600 space-y-6">
            <p>
              The Flash Card Generator uses advanced natural language processing to analyze your study materials 
              and automatically create effective flash cards. It identifies key concepts, definitions, and 
              important relationships, then formats them into optimal question-answer pairs.
            </p>
            <p>
              The system also incorporates proven learning techniques like spaced repetition and active recall, 
              helping you review the cards at the most effective intervals for long-term retention.
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

        {/* Features */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Features</h2>
          <div className="mt-6 space-y-4 text-gray-600">
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-900">Smart Card Creation</h3>
              <p className="mt-2">
                Our AI analyzes your materials to create cards that focus on key concepts, definitions, 
                and relationships. It formats information in ways that promote better understanding and retention.
              </p>
            </div>
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-900">Spaced Repetition</h3>
              <p className="mt-2">
                The system tracks your performance with each card and automatically adjusts review intervals 
                to optimize long-term retention using proven spaced repetition techniques.
              </p>
            </div>
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-900">Customization Options</h3>
              <p className="mt-2">
                Customize card format, content density, and review schedules to match your learning style 
                and preferences. Add images, equations, and custom notes to your cards.
              </p>
            </div>
          </div>
        </section>
      </div>
    </FeatureLayout>
  );
} 