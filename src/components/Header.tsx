'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronLeft } from 'lucide-react'
import { Button } from './Button'
import { cn } from '@/lib/utils'

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('hero') // Default to hero

    // Track active section including hero
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY

            // If at top of page, hero is active
            if (scrollY < 200) {
                setActiveSection('hero')
                return
            }

            // Check other sections
            const sections = ['about', 'impact', 'journey', 'faq']
            let foundSection = false

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section)
                        foundSection = true
                        break
                    }
                }
            }

            // If no section found and scrolled past hero, keep last active
            if (!foundSection && scrollY < 300) {
                setActiveSection('hero')
            }
        }

        // Run on mount to set initial state
        handleScroll()

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'الرئيسية', href: '/', id: 'hero' },
        { name: 'عن المبادرة', href: '#about', id: 'about' },
        { name: 'مجالات التركيز', href: '#impact', id: 'impact' },
        { name: 'رحلة المشاركة', href: '#journey', id: 'journey' },
        { name: 'الأسئلة الشائعة', href: '#faq', id: 'faq' },
    ]

    const scrollToSection = (href: string) => {
        if (href === '/') {
            // Clean scroll to top without changing URL
            window.scrollTo({ top: 0, behavior: 'smooth' })
            // Clean up any existing hash in URL
            if (window.location.hash) {
                window.history.replaceState(null, '', window.location.pathname)
            }
        } else {
            const element = document.querySelector(href)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md shadow-primary/5 py-4"
        >
            <div className="container max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
                {/* Logo - On the right in RTL */}
                <a
                    href="/"
                    onClick={(e) => { e.preventDefault(); scrollToSection('/'); }}
                    className="flex items-center gap-3 group transition-opacity hover:opacity-90"
                    aria-label="بوصلة الابتكار - الصفحة الرئيسية"
                >
                    <Image
                        src="/InnovationLogo.png"
                        alt="شعار بوصلة الابتكار"
                        width={180}
                        height={56}
                        className="h-12 md:h-14 w-auto object-contain"
                        priority
                    />
                </a>

                {/* Desktop Nav - Shifted towards right with gap */}
                <nav className="hidden lg:flex items-center gap-1 mr-auto ml-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                            className={cn(
                                "relative px-4 py-2 font-medium transition-colors rounded-lg",
                                activeSection === item.id
                                    ? "text-secondary"
                                    : "text-primary/70 hover:text-primary hover:bg-primary/5"
                            )}
                        >
                            {item.name}
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="activeSection"
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-secondary to-accent rounded-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </a>
                    ))}
                </nav>

                {/* CTA Button - On the left in RTL */}
                <div className="hidden lg:block">
                    <Button
                        size="sm"
                        variant="accent"
                        className="gap-2 shadow-lg shadow-accent/30 btn-ripple shine-effect"
                        onClick={() => window.open('https://forms.gle/dJ4HNw8MX6RkEd8E6', '_blank')}
                    >
                        سجل الآن
                        <ChevronLeft className="w-4 h-4" />
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <motion.button
                    className={cn(
                        "lg:hidden p-2 rounded-xl transition-colors",
                        mobileMenuOpen ? "bg-primary text-white" : "text-primary hover:bg-primary/5"
                    )}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    whileTap={{ scale: 0.95 }}
                >
                    <AnimatePresence mode="wait">
                        {mobileMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X className="w-6 h-6" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu className="w-6 h-6" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
                    >
                        <nav className="flex flex-col p-6 gap-2 max-w-7xl mx-auto">
                            {navItems.map((item, idx) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className={cn(
                                        "p-3 rounded-xl font-medium transition-all text-right",
                                        activeSection === item.id
                                            ? "bg-secondary/10 text-secondary"
                                            : "text-primary hover:bg-primary/5"
                                    )}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                        setMobileMenuOpen(false);
                                    }}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Button
                                    className="w-full mt-4 shadow-lg shadow-accent/30"
                                    variant="accent"
                                    onClick={() => { setMobileMenuOpen(false); window.open('https://forms.gle/dJ4HNw8MX6RkEd8E6', '_blank'); }}
                                >
                                    سجل الآن
                                </Button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
