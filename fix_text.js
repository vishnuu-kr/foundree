const fs = require('fs');

// Services text update
let s = fs.readFileSync('src/components/ServicesSection.tsx', 'utf8');
s = s.replace('Engineering that moves', 'Code that moves');
s = s.replace('as fast as your business.', 'as fast as you think.');
s = s.replace('Custom models, RAG pipelines, and intelligent agents built to solve specific business problems.', 'Custom LLM pipelines, RAG architecture, and intelligent agents. We don\'t just wrap APIs; we build AI that actually understands your product\'s context.');
s = s.replace('Secure Model Context Protocol deployments giving your AI real-time access to fragmented data silos.', 'Piping real-world data straight into your models. We build secure Model Context Protocol servers that bridge the gap between AI and your existing dev tools.');
s = s.replace('High-performance Next.js applications with fluid animations, intuitive UX, and bulletproof backends.', 'End-to-end product development. From initial wireframes to pixel-perfect, highly performant React applications that feel like magic in the browser.');
s = s.replace('We actively contribute back. Building and maintaining developer tools that the community relies on.', 'We believe in building in public. High-quality developer tools, libraries, and utilities that are fast, composable, and relentlessly documented.');
fs.writeFileSync('src/components/ServicesSection.tsx', s);

// WorksText update
let w = fs.readFileSync('src/components/ProjectCard.tsx', 'utf8');
w = w.replace('Hyper-personalized movie recommendations powered by AI taste-mapping.', 'Algorithmic taste-mapping for cinema. We got tired of bad movie recommendations, so we trained our own AI to fix it.');
w = w.replace('A platform for film enthusiasts to dissect theories and hidden meanings.', 'A community engine built for film nerds. The perfect architecture to rip apart fan theories and deep-dive into hidden meanings.');
w = w.replace('MCP server feeding high-quality GitHub context into AI models.', 'Piping raw GitHub context straight into LLMs. A lightweight MCP server built specifically for agentic developer workflows.');
w = w.replace('Auto-updating developer portfolios driven by GitHub activity.', 'Because manually updating your portfolio sucks. A utility that syncs your live site directly with your GitHub commit graph.');
w = w.replace('An omni-format application designed to smoothly open and inspect absolutely any file type.', 'The "open literally anything" utility. A desktop tool engineered to inspect obscure file formats without crashing your machine.');
fs.writeFileSync('src/components/ProjectCard.tsx', w);

// Process Section update
let p = fs.readFileSync('src/components/ProcessSection.tsx', 'utf8');
p = p.replace('How we <span className="font-serif italic text-white/70">get it done.</span>', 'How we <span className="font-serif italic text-white/70">ship.</span>');
p = p.replace('We listen obsessively. Understanding the problem space before writing a single line of code.', 'We map the entire data flow and UI state before writing a single line of code. No assumptions, just airtight technical specs.');
p = p.replace('Rapid, high-fidelity prototypes. We ship visual proofs within the first week.', 'We don\'t do endless mockups. We ship high-fidelity wireframes and functional core logic within the first week to prove the concept.');
p = p.replace('title: "Discovery"', 'title: "Scope & Architect"');
p = p.replace('title: "Prototype"', 'title: "Ship the Skeleton"');
p = p.replace('title: "Build"', 'title: "Push to Main"');
p = p.replace('title: "Refine"', 'title: "The Last 10%"');
p = p.replace('Lean sprints with continuous delivery. Every commit is production-ready.', 'Lean sprints and tight feedback loops. We code in the open, and every commit we push is production-ready.');
p = p.replace('Polish until it feels inevitable. Performance, accessibility, and delight.', 'Where good becomes great. Performance profiling, accessibility audits, and injecting micro-interactions until the UX feels inevitable.');
fs.writeFileSync('src/components/ProcessSection.tsx', p);

// Testimonials Section
let t = fs.readFileSync('src/components/TestimonialsSection.tsx', 'utf8');
t = t.replace('What they <span className="font-serif italic text-white/70 ml-1 md:ml-3">say about us.</span>', 'Logs from the <span className="font-serif italic text-white/70 ml-1 md:ml-3">wild.</span>');
t = t.replace('VOICES', 'LOGS');
fs.writeFileSync('src/components/TestimonialsSection.tsx', t);

