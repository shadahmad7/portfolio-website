import { IconLeaf } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { SectionMotion } from '../common/motion/Section';

export const About = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'A short story of me';
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconLeaf />}
        label="About"
        description={sectionDescription}
      />
      <div className="flex gap-2 text-md lg:text-xl font-medium">
        <h2 className="font-semibold">Hello, I'm Shad</h2>
        <div className="ml-1 animate-waving-hand">👋</div>
      </div>
      <p>
      Experienced Full Stack Developer with expertise in React Native, React Js, Next Js, Node Js, Nest Js, Redux, Material UI, HTML, CSS, JavaScript, TypeScript, MySQL, MongoDB, Tailwind CSS, and version control with Git, Gitlab and GitHub. Proficient in cloud platforms such as Azure and AWS. Passionate about creating responsive and visually appealing web applications.
      </p>
      <p>
      I love exploring new technology and am curious to understand how things work. I am ready to face challenges and passionate about excelling in everything I do. I look forward to collaborating with you to create great things. Thanks!
      </p>
    </motion.section>
  );
};
