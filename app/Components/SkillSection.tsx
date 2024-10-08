"use client";
import { motion } from "framer-motion";
import React from "react";
import Prog from "./Progress";

const SkillSection = () => {
  return (
    <div>
      <section
        className="md:flex flex-col md:flex-row mx-auto justify-center items-center space-x-3 space-y-2   mn-h-[99vh] py-10 px-12 my-4"
        id="skills"
      >
        <motion.div
          className="text-center md:w-1/2 xl:w-1/3"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
        >
          <div>
            <h1 className="font-medium text-5xl">Design Skill</h1>
            <p className="text-justify p-4 rounded-sm my-4 md:my-1 ">
              As a FullStack developer and DevOps Engineer, I have expertise in
              various technologies and frameworks, including React, NextJs,
              Docker, Typescript, Express.js, NestJS,MongoDB,Postgre, MySQL, and
              ReactNative. I can also build applications using React Native, and
              deploy them to the cloud. In addition to this, I have a strong
              knowledge of different serverless technologies, such as Firebase,
              Vercel, AWS, and more. I&apos;m dedicated to delivering top-notch
              web and mobile solutions that meet your business needs. Let&apos;s
              bring your ideas to life!
            </p>
          </div>
        </motion.div>
        {/* progress  */}
        <motion.div
          className="md:w-1/2 xl:w-1/3  items-center "
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
        >
          <Prog name="React" value={89} color="primary" />
          <Prog name="NextJs" value={80} color="danger" />
          <Prog name="Docker" value={80} color="success" />
          <Prog name="Typescript" value={80} color="primary" />
          <Prog name="Express" value={89} color="secondary" />
          <Prog name="NestJS" value={80} color="warning" />
          <Prog name="MongoDB" value={89} color="success" />
          <Prog name="MySQL" value={80} color="default" />
          <Prog name="PostgreSQL" value={80} color="primary" />
          <Prog name="Python" value={80} color="warning" />
        </motion.div>
      </section>
    </div>
  );
};

export default SkillSection;
