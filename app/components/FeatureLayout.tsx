'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

interface FeatureLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function FeatureLayout({ title, description, children }: FeatureLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-primary-600">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <Link href="/" className="inline-flex items-center text-white hover:text-primary-100 mb-8">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{title}</h1>
            <p className="mt-6 text-lg leading-8 text-primary-100">{description}</p>
          </motion.div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
} 