"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  FaChevronRight,
  FaGithub,
  FaExternalLinkAlt,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { Project, projects } from "@/data/projects";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-28 relative overflow-hidden bg-charcoal"
    >
      {/* Sleek Minimal Section Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-crimson/35 to-transparent" />

      {/* Cinematic Ambient Lava / Sunset Radial Light */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-crimson/12 rounded-full filter blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[550px] h-[550px] bg-cream-gold/8 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/15 border border-crimson/30 text-cream text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <span>Portfolio Highlights</span>
          </motion.div>

          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-gradient-crimson-cream"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1, duration: 0.55, ease: "easeOut" }}
            className="text-base sm:text-lg text-[#d4c5ba]"
          >
            Production-grade AI platforms, computer vision proctoring systems, and interactive
            full-stack web applications with measurable real-world outcomes.
          </motion.p>
        </div>

        {/* Project Cards Grid with Staggered Scroll Entrance Every Time Visited */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
              className="bg-charcoal-card/90 border border-charcoal-border hover:border-crimson/50 rounded-2xl shadow-xl hover:shadow-[0_10px_35px_-10px_rgba(196,30,58,0.3)] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Project Screenshot / Visual Preview */}
                <div className="relative w-full h-48 overflow-hidden bg-black/40 border-b border-charcoal-border">
                  {project.badge && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/85 border border-crimson/60 text-cream text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-crimson animate-pulse" />
                        {project.badge}
                      </span>
                    </div>
                  )}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top filter brightness-[0.92] contrast-[1.05] group-hover:scale-105 group-hover:brightness-100 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-card via-transparent to-transparent opacity-75" />
                </div>

                <div className="p-6">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-crimson/15 text-cream border border-crimson/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white/5 text-[#baa89d] border border-white/10">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-cream-soft font-display mb-2 group-hover:text-cream transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#c2b3a8] line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-charcoal-border/70 mt-2">
                <Button
                  size="sm"
                  className="bg-crimson/20 hover:bg-crimson text-cream hover:text-white font-medium text-xs border border-crimson/40 transition-all duration-300"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                  <FaChevronRight className="ml-1.5 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Button>

                <div className="flex items-center space-x-2">
                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-cream/70 hover:text-red-400 hover:bg-white/5 rounded-lg transition-colors"
                      aria-label="Live Demo Video"
                      title="Watch Live Demo Video"
                    >
                      <FaYoutube className="h-4 w-4 text-red-500" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-cream/70 hover:text-cream hover:bg-white/5 rounded-lg transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub className="h-4 w-4" />
                    </a>
                  )}
                  {project.linkedin && (
                    <a
                      href={project.linkedin.startsWith("TODO") ? undefined : project.linkedin}
                      onClick={(e) => {
                        if (project.linkedin?.startsWith("TODO")) {
                          e.preventDefault();
                          alert("LinkedIn post link coming soon! (Placeholder configured in data/projects.ts)");
                        }
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-cream/70 hover:text-[#0a66c2] hover:bg-white/5 rounded-lg transition-colors"
                      aria-label="LinkedIn Post"
                      title="LinkedIn Post (Placeholder)"
                    >
                      <FaLinkedin className="h-4 w-4 text-[#0a66c2]" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-cream/70 hover:text-cream hover:bg-white/5 rounded-lg transition-colors"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Details Modal */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          {selectedProject && (
            <DialogContent className="max-w-2xl sm:max-w-3xl max-h-[88vh] overflow-y-auto bg-charcoal-card border-charcoal-border text-cream-soft sm:rounded-2xl shadow-2xl">
              <DialogHeader>
                <div className="relative w-full h-56 rounded-xl overflow-hidden mb-4 bg-black/60 border border-charcoal-border">
                  {selectedProject.badge && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/85 border border-crimson/60 text-cream text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-crimson animate-pulse" />
                        {selectedProject.badge}
                      </span>
                    </div>
                  )}
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-card via-transparent to-transparent opacity-60" />
                </div>

                {selectedProject.tagline && (
                  <p className="text-xs uppercase font-bold tracking-widest text-crimson mb-1">
                    {selectedProject.tagline}
                  </p>
                )}

                <DialogTitle className="font-display text-2xl sm:text-3xl font-bold text-cream-soft">
                  {selectedProject.title}
                </DialogTitle>

                {(selectedProject.label || selectedProject.timeline || selectedProject.mentor) && (
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#baa89d] mt-2 pt-2 border-t border-charcoal-border/70">
                    {selectedProject.label && (
                      <span className="font-semibold text-cream bg-crimson/15 px-2.5 py-0.5 rounded-full border border-crimson/30">
                        {selectedProject.label}
                      </span>
                    )}
                    {selectedProject.timeline && (
                      <span>
                        Timeline: <strong className="text-cream-gold font-medium">{selectedProject.timeline}</strong>
                      </span>
                    )}
                    {selectedProject.mentor && (
                      <span>
                        Mentor: <strong className="text-cream-gold font-medium">{selectedProject.mentor}</strong>
                      </span>
                    )}
                  </div>
                )}

                <DialogDescription className="text-sm text-[#baa89d] mt-2 leading-relaxed">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-5 my-2">
                {/* Full Description / Architecture */}
                {selectedProject.fullDescriptionPoints && selectedProject.fullDescriptionPoints.length > 0 ? (
                  <div>
                    <h4 className="text-xs font-bold text-cream mb-2 uppercase tracking-wider">
                      {selectedProject.fullDescriptionIntro || "Platform Overview"}
                    </h4>
                    <ul className="space-y-1.5 text-sm text-[#d4c5ba]">
                      {selectedProject.fullDescriptionPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-crimson mt-1 text-xs">&#9670;</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div>
                    <h4 className="text-xs font-bold text-cream mb-1.5 uppercase tracking-wider">
                      Architecture &amp; Key Impact
                    </h4>
                    <p className="text-sm text-[#d4c5ba] leading-relaxed">
                      {selectedProject.details}
                    </p>
                  </div>
                )}

                {/* My Role (Most Prominent Section) */}
                {selectedProject.myRolePoints && selectedProject.myRolePoints.length > 0 && (
                  <div className="rounded-xl p-4 sm:p-5 bg-crimson/10 border-2 border-crimson/40 shadow-[0_0_25px_rgba(196,30,58,0.15)]">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-crimson animate-pulse" />
                        My Role: {selectedProject.myRoleTitle || "Team Lead & AI/ML Lead"}
                      </h4>
                      <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-crimson text-white shadow-sm uppercase tracking-wider">
                        Lead Role
                      </span>
                    </div>
                    <ul className="space-y-2 text-sm text-[#e6ded7]">
                      {selectedProject.myRolePoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-crimson-glow font-bold mt-0.5 text-xs">&bull;</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Highlighted Results / Benchmark Badges */}
                {selectedProject.benchmarkResults && selectedProject.benchmarkResults.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xs font-bold text-cream uppercase tracking-wider">
                        Benchmark Results
                      </h4>
                      <span className="text-[11px] text-[#baa89d] italic">
                        Held-out test benchmark datasets
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                      {selectedProject.benchmarkResults.map((bench, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-lg bg-charcoal-elevated border border-charcoal-border hover:border-crimson/30 transition-colors"
                        >
                          <div className="text-[11px] font-semibold text-[#c2b3a8]">{bench.engine}</div>
                          <div className="text-base sm:text-lg font-bold text-gradient-crimson-cream mt-0.5">
                            {bench.metric}
                          </div>
                        </div>
                      ))}
                    </div>
                    {selectedProject.benchmarkStatsSummary && (
                      <div className="flex flex-wrap gap-2 mt-2.5">
                        {selectedProject.benchmarkStatsSummary.map((stat, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cream font-medium"
                          >
                            {stat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Technologies & Tools Used */}
                <div>
                  <h4 className="text-xs font-bold text-cream mb-2 uppercase tracking-wider">
                    Technologies &amp; Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-crimson/15 text-cream font-medium border border-crimson/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Team VisionCraft & Mentor */}
                {selectedProject.team && selectedProject.team.length > 0 && (
                  <div className="p-4 rounded-xl bg-black/40 border border-charcoal-border">
                    <h4 className="text-xs font-bold text-cream mb-2.5 uppercase tracking-wider">
                      Team VisionCraft
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#d4c5ba]">
                      {selectedProject.team.map((member, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between py-1.5 px-2.5 rounded bg-charcoal-elevated/70 border border-charcoal-border/50"
                        >
                          <span className="font-semibold text-cream">{member.name}</span>
                          <span className="text-[#baa89d] text-[11px]">{member.role}</span>
                        </div>
                      ))}
                    </div>
                    {selectedProject.mentorThanks && (
                      <p className="text-xs text-cream-gold mt-3 pt-2.5 border-t border-charcoal-border/70 italic text-center sm:text-left">
                        {selectedProject.mentorThanks}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Action Buttons Footer */}
              <div className="flex flex-wrap items-center justify-end gap-2.5 pt-4 border-t border-charcoal-border">
                {selectedProject.video && (
                  <a
                    href={selectedProject.video}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 border-red-500/40 text-cream hover:bg-red-500/10 hover:text-white"
                    >
                      <FaYoutube className="h-4 w-4 text-red-500" />
                      Live Demo Video
                    </Button>
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="gap-2 border-charcoal-border text-cream hover:bg-white/5">
                      <FaGithub className="h-4 w-4" />
                      View Code
                    </Button>
                  </a>
                )}
                {selectedProject.linkedin && (
                  <a
                    href={selectedProject.linkedin.startsWith("TODO") ? undefined : selectedProject.linkedin}
                    onClick={(e) => {
                      if (selectedProject.linkedin?.startsWith("TODO")) {
                        e.preventDefault();
                        alert("LinkedIn post link coming soon! Placeholder configured in data/projects.ts.");
                      }
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="gap-2 border-charcoal-border text-cream hover:bg-white/5">
                      <FaLinkedin className="h-4 w-4 text-[#0a66c2]" />
                      LinkedIn Post
                    </Button>
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="gap-2 bg-crimson hover:bg-crimson-glow text-white shadow-md">
                      <FaExternalLinkAlt className="h-3 w-3" />
                      Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
