'use client';

import React from 'react';
import FeatureLayout from '../../components/FeatureLayout';
import { motion } from 'framer-motion';
import { PuzzlePieceIcon, AcademicCapIcon, ArrowsPointingOutIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const benefits = [
  {
    name: 'Prerequisite Mapping',
    description: 'Automatically identifies and maps out all prerequisite concepts needed to understand your study material.',
    icon: PuzzlePieceIcon,
  },
  {
    name: 'Knowledge Graph',
    description: 'Visualizes connections between concepts to help you understand learning dependencies.',
    icon: ArrowsPointingOutIcon,
  },
  {
    name: 'Readiness Assessment',
    description: 'Evaluates your current knowledge level against required prerequisites.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Learning Path Creation',
    description: 'Generates a structured learning path that ensures you build a solid foundation.',
    icon: AcademicCapIcon,
  },
];

export default function KnowledgeDependencyPage() {
  return (
    <FeatureLayout
      title="Knowledge Dependency Check"
      description="Build a solid foundation by understanding and mastering prerequisite concepts."
    >
      <div className="space-y-16">
        {/* How it works section */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">How it works</h2>
          <div className="mt-6 text-lg text-gray-600 space-y-6">
            <p>
              The Knowledge Dependency Check system uses advanced AI to analyze your study materials and create a 
              comprehensive map of concepts and their relationships. It identifies what you need to know before 
              tackling more advanced topics, ensuring you build knowledge systematically.
            </p>
            <p>
              By understanding these dependencies, you can avoid knowledge gaps and ensure you're well-prepared 
              for each new learning challenge. The system also helps you identify which prerequisites you've already 
              mastered and which ones need attention.
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

        {/* Features in Action */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Features in Action</h2>
          <div className="mt-6 space-y-4 text-gray-600">
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-900">Concept Mapping</h3>
              <p className="mt-2">
                Our system creates detailed concept maps showing how different topics are connected and which concepts 
                are foundational to understanding others.
              </p>
            </div>
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-900">Knowledge Assessment</h3>
              <p className="mt-2">
                Take quick assessments to determine your current knowledge level and identify areas where you need 
                to strengthen your understanding.
              </p>
            </div>
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-900">Personalized Learning Plans</h3>
              <p className="mt-2">
                Receive customized study plans that ensure you cover prerequisite material in the most efficient order, 
                maximizing your learning effectiveness.
              </p>
            </div>
          </div>
        </section>
      </div>
    </FeatureLayout>
  );
} 