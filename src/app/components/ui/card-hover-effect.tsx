import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Sparkles } from "lucide-react";

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
    category?: string;
    metric?: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!items) return null;

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 py-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute -inset-1 h-full w-full bg-blue-500/10 block rounded-3xl blur-md"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>
          
          <Card>
            {/* Image Preview with Category Badge */}
            {item.image && (
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl bg-zinc-900 border border-white/10">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {item.category && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/60 backdrop-blur-md border border-white/15 text-blue-400">
                    {item.category}
                  </span>
                )}
                {item.metric && (
                  <span className="absolute bottom-3 right-3 px-2 py-1 rounded-md text-[10px] font-medium bg-blue-500/20 border border-blue-500/30 text-blue-300 backdrop-blur-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-blue-400" />
                    {item.metric}
                  </span>
                )}
              </div>
            )}
            
            {item.icon && <div className="mb-4">{item.icon}</div>}
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>

            {item.technologies && (
              <div className="flex flex-wrap gap-1.5 mt-4">
                {item.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.06]">
              {item.githubLink && (
                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <FaGithub className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {item.demoLink && (
                <a
                  href={item.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors ml-auto"
                >
                  <FaExternalLinkAlt className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
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
        "glass-card card-hover-lift rounded-2xl h-full w-full p-5 overflow-hidden relative z-20 transition-all duration-300",
        className
      )}
    >
      <div className="relative z-50">{children}</div>
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
    <h4 className={cn("text-slate-900 dark:text-white text-lg font-bold tracking-tight mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors", className)}>
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
        "mt-2 text-slate-600 dark:text-gray-400 leading-relaxed text-xs sm:text-sm line-clamp-3",
        className
      )}
    >
      {children}
    </p>
  );
};

