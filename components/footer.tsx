import React from 'react';
import Link from 'next/link';
import Image from "next/image"
import { Mail, Phone } from "lucide-react"

const socials = [
    {
        name: "Facebook",
        icon: "facebook",
        url: "https://www.facebook.com/spaceappshurghada",
    },
    {
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://www.linkedin.com/company/spaceappshurghada",
    },
    {
        name: "Instagram",
        icon: "instagram",
        url: "https://www.instagram.com/spaceappshurghada",
    },
    {
        name: "YouTube",
        icon: "youtube",
        url: "https://youtube.com/@spaceappshurghada",
    },
]

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 relative overflow-hidden bg-gray-100" >
            <div
                className="absolute inset-0 opacity-25"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FFFFFF' strokeWidth='0.5' opacity='0.3'%3E%3Cpath d='M0,30 L60,30 M30,0 L30,60'/%3E%3Ccircle cx='30' cy='30' r='10'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2">
                                <Image
                                    src="/img/spaceappshurghada.png"
                                    alt="NASA Space Apps Logo"
                                    width={32}
                                    height={32}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <div className="font-['Fira_Sans'] font-bold">NASA Space Apps Hurghada</div>
                                <div className="text-sm text-[#2E96F5]">2nd Edition - 2025</div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600">
                            NASA Space Apps Challenge is an international hackathon organized by NASA, supported by global
                            collaborators, and hosted locally by volunteer organizers.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-['Fira_Sans'] font-bold text-lg">Contact</h3>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-sm">
                                <Mail className="w-4 h-4 text-[#2E96F5]" />
                                <Link href="mailto:info@spaceappshurghada.info" className="hover:text-[#2E96F5] transition-colors">
                                    info@spaceappshurghada.info
                                </Link>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <Phone className="w-4 h-4 text-[#2E96F5]" />
                                <Link href="tel:+201212145841" className="hover:text-[#2E96F5] transition-colors">
                                    +20 121 214 5841
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-['Fira_Sans'] font-bold text-lg">Follow Us</h3>
                        <div className="flex space-x-4">
                            {socials.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-[#0042A6]/20 rounded-full flex items-center justify-center hover:bg-[#2E96F5]/20 transition-colors"
                                >
                                    <span className="sr-only">{social.name}</span>
                                    <img
                                        src={`/svg/${social.icon}.svg`}
                                        alt={social.name}
                                        className="w-5 h-5"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#0042A6]/20 mt-8 pt-8 text-center">
                    <p className="text-sm text-gray-600">© 2025 NASA Space Apps Hurghada. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
