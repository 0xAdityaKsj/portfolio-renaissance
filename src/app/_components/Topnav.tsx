"use client"
import Link from 'next/link'
import { motion } from "framer-motion"

export default function Topnav() {
    return (
        <motion.header
            className="header container"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Link href="/" className="home-link">
                <motion.h1
                    className="site-title"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    Aditya Kantipudi
                </motion.h1>
            </Link>
            <nav className="nav">
                <div className="nav-links-container">
                    {[
                        { href: "/works", text: "Works" },
                        { href: "/thoughts", text: "Thoughts" },
                        { href: "/contact", text: "Contact" }
                    ].map((link, i) => (
                        <motion.div
                            key={link.href}
                            className="nav-item"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 + 0.5 }}
                        >
                            <Link href={link.href} className="nav-link">
                                {link.text}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </nav>
        </motion.header>
    )
}