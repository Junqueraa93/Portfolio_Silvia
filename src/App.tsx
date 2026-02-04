import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { RecommendationSection } from './components/RecommendationSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5ebf1' }}>
      <Header />
      
      <main>
        <HeroSection />
        <EducationSection />
        <ProjectsSection />
        <ExperienceSection />
        <RecommendationSection />
      </main>
      
      <Footer />
    </div>
  );
}