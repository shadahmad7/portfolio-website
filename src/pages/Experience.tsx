import { motion } from 'framer-motion';
import { IconClockPlay } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { CommonCard } from '../components/CommonCard';

export const Experience = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'My proffesional career journey';
  // mockup experience data
  const experiences = [
    {
      id: 1,
      image: '/roshn.png',
      name: 'Roshn',
      position: 'Software Engineer I',
      startDate: 'Dec 2023',
      endDate: 'Present',
      duration: `${(new Date().getFullYear() - 2023) * 12 + new Date().getMonth() - 11} Months`,
      location: 'Remote',
    },
    {
      id: 2,
      image: '/excite-systems.png',
      name: 'Excite Systems',
      position: 'Software Engineer',
      startDate: 'Dec 2021',
      endDate: 'September 2023',
      duration: '22 Months',
      location: 'Pune, India',
    },
    {
      id: 3,
      image: '/flymingo-tech.png',
      name: 'Flymingo Tech',
      position: 'Web Developer',
      startDate: 'Mar 2021',
      endDate: 'Dec 2021',
      duration: '9 Months',
      location: 'Pune, India',
    },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconClockPlay />}
        label="Experience"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiences.map((experience) => (
          <CommonCard key={experience.id} {...experience} />
        ))}
      </div>
    </motion.section>
  );
};
