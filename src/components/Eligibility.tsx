'use client'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowLeft, FileText, Send, Users, Calendar, Clock, Award } from 'lucide-react'
import { Button } from './Button'
import { useRef, useState, useEffect } from 'react'

const requirements = [
    { text: "أن تكون الجهة مرخصة رسميًا داخل المملكة العربية السعودية.", icon: Award },
    { text: "وجود خبرة سابقة في العمل مع الشباب أو الطفولة.", icon: Users },
    { text: "توفر فريق عمل قادر على الالتزام بالحضور والمشاركة الفاعلة.", icon: Clock },
    { text: "الالتزام بالجدول الزمني ومراحل البرنامج كاملة.", icon: Calendar },
]

export function Eligibility() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })


    const [remainingDays, setRemainingDays] = useState(0)

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date('2026-01-10T23:59:59+03:00') - +new Date()
            let timeLeft = 0

            if (difference > 0) {
                timeLeft = Math.ceil(difference / (1000 * 60 * 60 * 24))
            }
            return timeLeft
        }

        setRemainingDays(calculateTimeLeft())

        // Update check every minute to be safe, though daily is fine
        const timer = setInterval(() => {
            setRemainingDays(calculateTimeLeft())
        }, 60000)

        return () => clearInterval(timer)
    }, [])

    const getDayLabel = (days: number) => {
        if (days === 1) return "يوم متبقٍ"
        if (days === 2) return "يومان متبقيان"
        if (days >= 3 && days <= 10) return "أيام متبقية"
        return "يوم متبقٍ"
    }

    return (
        <section className="py-28 bg-primary text-white relative overflow-hidden" ref={ref}>
            {/* ... existing background code blocks ... */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-[600px] h-[600px] bg-secondary rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"
            />
            <motion.div
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"
            />

            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 pattern-grid" style={{ filter: 'invert(1)' }} />
            </div>

            {/* Floating Elements */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/20 rounded-full"
                    style={{ top: `${20 + i * 15}%`, left: `${10 + i * 18}%` }}
                    animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
                />
            ))}

            <div className="container max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start relative z-10">
                {/* Left Column - Requirements */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-8"
                >
                    {/* Section Header */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary font-bold tracking-wider mb-4 border border-secondary/30"
                        >
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                            معايير القبول
                        </motion.span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            شروط <span className="text-secondary">التقديم</span>
                        </h2>
                        <p className="text-white/70 text-lg leading-relaxed">
                            نبحث عن شركاء استراتيجيين يمتلكون الرؤية والقدرة على إحداث تغيير حقيقي في واقع الطفولة والشباب.
                        </p>
                    </div>

                    {/* Requirements List */}
                    <ul className="space-y-4">
                        {requirements.map((req, idx) => (
                            <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                                className="group"
                            >
                                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300 backdrop-blur-sm">
                                    <div className="min-w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 text-white flex items-center justify-center shadow-lg shadow-secondary/30 group-hover:scale-110 transition-transform">
                                        <Check className="w-5 h-5" strokeWidth={3} />
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-white/90 font-medium text-lg leading-relaxed">{req.text}</span>
                                    </div>
                                    <req.icon className="w-5 h-5 text-white/30 group-hover:text-secondary transition-colors" />
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Right Column - CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="sticky top-24"
                >
                    <div className="relative">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl blur-xl" />

                        <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                            {/* Card Header */}
                            <div className="text-center mb-8">
                                <motion.div
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center shadow-lg"
                                >
                                    <Send className="w-8 h-8 text-white" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-white mb-2">إجراءات سريعة</h3>
                                <p className="text-white/60">ابدأ رحلة التغيير الآن</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-4">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="w-full justify-between items-center group h-16 text-lg bg-white text-primary hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300"
                                    onClick={() => window.open('https://forms.gle/dJ4HNw8MX6RkEd8E6', '_blank')}
                                >
                                    <div className="flex items-center gap-3">
                                        <Send className="w-5 h-5" />
                                        <span>التسجيل في المبادرة</span>
                                    </div>
                                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
                                </Button>

                                <div className="space-y-1">
                                    <Button
                                        variant="secondary"
                                        size="lg"
                                        className="w-full justify-between items-center group min-h-[64px] h-auto py-4 text-lg shadow-lg shadow-secondary/30"
                                        onClick={() => window.open('https://drive.google.com/file/d/1H8WR4F7a7Rv3s3GvXPpAVaEey8SZarCe/view?usp=sharing', '_blank')}
                                    >
                                        <div className="flex items-center gap-3">
                                            <FileText className="w-5 h-5 flex-shrink-0" />
                                            <span>عرض كراسة الشروط والمواصفات</span>
                                        </div>
                                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform flex-shrink-0" />
                                    </Button>
                                    <p className="text-[11px] text-white/50 text-center px-4">
                                        سيتم فتح الملف في نافذة جديدة (PDF)
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="relative py-4">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-white/10" />
                                    </div>
                                    <div className="relative flex justify-center">
                                        <span className="px-4 bg-transparent text-sm text-white/40">هل لديك استفسار؟</span>
                                    </div>
                                </div>

                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full justify-between items-center text-white border-white/20 hover:bg-white/10 hover:border-white/40 group h-auto py-5 text-base"
                                    onClick={() => window.open('https://forms.gle/ZPztq9DvitrEXgnp8', '_blank')}
                                >
                                    <div className="flex flex-col items-start gap-1">
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4" />
                                            <span className="font-medium">التسجيل في اللقاء التعريفي</span>
                                        </div>
                                        <span className="text-xs text-white/50 font-normal">حرصًا على توضيح المنهجية والإجابة عن الاستفسارات</span>
                                    </div>
                                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
                                </Button>
                            </div>

                            {/* Bottom Stats */}
                            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <span className="block text-2xl font-bold text-secondary">+100</span>
                                    <span className="text-xs text-white/50">جهة مهتمة</span>
                                </div>
                                <div>
                                    <span className="block text-2xl font-bold text-accent">{remainingDays}</span>
                                    <span className="text-xs text-white/50">{getDayLabel(remainingDays)}</span>
                                </div>
                                <div>
                                    <span className="block text-2xl font-bold text-white">24/7</span>
                                    <span className="text-xs text-white/50">دعم فني</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
