'use client'
import { useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react'
import { useRef } from 'react'

const faqs = [
    { q: "هل يشترط وجود فكرة مبادرة جاهزة قبل التقديم؟", a: "لا، لا يُشترط وجود فكرة مسبقة. يتم بناء المبادرات من الصفر خلال مراحل البرنامج." },
    { q: "كم مبادرة ستنتج عن المشاركة؟", a: "تُطوّر كل جهة مشارِكة مبادرتين مجتمعيتين رائدتين جاهزتين للتطبيق." },
    { q: "أين يُعقد البرنامج؟", a: "التأهيل والتدريب يتم حضوريًا في مدينة الرياض." },
    { q: "من يمكنه التقديم؟", a: "الجهات العاملة في مجالي الشباب والطفولة، والمرخصة رسميًا داخل المملكة." },
    { q: "هل يمكن التقديم بأكثر من طلب؟", a: "لا، يحق لكل جهة التقديم بطلب واحد فقط." },
]

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="faq" className="py-28 bg-gradient-to-b from-background via-[#F8F9FC] to-background relative overflow-hidden" ref={ref}>
            {/* Background Elements */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute inset-0 pattern-dots opacity-20" />

            <div className="container max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 text-secondary font-medium mb-4 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20"
                    >
                        <HelpCircle className="w-4 h-4" />
                        هل لديك استفسار؟
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                        الأسئلة <span className="gradient-text">الشائعة</span>
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        أجوبة على أكثر الأسئلة شيوعًا حول المبادرة وآلية المشاركة
                    </p>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + idx * 0.08, duration: 0.5 }}
                            className="group"
                        >
                            <div className={`relative bg-white rounded-2xl border-2 transition-all duration-500 overflow-hidden ${openIndex === idx
                                ? 'border-secondary/30 shadow-xl shadow-secondary/10'
                                : 'border-gray-100 hover:border-secondary/20 hover:shadow-lg'
                                }`}>
                                {/* Gradient Border Effect */}
                                {openIndex === idx && (
                                    <motion.div
                                        layoutId="activeBorder"
                                        className="absolute inset-0 rounded-2xl"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(47, 164, 169, 0.1), rgba(214, 179, 106, 0.05))'
                                        }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}

                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="relative w-full flex items-center justify-between p-6 text-right z-10"
                                >
                                    <div className="flex items-center gap-4 flex-1">
                                        <span className={`flex items-center justify-center w-10 h-10 rounded-xl text-sm font-bold transition-all duration-300 ${openIndex === idx
                                            ? 'bg-secondary text-white shadow-lg shadow-secondary/30'
                                            : 'bg-gray-100 text-gray-500 group-hover:bg-secondary/10 group-hover:text-secondary'
                                            }`}>
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <span className={`font-bold text-lg transition-colors duration-300 ${openIndex === idx ? 'text-secondary' : 'text-primary group-hover:text-primary/80'
                                            }`}>
                                            {faq.q}
                                        </span>
                                    </div>
                                    <motion.span
                                        animate={{ rotate: openIndex === idx ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === idx
                                            ? 'bg-secondary text-white shadow-lg shadow-secondary/30'
                                            : 'bg-gray-100 text-gray-500 group-hover:bg-secondary/10 group-hover:text-secondary'
                                            }`}
                                    >
                                        {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </motion.span>
                                </button>

                                <AnimatePresence>
                                    {openIndex === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                        >
                                            <div className="px-6 pb-6 relative z-10">
                                                <div className="pr-14 pt-2 border-t border-gray-100">
                                                    <motion.p
                                                        initial={{ y: -10, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        transition={{ delay: 0.1 }}
                                                        className="text-gray-600 leading-relaxed text-lg pt-4"
                                                    >
                                                        {faq.a}
                                                    </motion.p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
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
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                                <MessageCircle className="w-6 h-6 text-secondary" />
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-primary">لم تجد إجابتك؟</p>
                                <p className="text-sm text-gray-500">تواصل معنا مباشرة</p>
                            </div>
                        </div>
                        <a
                            href="mailto:info@ajch.org.sa"
                            className="px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                        >
                            تواصل معنا
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
