import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";


export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    author: string;
    date: string;
    origin: string;
    printed: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  // Filter items based on the search query (case-insensitive)
  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.author.toLowerCase().includes(query.toLowerCase()) ||
      item.origin.toLowerCase().includes(query.toLowerCase()) ||
      item.printed.toLowerCase().includes(query.toLowerCase()) ||
      item.date.toLowerCase().includes(query.toLowerCase())
  );

  // Handle search on Enter key
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setQuery(search);
    }
  };

  const handleSearch = () => {
    setQuery(search);
  };

  return (
   
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10",
          className
        )}
      >
        {filteredItems.map((item, idx) => (
          <a
            href={item?.link}
            key={item?.link}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-blue-300/60 dark:bg-blue-900/60 block rounded-3xl"
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
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <CardAuthor>{item.author}</CardAuthor>
              <CardDate>{item.date}</CardDate>
              <CardOrigin>{item.origin}</CardOrigin>
              <CardPrinted>{item.printed}</CardPrinted>
            </Card>
          </a>
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
        // Lighter backgrounds for more "ambient light"
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-gray-100 dark:bg-gray-700 border border-transparent dark:border-white/[0.2] group-hover:border-blue-400 relative z-20",
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
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
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
        "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardAuthor = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("mt-2 text-zinc-300 text-sm", className)}>
      <strong>Author:</strong> {children}
    </p>
  );
};

export const CardDate = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("mt-2 text-zinc-300 text-sm", className)}>
      <strong>Date:</strong> {children}
    </p>
  );
};

export const CardOrigin = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("mt-2 text-zinc-300 text-sm", className)}>
      <strong>Origin:</strong> {children}
    </p>
  );
};

export const CardPrinted = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("mt-2 text-zinc-300 text-sm", className)}>
      <strong>Printed:</strong> {children}
    </p>
  );
};
