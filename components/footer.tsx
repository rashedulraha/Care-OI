import Link from "next/link";
import {
  HeartPulse,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-slate-50 dark:bg-slate-950/20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 text-primary mb-4">
              <HeartPulse className="h-6 w-6" />
              <span className="text-xl font-bold tracking-tight">Care.OI</span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground mb-6">
              Compassionate, professional caregiving services for your loved
              ones. We provide baby care, elderly care, and medical assistance
              with a personal touch.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/service/baby-care"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  Baby Care
                </Link>
              </li>
              <li>
                <Link
                  href="/service/elderly-care"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  Elderly Care
                </Link>
              </li>
              <li>
                <Link
                  href="/service/medical-assistance"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  Medical Assistance
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#about"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span className="text-muted-foreground">
                  123 Care Street, Medical District, Health City
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span className="text-muted-foreground">01992284845</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span className="text-muted-foreground">rashedul@care.xyz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Care.OI Platform. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
