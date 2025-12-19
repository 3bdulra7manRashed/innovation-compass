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
    { icon: MapPin, label: 'الرياض، المملكة العربية السعودية', href: '#', dir: undefined },
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
            className="bg-[#1e1b4b] text-white pt-16 pb-6 relative overflow-hidden selection:bg-teal-500 selection:text-white"
            ref={ref}
        >
            {/* Subtle Background Elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />

            <div className="container max-w-7xl mx-auto px-4 relative z-10">
                {/* Main Footer Grid - 3 Columns - RTL Order */}
                <div dir="rtl" className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

                    {/* Column 1 (Right): Branding & Partners - Right Aligned */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="space-y-6 text-right"
                    >
                        {/* Logo with Light Background - Right Aligned */}
                        <div className="flex items-center justify-start">
                            <div className="bg-white/90 rounded-xl p-3 inline-block">
                                <Image
                                    src="/InnovationLogo.png"
                                    alt="شعار بوصلة الابتكار"
                                    width={140}
                                    height={45}
                                    className="h-9 w-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* Short Bio - Right Aligned */}
                        <p className="text-white/60 text-sm leading-relaxed">
                            مبادرة نوعية لتمكين القطاع غير الربحي في مجال الطفولة والشباب، لصناعة حراك ابتكاري مستدام.
                        </p>

                        {/* Partners Sub-Grid */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-white/10 hover:border-secondary/30 transition-all duration-300 text-right">
                                <span className="text-[10px] text-secondary mb-1 block font-medium uppercase tracking-wide">الشريك الاستراتيجي</span>
                                <div className="font-bold text-xs text-white/90 leading-relaxed">
                                    مؤسسة عبد العزيز بن عبد الله الجميح الخيرية
                                </div>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-white/10 hover:border-secondary/30 transition-all duration-300 text-right">
                                <span className="text-[10px] text-secondary mb-1 block font-medium uppercase tracking-wide">الشريك الاستشاري</span>
                                <div className="font-bold text-xs text-white/90 leading-relaxed">
                                    صناع الابتكار<br />Innovation Makers
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Column 2 (Center): Quick Links - Fixed Width, Centered */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="flex flex-col items-center md:justify-self-center"
                    >
                        {/* Title - Centered */}
                        <h4 className="text-base font-bold text-white mb-5 flex items-center gap-2">
                            <span className="w-1 h-5 bg-secondary rounded-full" />
                            روابط سريعة
                        </h4>

                        {/* Links - RTL Aligned with Bullets on Right */}
                        <ul dir="rtl" className="flex flex-col space-y-3 w-full max-w-[160px] text-right list-none p-0 m-0">
                            {quickLinks.map((link, idx) => (
                                <li key={idx} className="w-full">
                                    <a
                                        href={link.href}
                                        className="flex items-center gap-2.5 text-white/60 hover:text-secondary transition-colors duration-300 text-sm font-medium w-full py-0.5 group"
                                    >
                                        {/* Bullet on the right (first in RTL flow) */}
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-secondary flex-shrink-0 transition-colors" />
                                        <span>{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 3 (Left in RTL): Contact Info & Social */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="space-y-6 text-right md:text-left"
                    >
                        <h4 className="text-base font-bold text-white mb-5 flex items-center gap-2 justify-end md:justify-start flex-row-reverse md:flex-row">
                            <span className="w-1 h-5 bg-accent rounded-full" />
                            تواصل معنا
                        </h4>

                        {/* Contact List - Aligned */}
                        <ul className="space-y-3">
                            {contactInfo.map((item, idx) => (
                                <li key={idx}>
                                    <a
                                        href={item.href}
                                        className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 justify-end md:justify-start flex-row-reverse md:flex-row"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-secondary/20 flex items-center justify-center text-secondary transition-all duration-300 flex-shrink-0">
                                            <item.icon className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm font-medium" dir={item.dir}>{item.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Social Links - تابعنا على */}
                        <div className="pt-2 text-right">
                            <p className="text-white/40 text-xs mb-3">تابعنا على</p>
                            <div className="flex gap-2 justify-start">
                                {socialLinks.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-lg bg-white/5 hover:bg-secondary flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 border border-white/10 hover:border-secondary"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 mt-12 mb-6" />

                {/* Copyright - Centered */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                >
                    <p className="text-white/40 text-sm">
                        © {new Date().getFullYear()} جميع الحقوق محفوظة لمبادرة بوصلة الابتكار.
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}
