'use client';

import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  BookOpenIcon,
  ChartBarIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  PuzzlePieceIcon,
  DocumentDuplicateIcon,
  ClockIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

// Feature data
const features = [
  {
    name: 'Smart Summary',
    description: 'Get intelligent summaries of your study materials with our advanced AI technology.',
    icon: DocumentTextIcon,
    slug: 'smart-summary',
    longDescription: 'Our Smart Summary feature uses cutting-edge AI to analyze your study materials and generate concise, accurate summaries. This helps you quickly grasp key concepts and save valuable study time.',
  },
  {
    name: 'Difficulty Score Analyzer',
    description: 'Understand the complexity of your study materials with our sophisticated scoring system.',
    icon: ChartBarIcon,
    slug: 'difficulty-analyzer',
    longDescription: 'The Difficulty Score Analyzer evaluates the complexity of your study materials, helping you prioritize your study time and focus on challenging areas that need more attention.',
  },
  {
    name: 'Knowledge Dependency Check',
    description: 'Identify prerequisites and build a solid foundation for your studies.',
    icon: PuzzlePieceIcon,
    slug: 'knowledge-dependency',
    longDescription: 'Our Knowledge Dependency Check identifies prerequisite concepts you need to understand before tackling more advanced topics, ensuring you build a solid foundation for effective learning.',
  },
  {
    name: 'GAP Analysis',
    description: 'Discover and bridge knowledge gaps in your learning journey.',
    icon: ClipboardDocumentListIcon,
    slug: 'gap-analysis',
    longDescription: 'GAP Analysis identifies missing pieces in your knowledge framework, helping you target specific areas for improvement and ensuring comprehensive understanding of your subject matter.',
  },
  {
    name: 'Study Archive',
    description: 'Organize and analyze your study materials with advanced metrics and pattern detection.',
    icon: BookOpenIcon,
    slug: 'study-archive',
    longDescription: 'The Study Archive provides a centralized repository for all your study materials, with advanced organization, tagging, and search capabilities to help you quickly find what you need.',
  },
  {
    name: 'Flash Card Generator',
    description: 'Create effective study cards automatically from your materials.',
    icon: DocumentDuplicateIcon,
    slug: 'flash-cards',
    longDescription: 'Our Flash Card Generator automatically creates effective study cards from your materials, using spaced repetition algorithms to optimize your retention and learning efficiency.',
  },
  {
    name: 'PDF Tools Suite',
    description: 'Complete toolkit for all your PDF needs - convert, split, edit, and more.',
    icon: DocumentTextIcon,
    slug: 'pdf-tools',
    longDescription: 'The PDF Tools Suite offers comprehensive functionality for working with PDFs, including conversion, splitting, merging, annotation, and more, all integrated seamlessly with our other study tools.',
  },
  {
    name: 'Exam Mode',
    description: 'Get personalized study plans and exam preparation strategies.',
    icon: AcademicCapIcon,
    slug: 'exam-mode',
    longDescription: 'Exam Mode creates personalized study plans and preparation strategies based on your learning style, available time, and exam format, helping you maximize your performance when it matters most.',
  },
];

export default function FeaturePage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Find the current feature
  const feature = features.find(f => f.slug === slug);
  
  // Use motion values for smoother cursor animation
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Add spring physics for smoother movement
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update motion values directly
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  if (!feature) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Feature not found</h1>
          <Link href="/" className="text-emerald-400 hover:text-emerald-300">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  const FeatureIcon = feature.icon;

  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* Custom cursor with optimized animation */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-white rounded-full pointer-events-none mix-blend-difference z-50"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring
        }}
      />
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-emerald-600/30 via-teal-500/30 to-cyan-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:px-8">
        <Link 
          href="/#features" 
          className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-12 group"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to all features
        </Link>
        
        <div className="flex flex-col md:flex-row items-start gap-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 mb-6">
              <FeatureIcon className="h-8 w-8 text-white" aria-hidden="true" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-6">{feature.name}</h1>
            <p className="text-xl text-gray-300 mb-8">{feature.description}</p>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed">{feature.longDescription}</p>
              
              <div className="mt-12 p-6 bg-gray-900/50 backdrop-blur-lg rounded-2xl border border-emerald-900/20">
                <h2 className="text-xl font-semibold text-white mb-4">Coming Soon</h2>
                <p className="text-gray-400">
                  We're currently working on expanding this feature. Check back soon for more details and documentation.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/3 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-emerald-900/20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold text-white mb-4">Related Features</h2>
            <ul className="space-y-4">
              {features
                .filter(f => f.slug !== slug)
                .slice(0, 3)
                .map(relatedFeature => (
                  <li key={relatedFeature.slug}>
                    <Link 
                      href={`/features/${relatedFeature.slug}`}
                      className="flex items-start p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-300"
                    >
                      <relatedFeature.icon className="h-5 w-5 text-emerald-400 mt-0.5 mr-3" />
                      <div>
                        <h3 className="text-white font-medium">{relatedFeature.name}</h3>
                        <p className="text-sm text-gray-400">{relatedFeature.description}</p>
                      </div>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 