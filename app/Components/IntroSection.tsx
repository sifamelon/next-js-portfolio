"use client";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";

const IntroSection = () => {
  return (
    <div>
      <section className="flex flex-col items-center justify-center gap-3 my-7 ">
        <Image
          className="rounded-full"
          src={
            "https://avatars.githubusercontent.com/u/99482717?s…00&u=2fbe9b57ce3b7ad39523ce9434916cbcd53a51c1&v=4"
          }
          alt="Sifen"
          height={200}
          width={200}
        />
        <motion.div
          className="space-x-2"
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          exit={{
            opacity: 1,
          }}
        >
          <h3 className="text-4xl font-medium mx-auto flex items-center justify-center">
            Sifen Solomon
          </h3>
          <p className=" text-xl md:text-6xl  text-center font-bold px-10">
            I&apos;m Sifen passionate Javascript fullstack developer and Dev Ops
            Engineer .{" "}
          </p>
        </motion.div>
        <a
          href="mailto:onesamket@gmail.con"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button color="secondary" className="mt-5">
            Get in touch
          </Button>
        </a>
      </section>
    </div>
  );
};

export default IntroSection;
