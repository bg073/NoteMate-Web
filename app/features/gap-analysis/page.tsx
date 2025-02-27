'use client';

import React from 'react';
import FeatureLayout from '../../components/FeatureLayout';
import { motion } from 'framer-motion';
import { ClipboardDocumentListIcon, MagnifyingGlassIcon, ChartBarIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const benefits = [
  {
    name: 'Comprehensive Analysis',
    description: 'Identify knowledge gaps by comparing your current understanding with required learning objectives.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Progress Tracking',
    description: 'Monitor your learning progress and see how well you\'re closing identified knowledge gaps.',
    icon: ChartBarIcon,
  },
  {
    name: 'Smart Recommendations',
    description: 'Get personalized suggestions for study materials and resources to address specific gaps.',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Performance Optimization',
    description: 'Focus your study efforts where they\'ll have the most impact on your learning journey.',
    icon: RocketLaunchIcon,
  },
];

export default function GapAnalysisPage() {
  return (
    <FeatureLayout
      title="GAP Analysis"
      description="Identify and bridge knowledge gaps to ensure comprehensive understanding of your study material."
    >
      <div className="space-y-16">
        {/* How it works section */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">How it works</h2>
          <div className="mt-6 text-lg text-gray-600 space-y-6">
            <p>
              NoteMate's GAP Analysis tool uses sophisticated algorithms to compare your current knowledge against 
              required learning objectives. It analyzes your study patterns, assessment results, and interaction 
              with materials to identify areas where your understanding might be incomplete.
            </p>
            <p>
              The system then creates a detailed map of your knowledge gaps and provides targeted recommendations 
              for filling them, ensuring you have a complete and solid understanding of your subject matter.
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

        {/* Analysis Components */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Analysis Components</h2>
          <div className="mt-6 space-y-4 text-gray-600">
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-900">Knowledge Assessment</h3>
              <p className="mt-2">
                Regular assessments help identify areas where your understanding might be incomplete or where 
                you need additional practice.
              </p>
            </div>
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-900">Gap Visualization</h3>
              <p className="mt-2">
                Interactive visualizations help you understand where your knowledge gaps are and how they relate 
                to your overall learning objectives.
              </p>
            </div>
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-900">Resource Recommendations</h3>
              <p className="mt-2">
                Get personalized recommendations for study materials, practice exercises, and learning resources 
                specifically targeted to address your identified gaps.
              </p>
            </div>
          </div>
        </section>
      </div>
    </FeatureLayout>
  );
} 