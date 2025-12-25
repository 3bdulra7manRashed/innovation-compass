'use client'
import { motion, useInView } from 'framer-motion'
import { Target, Lightbulb, Users, ArrowUpLeft, Sparkles } from 'lucide-react'
import { useRef } from 'react'

export function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const features = [
        { icon: Target, title: 'تركيز استراتيجي', color: 'secondary' },
        { icon: Lightbulb, title: 'حلول مبتكرة', color: 'accent' },
        { icon: Users, title: 'شراكة مجتمعية', color: 'secondary-accent' },
    ]

    const stats = [
        { value: '6', label: 'مراحل تطويرية', color: 'accent' },
        { value: '6', label: 'مجالات عمل', color: 'secondary' },
        { value: '2', label: 'مبادرة لكل جهة', color: 'primary' },
    ]

    return (
        <section id="about" className="py-16 md:py-28 bg-background relative overflow-hidden" ref={ref}>
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="absolute inset-0 pattern-dots opacity-30" />

            <div className="container max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Content Side - RIGHT (First in RTL) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-5 md:space-y-6 text-center md:text-right"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20"
                    >
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="w-2 h-2 rounded-full bg-accent"
                        />
                        <span className="text-sm font-medium text-[#1e1b4b]">عن بوصلة الابتكار</span>
                    </motion.div>

                    {/* Main Heading - Prominent Deep Blue */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e1b4b] leading-tight">
                        تمكين <span className="text-secondary">الابتكار الاجتماعي</span>
                    </h2>

                    {/* Description */}
                    <div className="space-y-5 md:space-y-4 text-right text-gray-600 text-base md:text-lg leading-7 md:leading-relaxed">
                        <p>
                            بوصلة الابتكار برنامج موجه للجهات، يهدف إلى تيسير وتفعيل الابتكار بشكل عملي وسهل ومبسط، وبما يراعي الفوارق في الممكنات والقدرات بين المؤسسات من حيث الموارد، والخبرات، والبنية التنظيمية.
                        </p>
                        <p>
                            تعمل بوصلة الابتكار على تمكين الجهات من الانتقال بالابتكار من كونه مفهومًا نظريًا إلى مسار تطبيقي واضح يبدأ بفهم الاحتياج الواقعي في الميدان، ثم ابتكار الحل، واختباره، وتطويره، وصولًا إلى بناء مبادرات مجتمعية قابلة للتنفيذ وذات أثر ملموس.
                        </p>
                        <p>
                            يعتمد البرنامج على منهجية تطبيقية متدرجة تمكّن الجهات المشاركة من تطوير مبادرتين مجتمعيتين رائدتين في مجالي الشباب والطفولة، مدعومة بالتأهيل العملي والإرشاد المتخصص.
                        </p>
                    </div>

                    {/* Stats - Right Aligned, Under Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 }}
                        className="pt-8 md:pt-6 border-t border-gray-200/60"
                    >
                        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    className="text-center group cursor-default"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.6 + idx * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <span
                                        className={`block text-3xl md:text-4xl font-bold mb-1 ${stat.color === 'primary' ? 'text-[#1e1b4b]' :
                                            stat.color === 'secondary' ? 'text-secondary' :
                                                'text-accent'
                                            }`}
                                    >
                                        {stat.value}
                                    </span>
                                    <span className="text-sm text-gray-500 font-medium">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA Link */}
                    <div className="flex justify-center pt-2">
                        <motion.a
                            href="#impact"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.8 }}
                            className="inline-flex items-center gap-2 text-secondary font-medium hover:gap-4 transition-all group"
                        >
                            <Sparkles className="w-4 h-4" />
                            اكتشف مجالات التركيز
                            <ArrowUpLeft className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Visual Side - LEFT (Second in RTL) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    <div className="relative min-h-[420px] h-auto rounded-3xl overflow-hidden bg-gradient-to-br from-[#1e1b4b] via-[#1e1b4b]/95 to-[#1e1b4b]/85 flex items-center justify-center p-8 shadow-2xl shadow-primary/20">
                        {/* Pattern Overlay */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0 pattern-grid" style={{ filter: 'invert(1)' }} />
                        </div>

                        {/* Animated Orbs */}
                        <motion.div
                            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                            transition={{ duration: 8, repeat: Infinity }}
                            className="absolute top-10 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"
                        />
                        <motion.div
                            animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
                            transition={{ duration: 10, repeat: Infinity }}
                            className="absolute bottom-10 right-10 w-40 h-40 bg-accent/15 rounded-full blur-2xl"
                        />

                        {/* Feature Cards Grid */}
                        <div className="grid grid-cols-2 gap-4 w-full max-w-sm relative z-10">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                                    className={`glass-dark p-5 rounded-2xl border border-white/10 text-center hover:border-white/30 transition-all duration-300 hover:-translate-y-1 group ${idx === 2 ? 'col-span-2' : ''}`}
                                >
                                    <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${feature.color === 'secondary' ? 'bg-secondary/20 text-secondary' :
                                        feature.color === 'accent' ? 'bg-accent/20 text-accent' :
                                            'bg-secondary-accent/20 text-secondary-accent'
                                        }`}>
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-white font-bold text-base">{feature.title}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Decorative Frame */}
                    <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-secondary/20 rounded-3xl z-[-1]" />
                    <div className="absolute -bottom-8 -left-8 w-full h-full border border-primary/10 rounded-3xl z-[-2]" />
                </motion.div>
            </div>
        </section>
    )
}
