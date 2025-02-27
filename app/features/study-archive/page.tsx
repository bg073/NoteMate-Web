'use client';

import React from 'react';
import FeatureLayout from '../../components/FeatureLayout';
import { motion } from 'framer-motion';
import { BookOpenIcon, ChartBarIcon, FolderIcon, SignalIcon } from '@heroicons/react/24/outline';

const benefits = [
  {
    name: 'Smart Organization',
    description: 'Automatically categorize and organize your study materials for easy access and review.',
    icon: FolderIcon,
  },
  {
    name: 'Study Analytics',
    description: 'Track your study patterns, focus levels, and learning progress over time.',
    icon: ChartBarIcon,
  },
  {
    name: 'Pattern Detection',
    description: 'Identify effective study habits and optimize your learning approach.',
    icon: SignalIcon,
  },
  {
    name: 'Comprehensive Library',
    description: 'Build a personal knowledge base with all your study materials and insights.',
    icon: BookOpenIcon,
  },
];

export default function StudyArchivePage() {
  return (
    <FeatureLayout
      title="Study Archive"
      description="Your intelligent study library that learns and grows with you."
    >
      <div className="space-y-16">
        {/* How it works section */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">How it works</h2>
          <div className="mt-6 text-lg text-gray-600 space-y-6">
            <p>
              The Study Archive is your personal knowledge repository that intelligently organizes all your study 
              materials and analysis results. It uses advanced AI to track your learning patterns, measure focus 
              levels, and provide insights into your study habits.
            </p>
            <p>
              As you use NoteMate, the archive grows smarter, learning from your study patterns and preferences 
              to provide increasingly personalized recommendations and insights.
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

        {/* Archive Features */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Archive Features</h2>
          <div className="mt-6 space-y-4 text-gray-600">
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-900">Smart Organization</h3>
              <p className="mt-2">
                Automatically categorize and tag your study materials based on content, subject matter, and 
                difficulty level. Create custom collections and study sets for different courses or topics.
              </p>
            </div>
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-900">Study Analytics</h3>
              <p className="mt-2">
                Get detailed insights into your study patterns, including focus metrics, optimal study times, 
                and progress tracking across different subjects and topics.
              </p>
            </div>
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-900">Revision Assistant</h3>
              <p className="mt-2">
                Smart reminders for revision based on your learning patterns and the difficulty of materials. 
                Receive suggestions for what to review and when to maximize retention.
              </p>
            </div>
          </div>
        </section>
      </div>
    </FeatureLayout>
  );
} 