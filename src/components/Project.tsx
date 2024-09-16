"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    name: "Argus",
    desc: "Developed a machine learning platform for industrial/construction sites to ensure workers wear proper PPE and alert if systems may fail.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example image path
    deployLink: "https://argus-platform.com",
  },
  {
    name: "Fast Fingers",
    desc: "A typing game designed for 'Qwerty Rumble' event during DHISHNA 2023 with multiple levels and Firebase authentication.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deployLink: "https://fastfingers-game.com",
  },
  {
    name: "GiftedBooks",
    desc: "Developed a platform where users can resell and buy books, focusing on making books available for underprivileged children.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deployLink: "https://giftedbooks.com",
  },
  {
    name: "eVillage",
    desc: "A public platform offering free or low-cost computer science education to village students, including a mentorship program.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deployLink: "https://evillage-education.com",
  },
  {
    name: "BookLearn",
    desc: "An NLP model that answers questions from pre-trained books to improve reading efficiency, using PyTorch and Hugging Face.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deployLink: "https://booklearn-ai.com",
  },
  {
    name: "BookLearn",
    desc: "An NLP model that answers questions from pre-trained books to improve reading efficiency, using PyTorch and Hugging Face.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deployLink: "https://booklearn-ai.com",
  },
  {
    name: "BookLearn",
    desc: "An NLP model that answers questions from pre-trained books to improve reading efficiency, using PyTorch and Hugging Face.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deployLink: "https://booklearn-ai.com",
  },
  {
    name: "BookLearn",
    desc: "An NLP model that answers questions from pre-trained books to improve reading efficiency, using PyTorch and Hugging Face.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deployLink: "https://booklearn-ai.com",
  },
];



export function Project() {
  return (
    <div className=" bg-gray-100">
      <HeroHighlight className="h-[60rem] sticky top-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-400 dark:text-white max-w-8xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          <div className="py-20">
            Explore My Projects
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 lg:px-20">
            {projects.map((project) => (
              <CardContainer className="inter-var" key={project.name}>
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {project.name}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                  >
                    {/* {project.desc} */}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={project.image}
                      height="200"
                      width="400"
                      className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={`${project.name} thumbnail`}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-3">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={project.deployLink}
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Sign up
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </motion.h1>
      </HeroHighlight>
    </div>
  );
}