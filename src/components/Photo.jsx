import { motion } from "framer-motion";
// import pngegg from "/assets/pngegg.png"; // Ensure correct path, e.g. /public/assets/pngegg.png or /src/assets

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" } }}
          className="h-[298px] w-[298px] xl:h-[498px] xl:w-[498px] mix-blend-lighten absolute"
        >
          <img src='/public/Images/self image .png' alt="" className="object-contain w-full h-full" />
        </motion.div>

        {/* animated circle */}
        <motion.svg
          className="h-[300px] w-[300px] xl:h-[506px] xl:w-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
