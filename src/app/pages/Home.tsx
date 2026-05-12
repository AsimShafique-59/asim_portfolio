import { motion } from "motion/react";
import { ArrowRight, Code2, Sparkles, Zap, Brain, Cpu } from "lucide-react";
import { Link } from "react-router";
import { useEffect, useState } from "react";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Python and AI engineer with 2+ years of experience building scalable backend systems.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const floatingIcons = [
    { Icon: Brain, delay: 0, color: "text-pink-500" },
    { Icon: Cpu, delay: 0.2, color: "text-blue-500" },
    { Icon: Zap, delay: 0.4, color: "text-purple-500" },
    { Icon: Code2, delay: 0.6, color: "text-indigo-500" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border border-indigo-200 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                AI-Powered Development
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Asim Shafique
              </span>
            </h1>

            <p className="text-3xl text-gray-800 font-semibold mb-6">
              Python, DRF & Generative AI Engineer
            </p>

            <div className="h-20 mb-8">
              <p className="text-2xl text-gray-600 font-mono leading-snug">
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-0.5 h-6 bg-indigo-600 ml-1"
                />
              </p>
            </div>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Python and AI engineer with 2+ years of experience building scalable backend systems, LLM-powered applications, and production-grade automations. Focused on Django/DRF, FastAPI, agentic RAG, and cloud deployment.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link to="/projects" reloadDocument>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold flex items-center gap-2 shadow-xl"
                >
                  View Projects
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/contact" reloadDocument>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white border-2 border-indigo-600 text-indigo-600 rounded-2xl font-semibold shadow-lg hover:bg-indigo-50 transition-colors"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Animated Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              {/* Central Circle */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-48 h-48 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Code2 className="w-24 h-24 text-white" />
                </div>
              </motion.div>

              {/* Orbiting Icons */}
              {floatingIcons.map(({ Icon, delay, color }, index) => (
                <motion.div
                  key={index}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                    delay: delay * 5,
                  }}
                  className="absolute inset-0"
                  style={{
                    transformOrigin: "center",
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: delay,
                    }}
                    className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center ${color}`}
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>
                </motion.div>
              ))}

              {/* Pulse Rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: [0.8, 1.5, 1.5],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1,
                  }}
                  className="absolute inset-0 border-4 border-indigo-400 rounded-full"
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            { number: "2+", label: "Years Experience", color: "from-blue-500 to-cyan-500" },
            { number: "12+", label: "Projects Completed", color: "from-purple-500 to-pink-500" },
            { number: "36+", label: "Technologies Mastered", color: "from-indigo-500 to-purple-500" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-200"
            >
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
