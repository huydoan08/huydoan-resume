'use client'

import { useState } from 'react';

/* eslint-disable react/no-unescaped-entities */
export default function About() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="About flex flex-col items-center gap-5 print:my-4">
      <h2 className="text-2xl font-bold print:hidden">About me</h2>
      <div className="flex flex-col items-center gap-4">
        <p className="text-md">
          I am a front-end developer with a passion for crafting high-quality, maintainable, and scalable software using the best tools and practices.I am adaptive and flexible either in working independently or in a close team or in multisite projects with global teams. I’m also dedicated to continuously learning new technologies and best practices to refine my skills and deliver high-quality results.
        </p>
      </div>
    </section>
  );
}
