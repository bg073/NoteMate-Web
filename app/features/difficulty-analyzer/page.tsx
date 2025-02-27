'use client';

import React from 'react';
import FeatureLayout from '../../components/FeatureLayout';
import { motion } from 'framer-motion';
import { ChartBarIcon, LightBulbIcon, AcademicCapIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

const benefits = [
  {
    name: 'Intelligent Scoring',
    description: 'Advanced algorithms analyze content complexity, readability, and conceptual depth.',
    icon: ChartBarIcon,
  },
  {
    name: 'Learning Path Optimization',
    description: 'Suggests optimal study sequence based on content difficulty and your current knowledge level.',
    icon: ArrowTrendingUpIcon,
  },
  {
    name: 'Personalized Insights',
    description: 'Get detailed breakdowns of what makes content challenging and recommendations for better understanding.',
    icon: LightBulbIcon,
  },
  {
    name: 'Progress Tracking',
    description: 'Monitor your improvement as you tackle increasingly challenging materials.',
    icon: AcademicCapIcon,
  },
];

export default function DifficultyAnalyzerPage() {
  return (
    <FeatureLayout
      title="Difficulty Score Analyzer"
      description="Understand the complexity of your study materials and optimize your learning path."
    >
      <div className="space-y-16">
        {/* How it works section */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">How it works</h2>
          <div className="mt-6 text-lg text-gray-600 space-y-6">
            <p>
              The Difficulty Score Analyzer uses sophisticated algorithms to evaluate various aspects of your study materials:
              language complexity, concept density, prerequisite knowledge requirements, and more. This comprehensive
              analysis helps you understand what makes certain content challenging and how to approach it effectively.
            </p>
            <p>
              Each document receives a detailed score breakdown across multiple dimensions, helping you identify specific
              areas that might need extra attention or additional preparation.
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

        {/* Scoring Dimensions */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Scoring Dimensions</h2>
          <div className="mt-6 space-y-4 text-gray-600">
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-900">Language Complexity</h3>
              <p className="mt-2">
                Analyzes vocabulary level, sentence structure, and technical terminology density to assess readability
                and linguistic challenges.
              </p>
            </div>
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-900">Concept Density</h3>
              <p className="mt-2">
                Measures the concentration of new concepts, theories, and ideas per section to identify information-heavy
                portions that may require more focus.
              </p>
            </div>
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-900">Prerequisite Knowledge</h3>
              <p className="mt-2">
                Identifies and evaluates the required background knowledge, helping you ensure you have the necessary
                foundation before tackling new material.
              </p>
            </div>
          </div>
        </section>
      </div>
    </FeatureLayout>
  );
} 