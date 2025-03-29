'use client';

import { useEffect, useState } from 'react';

const phrases = [
  { area: 'Data & AI', industry: 'Pharmaceuticals' },
  { area: 'Growth', industry: 'Tourism' },
  { area: 'Design', industry: 'Irish SMBs' },
  { area: 'Strategy', industry: 'Enterprise' },
];

export function AnimatedHero() {
  const [index, setIndex] = useState(0);
  const [typedArea, setTypedArea] = useState('');
  const [typedIndustry, setTypedIndustry] = useState('');

  const { area, industry } = phrases[index];

  useEffect(() => {
    let areaIndex = 0;
    let industryIndex = 0;
    let typingTimeout;

    const typeArea = () => {
      if (areaIndex <= area.length) {
        setTypedArea(area.slice(0, areaIndex));
        areaIndex++;
        typingTimeout = setTimeout(typeArea, 60);
      } else {
        typingTimeout = setTimeout(typeIndustry, 200); // short pause before second line
      }
    };

    const typeIndustry = () => {
      if (industryIndex <= industry.length) {
        setTypedIndustry(industry.slice(0, industryIndex));
        industryIndex++;
        typingTimeout = setTimeout(typeIndustry, 60);
      } else {
        typingTimeout = setTimeout(() => {
          setIndex((prev) => (prev + 1) % phrases.length);
        }, 2000); // pause before next phrase
      }
    };

    setTypedArea('');
    setTypedIndustry('');
    typeArea();

    return () => clearTimeout(typingTimeout);
  }, [index]);

  return (
    <h2 className="text-5xl md:text-6xl font-light leading-tight min-h-[10rem] text-left">
      <div>Leaders in {typedArea}</div>
      <div>for {typedIndustry}</div>
    </h2>
  );
}