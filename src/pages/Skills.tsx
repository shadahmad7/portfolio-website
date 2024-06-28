import { motion } from 'framer-motion';
import {
  IconCodeCircle,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandTypescript,
  IconBrandMongodb,
  IconBrandFirebase,
  IconBrandGit,
  IconBrandGithub,
  IconBrandGitlab,
  IconBrandAws,
  IconBrandDocker,
  IconBrandMysql,
  IconBrandBootstrap,
  IconBrandVercel,
  IconBrandAzure,
  IconBrandSentry,
  IconBrandJavascript,
  IconBrandVite,
  IconBrandStorybook,
  IconBrandReactNative,
} from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { SkillCard } from '../components/SkillCard';

export const Skills = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'List of my skills';
  // mockup skills data
  const skills = [
    { label: 'React Native', icon: <IconBrandReactNative /> },
    { label: 'React Js', icon: <IconBrandReact /> },
    { label: 'Next Js', icon: <IconBrandNextjs /> },
    { label: 'Node Js', icon: <IconBrandNodejs /> },
    { label: 'Javascript', icon: <IconBrandJavascript /> },
    { label: 'Typescript', icon: <IconBrandTypescript /> },
    { label: 'Mongo DB', icon: <IconBrandMongodb /> },
    { label: 'Tailwind CSS', icon: <IconBrandTailwind /> },
    { label: 'Firebase', icon: <IconBrandFirebase /> },
    { label: 'Git', icon: <IconBrandGit /> },
    { label: 'Github', icon: <IconBrandGithub /> },
    { label: 'Gitlab', icon: <IconBrandGitlab /> },
    { label: 'AWS', icon: <IconBrandAws /> },
    { label: 'Docker', icon: <IconBrandDocker /> },
    { label: 'mySQL', icon: <IconBrandMysql /> },
    { label: 'Bootstrap', icon: <IconBrandBootstrap /> },
    { label: 'Vercel', icon: <IconBrandVercel /> },
    { label: 'Azure', icon: <IconBrandAzure /> },
    { label: 'Sentry', icon: <IconBrandSentry /> },
    { label: 'Vite', icon: <IconBrandVite /> },
    { label: 'Storybook', icon: <IconBrandStorybook /> },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconCodeCircle />}
        label="Skills"
        description={sectionDescription}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
        {skills.map((skill) => (
          <SkillCard key={skill.label} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </motion.section>
  );
};
