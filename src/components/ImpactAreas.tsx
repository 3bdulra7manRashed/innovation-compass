'use client'
import { motion, useInView } from 'framer-motion'
import { BookOpen, Shield, UserCheck, Lightbulb, Flag, Briefcase, ArrowUpLeft } from 'lucide-react'
import { useRef } from 'react'

const areas = [
    { title: "تمكين الطفل من المهارات الحياتية", icon: BookOpen, desc: "بناء بيئات وبرامج عملية تُنمّي مهارات الطفل وتدعمه في التعامل مع الحياة بثقة واستقلالية.", color: "from-secondary/20 to-secondary/5" },
    { title: "مواجهة التحديات القيمية والفطرية", icon: Shield, desc: "تطوير مبادرات تحمي القيم وتعزز الفطرة السليمة بأساليب تربوية معاصرة وجاذبة.", color: "from-accent/20 to-accent/5" },
    { title: "إدارة الذات وتحمل المسؤولية", icon: UserCheck, desc: "إعداد برامج تمكّن الشباب من تحمل المسؤوليات الشخصية، والأسرية والمجتمعية بوعي وكفاءة.", color: "from-primary/15 to-primary/5" },
    { title: "حل المشكلات واتخاذ القرار", icon: Lightbulb, desc: "تنمية مهارات التفكير والتحليل واتخاذ القرار لدى الشباب، والحد من القرارات غير المدروسة.", color: "from-secondary-accent/20 to-secondary-accent/5" },
    { title: "تعزيز الشخصية السعودية", icon: Flag, desc: "مبادرات تُبرز الشخصية الوطنية، وتُعزز الاعتزاز بالقيم والثقافة السعودية لدى النشء والشباب.", color: "from-accent/20 to-accent/5" },
    { title: "تمكين المتخصصين والخبراء", icon: Briefcase, desc: "تطوير قدرات العاملين في مجالات الشباب والطفولة، وبناء شبكات تشاركية لتبادل الخبرات.", color: "from-secondary/20 to-secondary/5" },
]

export function ImpactAreas() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="impact" className="py-28 bg-white relative overflow-hidden" ref={ref}>
            {/* Background Pattern */}
            <div className="absolute inset-0 pattern-grid opacity-30" />
            <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

            <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 text-secondary font-medium mb-4 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20"
                    >
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        نركز على الأثر
                    </motion.span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        مجالات <span className="gradient-text">التركيز</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        تستهدف المبادرة ابتكار حلول نوعية في المجالات الأكثر نفعاً واستدامة لخدمة الطفولة والشباب.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {areas.map((area, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + idx * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative"
                        >
                            <div className="relative bg-background hover:bg-white p-8 rounded-2xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden h-full">
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Shine Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                </div>

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-transparent group-hover:shadow-secondary/30">
                                        <area.icon className="w-8 h-8" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary transition-colors">
                                        {area.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed text-sm group-hover:text-gray-600 transition-colors">
                                        {area.desc}
                                    </p>

                                    {/* Hover Arrow */}

                                </div>

                                {/* Corner Decoration */}
                                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-secondary/5 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-500 mb-4">هل أنت مستعد لإحداث الفرق؟</p>
                    <a
                        href="#journey"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-medium rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1 group"
                    >
                        اكتشف رحلة المشاركة
                        <ArrowUpLeft className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
