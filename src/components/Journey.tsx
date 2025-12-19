'use client'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, ArrowLeft } from 'lucide-react'
import { useRef } from 'react'

const steps = [
    { num: 1, title: "الاطلاع على كراسة الشروط", desc: "فهم متطلبات المبادرة والمعايير اللازمة للمشاركة.", phase: "التقديم" },
    { num: 2, title: "تقديم العرض الفني والمالي", desc: "إعداد ورفع المقترح التفصيلي للمشروع عبر البوابة.", phase: "التقديم" },
    { num: 3, title: "قياس نضج الابتكار المؤسسي", desc: "تأدية المقياس لتحديد الجاهزية الابتكارية للجهة.", phase: "التقييم" },
    { num: 4, title: "معسكر الابتكار: المستوى 1", desc: "الابتكار الاجتماعي: فهم الأساسيات وتسليم المهام الأدائية المرتبطة.", phase: "التأهيل" },
    { num: 5, title: "معسكر الابتكار: المستوى 2", desc: "تحليل الاحتياج الاجتماعي: الغوص في المشكلات وتحديد الفرص.", phase: "التأهيل" },
    { num: 6, title: "اعتماد مخرجات التحليل", desc: "مراجعة واعتماد نتائج مرحلة تحليل الاحتياج للمستوى الثاني.", phase: "التقييم" },
    { num: 7, title: "معسكر الابتكار: المستوى 3", desc: "أدوات الابتكار الاجتماعي: توليد الأفكار والحلول الإبداعية.", phase: "التأهيل" },
    { num: 8, title: "اعتماد مخرجات الأفكار", desc: "تقييم واعتماد الأفكار المولدة في المستوى الثالث.", phase: "التقييم" },
    { num: 9, title: "معسكر الابتكار: المستوى 4", desc: "بناء النماذج الأولية: تحويل الأفكار إلى نماذج قابلة للاختبار.", phase: "التأهيل" },
    { num: 10, title: "معسكر الابتكار: المستوى 5", desc: "بناء وثائق المبادرات: إعداد الملفات النهائية للمشروع.", phase: "التأهيل" },
    { num: 11, title: "تقييم مخرجات المعسكر", desc: "التحكيم النهائي لمخرجات الرحلة واختيار المبادرات الرائدة.", phase: "الختام" }
]

const phaseColors: Record<string, string> = {
    "التقديم": "bg-accent/10 text-accent border-accent/20",
    "التقييم": "bg-secondary/10 text-secondary border-secondary/20",
    "التأهيل": "bg-primary/10 text-primary border-primary/20",
    "الختام": "bg-green-500/10 text-green-600 border-green-500/20"
}

export function Journey() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="journey" className="py-28 bg-gradient-to-b from-white via-background/50 to-background overflow-hidden" ref={ref}>
            <div className="container max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 text-secondary font-medium mb-4 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20"
                    >
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        كيف تشارك؟
                    </motion.span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                        رحلة <span className="gradient-text">المشاركة</span>
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        مسار متكامل يضمن جودة المخرجات واستدامة الأثر عبر 11 مرحلة تطويرية
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Central Line with Gradient */}
                    <div className="absolute top-0 bottom-0 right-[20px] md:right-1/2 w-1 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ height: 0 }}
                            animate={isInView ? { height: '100%' } : {}}
                            transition={{ duration: 2, ease: "easeOut" }}
                            className="w-full bg-gradient-to-b from-secondary via-primary to-accent"
                        />
                    </div>

                    {/* Steps */}
                    <div className="space-y-8 md:space-y-10">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.1 + idx * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className={`relative flex items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Number Bubble */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : {}}
                                    transition={{ delay: 0.2 + idx * 0.05, type: "spring", stiffness: 300 }}
                                    className="absolute right-0 md:right-1/2 translate-x-1/2 z-20"
                                >
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-full bg-white border-4 border-secondary flex items-center justify-center shadow-lg shadow-secondary/20 group-hover:scale-110 transition-transform">
                                            <span className="text-secondary font-bold text-lg">{step.num}</span>
                                        </div>
                                        {/* Pulse Animation */}
                                        <motion.div
                                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                                            className="absolute inset-0 rounded-full border-2 border-secondary/50"
                                        />
                                    </div>
                                </motion.div>

                                {/* Spacer */}
                                <div className="hidden md:block w-1/2" />

                                {/* Content Card */}
                                <div className={`w-[calc(100%-4rem)] md:w-5/12 mr-14 md:mr-0 relative group
                                    ${idx % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}
                                `}>
                                    {/* Connector Line */}
                                    <div className={`hidden md:block absolute top-1/2 w-8 h-0.5 bg-gradient-to-r ${idx % 2 === 0 ? '-right-10 from-secondary to-transparent' : '-left-10 from-transparent to-secondary'
                                        }`} />

                                    <div className={`p-6 bg-white rounded-2xl border border-gray-100 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/10 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden group
                                        ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}
                                    `}>
                                        {/* Gradient overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="relative z-10">
                                            {/* Phase Badge */}
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mb-3 ${phaseColors[step.phase]}`}>
                                                {step.phase}
                                            </span>

                                            <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* End Marker */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ delay: 1.5, type: "spring" }}
                        className="absolute bottom-0 right-0 md:right-1/2 translate-x-1/2 translate-y-8"
                    >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg shadow-secondary/30">
                            <CheckCircle2 className="w-8 h-8 text-white" />
                        </div>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.2 }}
                    className="text-center mt-24"
                >
                    <p className="text-gray-500 mb-4">جاهز للانطلاق في هذه الرحلة؟</p>
                    <a
                        href="https://forms.gle/dJ4HNw8MX6RkEd8E6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-white font-medium rounded-xl shadow-lg shadow-secondary/30 hover:shadow-xl hover:shadow-secondary/40 hover:bg-secondary/90 transition-all duration-300 hover:-translate-y-1 group"
                    >
                        ابدأ رحلتك الآن
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
