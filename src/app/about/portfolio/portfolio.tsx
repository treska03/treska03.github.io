import React from 'react';
import Link from 'next/link';
import { PERSONAL_LINKS } from '@/constants/links';
import ProjectList from './project_list';
import { projects } from './data';

export default function Portfolio() {
  return (
    <section className="py-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        My Portfolio
      </h1>

      <div className="space-y-4 mb-8">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Here you'll find my CV, professional profiles, and some of the projects I'm most proud of.
        </p>
        <div className="flex flex-wrap items-center space-x-4">
          <Link
            href={PERSONAL_LINKS.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline"
          >
            View my CV
          </Link>
          <Link
            href={PERSONAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline"
          >
            LinkedIn
          </Link>
          <Link
            href={PERSONAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline"
          >
            GitHub
          </Link>
        </div>
      </div>
      <ProjectList projects={projects}/>
    </section>
  );
}