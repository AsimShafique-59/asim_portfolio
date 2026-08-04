"use client";

import { motion, useReducedMotion } from "motion/react";
import { Bot, MessagesSquare, Workflow, BarChart3, Sparkles } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { Tilt } from "./Tilt";

const sparkData = [4, 7, 6, 9, 8, 12, 11, 15, 14, 18, 20, 24].map((v, i) => ({ i, v }));

const sidebarIcons = [
  { icon: MessagesSquare, active: true },
  { icon: Bot, active: false },
  { icon: Workflow, active: false },
  { icon: BarChart3, active: false },
];

const aiReply = "Indexed 3 sources, ran the retrieval agent, and drafted a response with citations.";

export function HeroMockup() {
  const reduceMotion = useReducedMotion();

  return (
    <Tilt intensity={6} className="w-full">
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.02 }}
        className="w-full overflow-hidden rounded-2xl border border-border/60 bg-card/90 shadow-2xl shadow-black/20 backdrop-blur-xl"
      >
        {/* Toolbar */}
        <div className="flex items-center gap-3 border-b border-border/60 bg-secondary/40 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="mx-auto flex items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-[11px] text-muted-foreground">
            <Sparkles className="h-3 w-3 text-brand" />
            agent.asimshafique.dev
          </div>
        </div>

        {/* Body */}
        <div className="flex min-h-[340px]">
          {/* Sidebar */}
          <div className="flex flex-col items-center gap-2 border-r border-border/60 bg-secondary/20 px-3 py-4">
            {sidebarIcons.map(({ icon: Icon, active }, i) => (
              <span
                key={i}
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                  active ? "bg-brand/15 text-brand" : "text-muted-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>

          {/* Chat + status */}
          <div className="flex flex-1 flex-col justify-between p-4">
            <div className="space-y-3">
              <div className="ml-auto max-w-[75%] rounded-2xl rounded-tr-sm bg-brand/15 px-3.5 py-2 text-xs text-foreground">
                Summarize the latest support tickets and flag anything urgent.
              </div>

              <motion.div
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.02, delayChildren: 0.4 } } }}
                className="flex max-w-[85%] flex-wrap gap-1 rounded-2xl rounded-tl-sm border border-border/60 bg-background/60 px-3.5 py-2 text-xs text-foreground"
              >
                {aiReply.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    variants={{ hidden: { opacity: 0, y: 4 }, show: { opacity: 1, y: 0 } }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <div className="space-y-3">
              <div className="h-14 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={sparkData} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
                    <defs>
                      <linearGradient id="heroSpark" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--brand)" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="var(--brand)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="v" stroke="var(--brand)" strokeWidth={2} fill="url(#heroSpark)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-2.5 py-1">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Agent running
                </span>
                <span className="rounded-full border border-border/60 bg-background/60 px-2.5 py-1">RAG · 3 sources</span>
                <span className="rounded-full border border-border/60 bg-background/60 px-2.5 py-1">94ms latency</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
}
