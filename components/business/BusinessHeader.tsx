"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function BusinessHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <Link href="/" className="text-xl font-display font-bold hover:text-foreground/80 transition-colors">
            Eufrásio Jaime
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#why-me" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Why Me
            </a>
            <a href="#case-studies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Case Studies
            </a>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-2 rounded-full hover:bg-foreground/90 transition-all text-sm font-medium"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-4">
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Services
            </a>
            <a
              href="#why-me"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Why Me
            </a>
            <a
              href="#case-studies"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Case Studies
            </a>
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Portfolio
            </Link>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-full hover:bg-foreground/90 transition-all text-sm font-medium"
            >
              Get in Touch
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
