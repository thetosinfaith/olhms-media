import Hero from '../assets/hero.png'

import React from 'react';
import { WorkCard } from './WorkCard'; 

interface WorkItem {
  id: number;
  imageUrl: string;
  altText: string;
}

const recentWorks: WorkItem[] = [
  { id: 1, imageUrl: Hero, altText: 'People outside a building' },
  { id: 2, imageUrl: '/assets/work2.jpg', altText: 'Person with a lantern on horseback' },
  { id: 3, imageUrl: '/assets/work3.jpg', altText: 'Man looking directly at camera' },
  { id: 4, imageUrl: '/assets/work4.jpg', altText: 'Man in a denim shirt with a backpack' },
];

export const RecentWorkSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Recent Work</h2>
        <a href="#view-all" className="text-gray-700 font-medium flex items-center hover:text-gray-900 transition-colors duration-200">
          View All Work <span className="ml-2">→</span>
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
        {recentWorks.map((work, index) => (
          <WorkCard key={work.id} item={work} index={index} />
        ))}
      </div>
    </section>
  );
};