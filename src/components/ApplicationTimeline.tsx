'use client'
import { motion, useInView } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { useRef } from 'react'

// Helper function to convert to Arabic numerals
function toArabicNumerals(str: string): string {
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
    return str.replace(/[0-9]/g, (d) => arabicNumerals[parseInt(d)])
}

// Helper function to convert month to Arabic
function formatDateToArabic(dateStr: string): string {
    const months: { [key: string]: string } = {
        'Jan': 'يناير',
        'Feb': 'فبراير',
        'Mar': 'مارس',
        'Apr': 'أبريل',
        'May': 'مايو',
        'Jun': 'يونيو',
        'Jul': 'يوليو',
        'Aug': 'أغسطس',
        'Sep': 'سبتمبر',
        'Oct': 'أكتوبر',
        'Nov': 'نوفمبر',
        'Dec': 'ديسمبر',
    }

    // Parse "21 Dec 2025" format
    const parts = dateStr.split(' ')
    if (parts.length === 3) {
        const day = toArabicNumerals(parts[0])
        const month = months[parts[1]] || parts[1]
        const year = toArabicNumerals(parts[2])
        return `${day} ${month} ${year}`
    }
    return dateStr
}

const timelineItems = [
    {
        label: "فتح باب التقديم",
        date: "21 Dec 2025",
        description: "بداية استقبال طلبات التقديم من الجهات المتخصصة",
        status: "upcoming"
    },
    {
        label: "آخر موعد للتقديم",
        date: "10 Jan 2026",
        description: "الموعد النهائي لتقديم الطلبات والمستندات المطلوبة",
        status: "deadline"
    },
    {
        label: "إعلان الجهات المتأهلة",
        date: "22 Jan 2026",
        description: "الإعلان عن الجهات التي تم قبولها في البرنامج",
        status: "result"
    },
]

export function ApplicationTimeline() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary to-primary/95 relative overflow-hidden" ref={ref}>
            {/* Subtle Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 pattern-grid" style={{ filter: 'invert(1)' }} />
            </div>

            <div className="container max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary font-bold tracking-wider mb-4 border border-secondary/30">
                        <Calendar className="w-4 h-4" />
                        الجدول الزمني
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        مرحلة <span className="text-secondary">التقديم</span>
                    </h2>
                </motion.div>

                {/* Vertical Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute right-6 md:right-1/2 top-0 bottom-0 w-0.5 bg-white/20 md:translate-x-1/2" />

                    {/* Timeline Items */}
                    <div className="space-y-8">
                        {timelineItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.2 + idx * 0.15, duration: 0.5 }}
                                className="relative flex items-start gap-6 md:gap-12"
                            >
                                {/* Timeline Marker */}
                                <div className="absolute right-4 md:right-1/2 md:translate-x-1/2 z-10">
                                    <div className={`
                                        w-5 h-5 rounded-full border-4 border-primary
                                        ${item.status === 'deadline'
                                            ? 'bg-accent shadow-lg shadow-accent/50'
                                            : item.status === 'result'
                                                ? 'bg-green-400 shadow-lg shadow-green-400/50'
                                                : 'bg-secondary shadow-lg shadow-secondary/50'
                                        }
                                    `} />
                                </div>

                                {/* Content - Alternating sides on desktop */}
                                <div className={`
                                    flex-1 mr-12 md:mr-0
                                    ${idx % 2 === 0
                                        ? 'md:pr-[calc(50%+2rem)] md:text-right'
                                        : 'md:pl-[calc(50%+2rem)] md:pr-0 md:text-left md:mr-auto'
                                    }
                                `}>
                                    <div className={`
                                        bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5
                                        hover:bg-white/10 hover:border-secondary/30 transition-all duration-300
                                    `}>
                                        {/* Step Number */}
                                        <div className={`
                                            inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold mb-3
                                            ${item.status === 'deadline'
                                                ? 'bg-accent/20 text-accent'
                                                : item.status === 'result'
                                                    ? 'bg-green-400/20 text-green-400'
                                                    : 'bg-secondary/20 text-secondary'
                                            }
                                        `}>
                                            {toArabicNumerals((idx + 1).toString())}
                                        </div>

                                        {/* Label */}
                                        <h3 className="text-lg font-bold text-white mb-2">
                                            {item.label}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-white/60 text-sm mb-4 leading-relaxed">
                                            {item.description}
                                        </p>

                                        {/* Date - Arabic Numerals */}
                                        <div className={`
                                            inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-bold
                                            ${item.status === 'deadline'
                                                ? 'bg-accent/20 text-accent'
                                                : item.status === 'result'
                                                    ? 'bg-green-400/20 text-green-400'
                                                    : 'bg-secondary/20 text-secondary'
                                            }
                                        `}>
                                            <Calendar className="w-3.5 h-3.5" />
                                            <span>{formatDateToArabic(item.date)}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* End Marker */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.8 }}
                        className="absolute right-4 md:right-1/2 bottom-0 md:translate-x-1/2 translate-y-8"
                    >
                        <div className="w-3 h-3 rounded-full bg-white/40" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
