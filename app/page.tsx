'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  BookOpenIcon,
  ChartBarIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  PuzzlePieceIcon,
  DocumentDuplicateIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import FeatureCard from './components/FeatureCard';

const features = [
  {
    name: 'Smart Summary',
    description: 'Get intelligent summaries of your study materials with our advanced AI technology.',
    icon: DocumentTextIcon,
    slug: 'smart-summary',
  },
  {
    name: 'Difficulty Score Analyzer',
    description: 'Understand the complexity of your study materials with our sophisticated scoring system.',
    icon: ChartBarIcon,
    slug: 'difficulty-analyzer',
  },
  {
    name: 'Knowledge Dependency Check',
    description: 'Identify prerequisites and build a solid foundation for your studies.',
    icon: PuzzlePieceIcon,
    slug: 'knowledge-dependency',
  },
  {
    name: 'GAP Analysis',
    description: 'Discover and bridge knowledge gaps in your learning journey.',
    icon: ClipboardDocumentListIcon,
    slug: 'gap-analysis',
  },
  {
    name: 'Study Archive',
    description: 'Organize and analyze your study materials with advanced metrics and pattern detection.',
    icon: BookOpenIcon,
    slug: 'study-archive',
  },
  {
    name: 'Flash Card Generator',
    description: 'Create effective study cards automatically from your materials.',
    icon: DocumentDuplicateIcon,
    slug: 'flash-cards',
  },
  {
    name: 'PDF Tools Suite',
    description: 'Complete toolkit for all your PDF needs - convert, split, edit, and more.',
    icon: DocumentTextIcon,
    slug: 'pdf-tools',
  },
  {
    name: 'Exam Mode',
    description: 'Get personalized study plans and exam preparation strategies.',
    icon: AcademicCapIcon,
    slug: 'exam-mode',
  },
];

const quotes = [
  {
    text: "By failing to prepare, you are preparing to fail.",
    author: "Benjamin Franklin"
  },
  {
    text: "For every minute spent organizing, an hour is earned.",
    author: "Benjamin Franklin"
  },
  {
    text: "Success is the sum of small efforts, repeated day in and day out.",
    author: "Robert Collier"
  },
  {
    text: "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
    author: "Abraham Lincoln"
  }
];

function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useMotionValue({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mousePosition.get();

      particles.forEach((particle) => {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          particle.x -= Math.cos(angle) * 0.5;
          particle.y -= Math.sin(angle) * 0.5;
        }

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.set({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [ref, inView] = useInView({ threshold: 0.1 });
  const { scrollY } = useScroll();
  
  const y1 = useSpring(useTransform(scrollY, [0, 300], [0, 100]));
  const y2 = useSpring(useTransform(scrollY, [0, 300], [0, -100]));
  const rotate = useSpring(useTransform(scrollY, [0, 300], [0, 10]));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* Custom cursor */}
      <div
        className="fixed w-8 h-8 border-2 border-white rounded-full pointer-events-none mix-blend-difference z-50 transition-transform duration-100"
        style={{
          transform: `translate(${cursorPosition.x - 16}px, ${cursorPosition.y - 16}px)`,
        }}
      />

      {/* Hero section */}
      <div className="relative min-h-screen">
        <ParticleSystem />
        
        {/* Animated background shapes */}
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
          <motion.div
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-fuchsia-600/30 via-violet-500/30 to-indigo-400/30 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <span className="font-display text-sm font-bold tracking-wider text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full inline-block mb-8">
                WELCOME TO THE FUTURE OF STUDY
              </span>
              <h1 className="font-display text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
                Master Your Studies with
                <span className="block mt-2 relative">
                  <span className="relative inline-block">
                    Note<span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-[200%_auto] animate-text-shimmer text-transparent bg-clip-text">Mate</span>
                  </span>
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Transform your learning experience with AI-powered analysis, 
                smart summaries, and comprehensive study tools.
              </p>
            </motion.div>

            <motion.div
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <a
                href="#"
                className="group relative px-8 py-4 text-white font-display font-semibold text-lg overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-[length:200%_auto] transition-all duration-300 hover:bg-[length:100%_auto] hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]"
              >
                Get Started Free
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white transition-all duration-300 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-teal-500 to-cyan-500">
                  Launch NoteMate →
                </span>
              </a>
              <a
                href="#features"
                className="group px-8 py-4 text-gray-300 hover:text-emerald-300 font-display font-medium text-lg flex items-center gap-2 transition-colors duration-300"
              >
                Explore Features
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {[
                { label: 'Study Time Saved', value: 'Up to 60%', description: 'Reduce your study time with AI-powered summaries' },
                { label: 'Learning Efficiency', value: '2-3x', description: 'Boost your learning speed with smart tools' },
                { label: 'Knowledge Retention', value: '90%+', description: 'Improve retention with spaced repetition' },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="relative overflow-hidden rounded-2xl border border-emerald-900/20 bg-white/5 backdrop-blur-sm px-6 py-8 group hover:bg-white/10 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 opacity-50 group-hover:opacity-60 transition-opacity duration-300" />
                  <dt className="font-display text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mb-2">{stat.value}</dt>
                  <dd className="text-white font-medium mb-2">{stat.label}</dd>
                  <p className="text-sm text-gray-400">{stat.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div id="features" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-grid-white/5 bg-grid" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-base font-semibold leading-7 text-emerald-400">Study Smarter</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to excel
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              NoteMate combines cutting-edge AI technology with proven study methods to help you achieve your academic goals.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300 border border-emerald-900/20">
                    <dt className="text-base font-semibold leading-7 text-white">
                      <div className="absolute left-4 top-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:from-teal-500 group-hover:to-cyan-500 transition-colors duration-300">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <div className="ml-16">{feature.name}</div>
                    </dt>
                    <dd className="mt-2 ml-16 text-base leading-7 text-gray-400">{feature.description}</dd>
                  </div>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Quotes section */}
      <div className="relative py-24 sm:py-32 bg-gradient-to-b from-gray-900 via-emerald-900/20 to-black">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5" />
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-emerald-400">Words of Wisdom</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The Power of Organized Study
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Throughout history, great minds have emphasized the importance of preparation and organization in learning.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-x-12">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className="relative p-10 bg-gray-900/50 backdrop-blur-lg rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-emerald-900/20 hover:shadow-[0_0_50px_rgba(16,185,129,0.1)] hover:scale-[1.02] transition-all duration-300"
              >
                <div className="absolute -top-6 -left-6 h-12 w-12 bg-gradient-to-r from-emerald-500 to-teal-500 text-white flex items-center justify-center rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.3)] transform -rotate-6">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="relative">
                  <p className="text-xl font-medium leading-8 text-white mb-4">"{quote.text}"</p>
                  <div className="flex items-center">
                    <div className="h-px flex-1 bg-emerald-900/30" />
                    <p className="px-4 text-base font-semibold text-emerald-400">- {quote.author}</p>
                    <div className="h-px flex-1 bg-emerald-900/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 