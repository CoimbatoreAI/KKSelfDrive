import WhatsAppIcon from "./WhatsAppIcon";
import { motion, AnimatePresence } from "framer-motion";

const FacebookIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.422.165-1.058.361-2.227.413-1.267.059-1.647.07-4.851.07s-3.585-.015-4.85-.074c-1.17-.061-1.805-.256-2.227-.421-.562-.224-.96-.479-1.382-.899-.419-.419-.679-.824-.896-1.38-.165-.422-.361-1.058-.413-2.227-.058-1.267-.07-1.647-.07-4.851s.016-3.585.074-4.85c.061-1.17.256-1.805.421-2.227.224-.562.479-.96.899-1.382.419-.419.824-.679 1.38-.896.422-.165 1.058-.361 2.227-.413 1.267-.058 1.647-.07 4.851-.07zM12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.35.101 2.126.384c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384s1.101-1.384 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126s-1.384-1.101-2.126-1.384c-.765-.296-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324 4.162 4.162 0 010 8.324zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
);

const GmailIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.38l-9 6.75-9-6.75V21H1.5C.65 21 0 20.35 0 19.5v-15c0-.4.15-.75.45-1.05.3-.3.65-.45 1.05-.45H3l9 6.75L21 3h1.5c.4 0 .75.15 1.05.45.3.3.45.65.45 1.05z" />
    </svg>
);

const FloatingSocials = () => {
    const socials = [
        {
            icon: FacebookIcon,
            href: "https://www.facebook.com/share/1Dm5Hyvsrv/",
            color: "bg-[#1877F2]",
            label: "Facebook"
        },
        {
            icon: InstagramIcon,
            href: "https://www.instagram.com/kk_selfdrivecars",
            color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
            label: "Instagram"
        },
        {
            icon: GmailIcon,
            href: "mailto:creativebuddies66@gmail.com",
            color: "bg-[#EA4335]",
            label: "Email"
        },
        {
            icon: WhatsAppIcon,
            href: "https://wa.me/919994557462",
            color: "bg-[#25D366]",
            label: "WhatsApp"
        },
    ];

    return (
        <div className="fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-4">
            <AnimatePresence>
                {socials.map((social, index) => (
                    <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, x: -5 }}
                        className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-premium transition-shadow hover:shadow-2xl ${social.color}`}
                        aria-label={social.label}
                    >
                        <social.icon className="h-6 w-6" />
                    </motion.a>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default FloatingSocials;
