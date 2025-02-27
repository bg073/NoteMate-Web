'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { ComponentType, SVGProps } from 'react';

interface FeatureCardProps {
  name: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  slug: string;
}

export default function FeatureCard({ name, description, icon: Icon, slug }: FeatureCardProps) {
  return (
    <Link href={`/features/${slug}`}>
      <motion.div
        className="relative pl-16 p-6 rounded-xl transition-all duration-300 hover:bg-primary-50 cursor-pointer group"
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <dt className="text-base font-semibold leading-7 text-gray-900">
          <div className="absolute left-4 top-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 group-hover:bg-primary-700 transition-colors duration-300">
            <Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          {name}
        </dt>
        <dd className="mt-2 text-base leading-7 text-gray-600">{description}</dd>
        <div className="mt-4 flex items-center text-primary-600 group-hover:text-primary-700">
          <span className="text-sm font-medium">Learn more</span>
          <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </motion.div>
    </Link>
  );
} 