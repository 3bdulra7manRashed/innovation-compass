'use client'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Twitter, Linkedin } from 'lucide-react'
import { useRef } from 'react'
import Image from 'next/image'

const quickLinks = [
    { name: 'الرئيسية', href: '#' },
    { name: 'عن المبادرة', href: '#about' },
    { name: 'مجالات التركيز', href: '#impact' },
    { name: 'رحلة المشاركة', href: '#journey' },
    { name: 'الأسئلة الشائعة', href: '#faq' },
]

const contactInfo = [
    { icon: Phone, label: '011 236 2606', href: 'tel:0112362606', dir: 'ltr' as const },
    { icon: Mail, label: 'info@ajch.org.sa', href: 'mailto:info@ajch.org.sa', dir: undefined },
    {
        icon: MapPin,
        label: <span className="lg:whitespace-nowrap">الرياض،<br className="block lg:hidden" /> المملكة العربية السعودية</span>,
        href: undefined,
        dir: undefined
    },
]

const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/innovationmakers-sa', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/innovatmakers?lang=ar', label: 'X (Twitter)' },
]

export function Footer() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <footer
            className="bg-[#1e1b4b] text-white pt-8 lg:pt-12 pb-6 relative overflow-hidden selection:bg-teal-500 selection:text-white"
            ref={ref}
        >
            {/* Subtle Background Elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />

            <div className="container max-w-7xl mx-auto px-4 relative z-10">
                {/* Main Footer Grid - 3 Columns - RTL Order */}
                {/* Adjusted grid cols to give slightly more space to brand column if needed, or keep equal */}
                <div dir="rtl" className="grid grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-12 items-start">

                    {/* Column 1 (Right): Brand & Partners - Spans 2 cols on mobile, 5 on desktop */}
                    <div className="col-span-2 lg:col-span-5 flex flex-col items-center lg:items-start gap-6 mb-2 lg:mb-0">
                        {/* 1. Partner Logos (First - Single Row) */}
                        <div className="flex items-center justify-center lg:justify-start gap-4 flex-wrap sm:flex-nowrap">
                            {/* Innovation Makers Logo (First) */}
                            <div className="bg-white rounded-xl px-4 py-3 shadow-sm border border-white/5 flex flex-col items-center justify-center hover:shadow-md transition-all duration-300 h-[72px] min-w-[140px]">
                                <Image
                                    src="/Logo/innovation-makers.png"
                                    alt="صناع الابتكار"
                                    width={120}
                                    height={48}
                                    className="h-10 w-auto object-contain"
                                />
                            </div>
                            {/* Aljameeh Foundation Logo (Second) */}
                            <div className="bg-white rounded-xl px-4 py-3 shadow-sm border border-white/5 flex flex-col items-center justify-center hover:shadow-md transition-all duration-300 h-[72px] min-w-[140px]">
                                <Image
                                    src="/Logo/aljameeh-org.png"
                                    alt="مؤسسة الجميح الخيرية"
                                    width={120}
                                    height={48}
                                    className="h-10 w-auto object-contain"
                                />
                            </div>
                            {/* Innovation Compass Logo (Third) */}
                            <div className="bg-white rounded-xl px-4 py-3 shadow-sm border border-white/5 flex flex-col items-center justify-center hover:shadow-md transition-all duration-300 h-[72px] min-w-[140px]">
                                <Image
                                    src="/Logo/Innovation-compass-footer-logo.png"
                                    alt="بوصلة الابتكار"
                                    width={120}
                                    height={48}
                                    className="h-10 w-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* 2. Initiative Description (Second - Below Logos) */}
                        <p className="text-white text-base font-semibold leading-8 max-w-lg text-right">
                            مبادرة نوعية لتمكين القطاع غير الربحي في مجال الطفولة والشباب،<br /> لصناعة حراك ابتكاري مستدام.
                        </p>
                    </div>

                    {/* Column 2 (Right on Mobile): Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="col-span-1 lg:col-span-3 lg:pr-12 flex flex-col items-start w-full px-2 lg:px-0"
                    >
                        <h4 className="text-base font-bold text-white mb-4 lg:mb-4 flex items-center gap-2 w-full">
                            <span className="w-1 h-4 bg-secondary rounded-full" />
                            روابط سريعة
                        </h4>

                        <ul className="space-y-3 lg:space-y-2 w-full">
                            {quickLinks.map((link, idx) => (
                                <li key={idx} className="flex justify-start">
                                    <a
                                        href={link.href}
                                        className="text-white/70 hover:text-white hover:translate-x-[-4px] transition-all duration-300 text-sm flex items-center gap-2 group py-1 lg:py-0 w-fit"
                                    >
                                        <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                                        <span>{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 3 (Left on Mobile): Contact & Social */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="col-span-1 lg:col-span-4 flex flex-col items-start w-full px-2 lg:px-0"
                    >
                        <h4 className="text-base font-bold text-white mb-4 lg:mb-4 flex items-center gap-2 w-full">
                            <span className="w-1 h-4 bg-accent rounded-full" />
                            تواصل معنا
                        </h4>

                        {/* Contact List */}
                        <ul className="space-y-3 lg:space-y-3 mb-8 w-full">
                            {contactInfo.map((item, idx) => {
                                const isLink = item.href && item.href !== '#'
                                const Wrapper = isLink ? 'a' : 'div'
                                const props = isLink ? { href: item.href } : {}

                                return (
                                    <li key={idx} className="flex justify-start">
                                        <Wrapper
                                            {...props}
                                            className="group flex items-start gap-3 text-white/70 hover:text-white cursor-pointer transition-all duration-300 hover:translate-x-[-4px] py-1 lg:py-0 w-full"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-secondary/20 flex items-center justify-center text-secondary transition-all duration-300 flex-shrink-0 mt-[-4px]">
                                                <item.icon className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm leading-6" dir={item.dir}>{item.label}</span>
                                        </Wrapper>
                                    </li>
                                )
                            })}
                        </ul>

                        {/* Social Links */}
                        <div className="flex gap-2">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white hover:text-[#1e1b4b] flex items-center justify-center text-white/60 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Divider & Copyright */}
                <div className="border-t border-white/5 mt-10 mb-6" />

                <div className="text-center">
                    <p className="text-white/40 text-xs">
                        © {new Date().getFullYear()} جميع الحقوق محفوظة لمبادرة بوصلة الابتكار.
                    </p>
                </div>
            </div>
        </footer>
    )
}
