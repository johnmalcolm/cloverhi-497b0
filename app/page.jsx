'use client';
import { AnimatedHero } from './AnimatedHero'; // or '../components/AnimatedHero'

export default function Page() {
  return (
    <div className="flex flex-col flex-grow">
      <div className="flex-grow flex items-center px-6 sm:px-12">
        <div className="max-w-5xl">
          <h1 className="text-lg font-light tracking-wide">
            Trusted partners in Digital Transformation
          </h1>
          <AnimatedHero />
        </div>
        <div className="absolute top-1/2 right-6 -translate-y-1/2 hidden md:flex flex-col items-end space-y-6 opacity-60">
            <img src="/logos/pharma.svg" alt="A&L Goodbody" className="h-6" />
            <img src="/logos/iris.svg" alt="Perfect Rewards" className="h-6" />
            <img src="/logos/startup.svg" alt="ICS Digital" className="h-6" />
            <img src="/logos/tourism.svg" alt="Aalto University" className="h-6" />
        </div>
      </div>
    </div>
  );
}