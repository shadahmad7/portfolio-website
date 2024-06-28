import { motion } from 'framer-motion';
import { LeaveCard } from '../components/LeaveCard';
import { HomeMotion } from '../common/motion/Home';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { description, resume, wrapImg, image } = HomeMotion;
  return (
    <section className="flex flex-col lg:flex-row h-full p-6 items-center min-h-[70vh]">
      <motion.div
        className="flex flex-1 flex-col space-y-6 items-center md:items-start"
        initial={description.initial}
        animate={description.animated}
        transition={description.transition}
      >
        <div className="flex gap-2 text-md lg:text-2xl font-medium font-sora">
          <span>Hi there!</span>{' '}
          <div className="ml-1 animate-waving-hand">👋</div>
        </div>
        <h1 className="text-white font-extrabold text-4xl md:text-6xl">
          Shad Ahmad
        </h1>
        <h2 className="text-teal-500 font-bold text-xl md:text-3xl">
          Software Engineer
        </h2>
        <p className="text-center md:text-start text-xs md:text-base">
        Experienced Full Stack Developer with expertise in React Native, React Js, Next Js, Node Js, Nest Js, Redux, Material UI, HTML, CSS, JavaScript, TypeScript, MySQL, MongoDB, Tailwind CSS, and version control with Git, Gitlab and GitHub. Proficient in cloud platforms such as Azure and AWS. Passionate about creating responsive and visually appealing web applications.
        </p>
        <Link to="./shad_react_developer_3yrs.pdf" target="_blank">
          <motion.div
            initial={resume.initial}
            animate={resume.animated}
            transition={resume.transition}
            className="rounded-3xl w-max border px-4 py-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-black hover:border-teal-500"
          >
            Download Resume
          </motion.div>
        </Link>
      </motion.div>
      <motion.div
        initial={wrapImg.initial}
        animate={wrapImg.animated}
        transition={wrapImg.transition}
        className="flex flex-1 items-center justify-center bg-gradient-to-bl from-emerald-500 via-emerald-900 to-black overflow-hidden"
      >
        <motion.img
          initial={image.initial}
          animate={image.animated}
          transition={image.transition}
          src="/profile-pic.png"
          alt="profile"
          width="100%"
          height="100%"
        />
      </motion.div>

      {/* <LeaveCard label="Frontend Dev" /> */}
    </section>
  );
};
