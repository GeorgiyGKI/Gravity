
import { useEffect, useState } from "react";
// import {Button} from "../components/Button.tsx";
import { Menu, X } from "lucide-react";



export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
                isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
            }  z-50`}
        >
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a
                    href="#"
                >
                    <img src="/logo.png" alt=""/>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                            <a
                                href="#"
                                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                            >
                                ABOUT US
                            </a>
                        <a
                            href="#"
                            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                        >
                            OUR SERVICES
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                        >
                            WORK WITH US
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                        >
                           BLOG
                        </a>

                    </div>
                </div>
                {/* CTA Button */}
                <div className="hidden md:flex items-center gap-3">
                    <div className="point-grad"/>
                    <p>GET IN TOUCH</p>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-foreground cursor-pointer"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        <a
                            href="#"
                            className="text-lg text-muted-foreground hover:text-foreground py-2"
                        >
                            ABOUT US
                        </a>
                        <a
                            href="#"
                            className="text-lg text-muted-foreground hover:text-foreground py-2"
                        >
                            OUR SERVICES
                        </a>
                        <a
                            href="#"
                            className="text-lg text-muted-foreground hover:text-foreground py-2"
                        >
                            WORK WITH US
                        </a>
                        <a
                            href="#"
                            className="text-lg text-muted-foreground hover:text-foreground py-2"
                        >
                            BLOG
                        </a>
                        {/*<Button onClick={() => setIsMobileMenuOpen(false)}>*/}
                        {/*    Contact Me*/}
                        {/*</Button>*/}
                    </div>
                </div>
            )}
        </header>
    );
};