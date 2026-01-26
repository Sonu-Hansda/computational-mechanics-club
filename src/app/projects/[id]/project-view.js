'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { useEffect, useState } from 'react';

export default function ProjectView({ id }) {
    const router = useRouter();
    const [project, setProject] = useState(null);

    useEffect(() => {
        if (projects[id]) {
            setProject(projects[id]);
        }
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen bg-[#111] flex items-center justify-center text-neutral-300">
                Project Not Found
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-[#111] relative isolate py-12 md:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-[size:32px_32px] opacity-5" />

            <div className="container mx-auto px-6 lg:px-8">
                <motion.button
                    onClick={() => router.back()}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-6 inline-flex items-center gap-2 rounded-md border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-400 hover:border-[#B9FF66] hover:text-[#B9FF66] transition"
                >
                    ← Back
                </motion.button>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    <div className="lg:col-span-3">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7 }}
                            className="relative overflow-hidden rounded-xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#B9FF66]/20 to-transparent" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>
                    </div>

                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <span className="text-sm font-semibold uppercase tracking-wider text-[#B9FF66]">
                                {project.category}
                            </span>
                            <h1 className="mt-2 font-black text-3xl leading-tight text-white md:text-4xl">
                                {project.title}
                            </h1>

                            <p className="mt-6 text-neutral-300 leading-relaxed whitespace-pre-wrap">
                                {project.description}
                            </p>

                            {project.link && (
                                <motion.a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#B9FF66] px-5 py-3 font-bold text-[#111] shadow-lg hover:bg-[#B9FF66]/90 transition"
                                >
                                    Visit Project
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </motion.a>
                            )}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}