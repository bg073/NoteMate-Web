'use client';

import React from 'react';
import FeatureLayout from '../../components/FeatureLayout';
import { motion } from 'framer-motion';
import { AcademicCapIcon, ChartBarIcon, ClockIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const benefits = [
  {
    name: 'Smart Study Planning',
    description: 'Get AI-generated study plans based on your exam schedule and material complexity.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Progress Tracking',
    description: 'Monitor your preparation progress and identify areas needing more attention.',
    icon: ChartBarIcon,
  },
  {
    name: 'Time Management',
    description: 'Optimize your study schedule with intelligent time allocation suggestions.',
    icon: ClockIcon,
  },
  {
    name: 'Personalized Tips',
    description: 'Receive customized study strategies based on your learning style and material difficulty.',
    icon: LightBulbIcon,
  },
];

export default function ExamModePage() {
  return (
    <FeatureLayout
      title="Exam Mode"
      description="Optimize your exam preparation with personalized study plans and intelligent strategies."
    >
      <div className="space-y-16">
        {/* How it works section */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">How it works</h2>
          <div className="mt-6 text-lg text-gray-600 space-y-6">
            <p>
              Exam Mode analyzes your study materials, learning patterns, and exam requirements to create 
              personalized study plans. It uses AI to understand the complexity of different topics and 
              your current knowledge level to suggest the most effective preparation strategy.
            </p>
            <p>
              The system adapts to your progress, adjusting recommendations and study plans to ensure you're 
              always focusing on the most important areas and using your study time effectively.
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

        {/* Key Features */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Key Features</h2>
          <div className="mt-6 space-y-4 text-gray-600">
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-900">Intelligent Planning</h3>
              <p className="mt-2">
                Get customized study schedules that balance topic difficulty, your available time, and exam 
                requirements. The system suggests optimal study sessions and break times.
              </p>
            </div>
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-900">Performance Analytics</h3>
              <p className="mt-2">
                Track your progress with detailed analytics showing your understanding of different topics, 
                time spent studying, and areas needing improvement.
              </p>
            </div>
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-900">Practice Tests</h3>
              <p className="mt-2">
                Generate practice questions and mock tests based on your study materials. Get instant feedback 
                and detailed explanations to strengthen your understanding.
              </p>
            </div>
          </div>
        </section>
      </div>
    </FeatureLayout>
  );
} 