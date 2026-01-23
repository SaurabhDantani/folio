import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link?: string;
    icon?: React.ReactNode;
    image?: string;
    technologies?: string[];
    githubLink?: string;
    demoLink?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!items) return null;

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-primary/10 dark:bg-primary/20 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            {item.image && (
              <div className="relative w-full h-40 mb-4 overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            )}
            {item.icon && <div className="mb-4">{item.icon}</div>}
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>

            {item.technologies && (
              <div className="flex flex-wrap gap-2 mt-4">
                {item.technologies.map((tech, i) => (
                  <span key={i} className="text-[10px] px-2 py-1 rounded-md bg-primary/10 text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="flex gap-4 mt-6">
              {item.githubLink && (
                <a href={item.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors text-sm">
                  <FaGithub className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}
              {item.demoLink && (
                <a href={item.demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors text-sm">
                  <FaExternalLinkAlt className="w-4 h-4" />
                  <span>Demo</span>
                </a>
              )}
              {item.link && !item.githubLink && !item.demoLink && (
                <a href={item.link} className="text-secondary hover:text-primary transition-colors text-sm">
                  Learn More
                </a>
              )}
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white dark:bg-dark/80 backdrop-blur-sm border border-black/10 dark:border-white/10 group-hover:border-primary/50 relative z-20 transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-primary/10",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-black dark:text-white font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-secondary tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
