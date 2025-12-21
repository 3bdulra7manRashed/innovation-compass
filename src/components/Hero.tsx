'use client'
import { motion } from 'framer-motion'
import { Button } from './Button'
import { ArrowLeft, Download, Sparkles, Zap, Target, ChevronDown, Calendar } from 'lucide-react'

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 md:pt-20 pb-12 md:pb-8 overflow-hidden bg-gradient-to-b from-background via-background to-white">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Gradient Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-gradient-to-br from-secondary/20 to-secondary-accent/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-gradient-to-tl from-primary/15 to-accent/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-accent/8 rounded-full blur-[100px] blob"
                />

                {/* Floating Particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-secondary/30 rounded-full"
                        style={{
                            top: `${20 + i * 12}%`,
                            left: `${10 + i * 15}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5,
                        }}
                    />
                ))}

                {/* Grid Pattern */}
                <div className="absolute inset-0 pattern-grid opacity-50" />
            </div>

            <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-right"
                >
                    {/* Main Heading */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight mb-5 md:mb-4 text-shadow-sm">
                        فرصة للجهات المتخصصة في مجال{' '}
                        <span className="relative inline-block">
                            <span className="gradient-text">الطفولة والشباب</span>
                            <motion.svg
                                className="absolute w-full h-4 -bottom-2 left-0 text-accent"
                                viewBox="0 0 200 12"
                                preserveAspectRatio="none"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 1 }}
                            >
                                <motion.path
                                    d="M0 6 Q 50 12 100 6 Q 150 0 200 6"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    fill="none"
                                    strokeLinecap="round"
                                />
                            </motion.svg>
                        </span>
                    </h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-[1.0625rem] md:text-lg text-gray-600 mb-5 md:mb-6 leading-7 md:leading-relaxed max-w-2xl"
                    >
                        للشراكة في ابتكار مبادرات نوعية ضمن مبادرة بوصلة الابتكار، لتمكين الجهات من صناعة الأثر المستدام وبناء حلول مبتكرة.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="flex flex-col sm:flex-row flex-wrap gap-3"
                    >
                        <Button
                            size="lg"
                            variant="primary"
                            className="w-full sm:w-auto gap-3 shadow-2xl shadow-primary/30 hover:shadow-primary/40 group btn-ripple shine-effect"
                            onClick={() => window.open('https://forms.gle/dJ4HNw8MX6RkEd8E6', '_blank')}
                        >
                            الاشتراك في المبادرة
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto gap-3 hover:border-secondary hover:text-secondary group"
                            onClick={() => window.open('https://forms.gle/ZPztq9DvitrEXgnp8', '_blank')}
                        >
                            <Calendar className="w-5 h-5 group-hover:animate-bounce" />
                            التسجيل في اللقاء التعريفي
                        </Button>
                    </motion.div>

                    {/* Quick Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.6 }}
                        className="flex justify-center sm:justify-start gap-5 sm:gap-6 mt-6 sm:mt-4 pt-4 sm:pt-3 border-t border-gray-200/60"
                    >
                        {[
                            { icon: Zap, value: '5', label: 'أشهر مكثفة' },
                            { icon: Target, value: '2', label: 'مبادرة لكل جهة' },
                            { icon: Sparkles, value: '+6', label: 'مراحل تطويرية' },
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                className="text-center group cursor-default"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                                    <stat.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary" />
                                    <span className="text-xl sm:text-2xl font-bold text-primary">{stat.value}</span>
                                </div>
                                <span className="text-xs sm:text-sm text-gray-500">{stat.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Hero Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="relative hidden lg:block"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        {/* Main Card */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 glass rounded-3xl shadow-2xl p-8 flex items-center justify-center z-10 will-change-transform"
                        >
                            {/* Compass Design */}
                            <div className="relative w-72 h-72">
                                {/* Outer Ring */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full border-2 border-dashed border-secondary/30 will-change-transform"
                                />
                                {/* Middle Ring */}
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-4 rounded-full border-2 border-primary/20 will-change-transform"
                                    style={{
                                        background: 'conic-gradient(from 0deg, transparent, rgba(47, 164, 169, 0.1), transparent, rgba(214, 179, 106, 0.1), transparent)'
                                    }}
                                />
                                {/* Inner Rotating Ring */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-8 rounded-full will-change-transform"
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-secondary rounded-full shadow-lg glow" />
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-accent rounded-full shadow-lg glow-accent" />
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-lg" />
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-secondary-accent rounded-full shadow-lg" />
                                </motion.div>
                                {/* Center Content - Logo */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        animate={{ scale: [1, 1.03, 1] }}
                                        transition={{
                                            duration: 10,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="w-32 h-32 flex items-center justify-center motion-reduce:animate-none"
                                    >
                                        <img
                                            src="/Logo/Innovation-compass-logo.png"
                                            alt="بوصلة الابتكار"
                                            className="w-full h-full object-contain drop-shadow-lg"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Cards */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -top-6 -right-6 z-20 glass p-5 rounded-2xl shadow-xl flex items-center gap-4 min-w-[200px] will-change-transform hover-card"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center">
                                <span className="text-accent font-bold text-2xl">5</span>
                            </div>
                            <div>
                                <span className="text-primary font-bold block text-lg">أشهر</span>
                                <span className="text-gray-500 text-sm">مدة البرنامج</span>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -bottom-8 -left-4 z-20 bg-gradient-to-br from-primary to-primary/90 text-white p-5 rounded-2xl shadow-2xl shadow-primary/30 flex items-center gap-4 min-w-[220px] will-change-transform hover-card"
                        >
                            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                <span className="text-white font-bold text-xl">6</span>
                            </div>
                            <div>
                                <span className="font-bold block text-lg">مجالات حيوية</span>
                                <span className="text-white/70 text-sm">للابتكار الاجتماعي</span>
                            </div>
                        </motion.div>

                        {/* Decorative Elements */}
                        <motion.div
                            animate={{ rotate: [0, 180, 360] }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-12 left-8 w-8 h-8 border-2 border-secondary/30 rounded-lg"
                        />
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-16 -right-8 w-4 h-4 bg-accent/40 rounded-full"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-30 group"
            >
                <span className="text-sm text-gray-400 group-hover:text-secondary transition-colors duration-300">اكتشف المزيد</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ChevronDown className="w-5 h-5 text-secondary group-hover:text-primary transition-colors duration-300" />
                </motion.div>
            </motion.a>
        </section>
    )
}
