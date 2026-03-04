import { useState, useEffect, useRef } from "react";

const IMAGE_BASE_PATH = "/top-recruiters/";

const recruiters = [
    { name: "Apollo", file: "apollo.png", sector: "Healthcare" },
    { name: "Avankia", file: "avankia.png", sector: "Technology" },
    { name: "Godrej", file: "godrej.png", sector: "Conglomerate" },
    { name: "HDFC", file: "hdfc.png", sector: "Banking" },
    { name: "ICICI", file: "icici.png", sector: "Banking" },
    { name: "Mahindra", file: "mahindra.png", sector: "Automotive" },
    { name: "Netwin", file: "netwin.png", sector: "Technology" },
    { name: "Quick", file: "quick.png", sector: "Logistics" },
    { name: "SBI", file: "sbi.png", sector: "Banking" },
    { name: "Tata", file: "tata.png", sector: "Conglomerate" },
    { name: "UMS", file: "ums.png", sector: "Services" },
    { name: "WNS", file: "wns.png", sector: "BPO" },
    { name: "Yes Bank", file: "yes.png", sector: "Banking" },
];

const doubled = [...recruiters, ...recruiters];

function LogoCard({ name, file, size = 64 }) {
    const [imgError, setImgError] = useState(false);
    const initials = name.slice(0, 2).toUpperCase();

    return (
        <div
            className="flex items-center justify-center overflow-hidden flex-shrink-0 bg-white border border-green-100 shadow-sm transition-transform duration-300"
            style={{ width: size, height: size, borderRadius: size * 0.2 }}
        >
            {!imgError ? (
                <img
                    src={`${IMAGE_BASE_PATH}${file}`}
                    alt={name}
                    onError={() => setImgError(true)}
                    style={{ width: size * 0.75, height: size * 0.75, objectFit: "contain" }}
                />
            ) : (
                <span
                    className="font-extrabold text-green-800 tracking-wide"
                    style={{ fontSize: size * 0.28 }}
                >
                    {initials}
                </span>
            )}
        </div>
    );
}

function TopRecruiters() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

                .tr-font { font-family: 'Poppins', sans-serif; }

                /* Dot grid background */
                .tr-dotgrid::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(circle, #b2dfdb 1px, transparent 1px);
                    background-size: 30px 30px;
                    opacity: 0.35;
                    pointer-events: none;
                }

                /* Accent bar shimmer */
                .tr-bar {
                    background: linear-gradient(90deg, #1a7a3c 0%, #43a047 40%, #aed581 60%, #43a047 80%, #1a7a3c 100%);
                    background-size: 300% 100%;
                    animation: barShimmer 4s linear infinite;
                }
                @keyframes barShimmer {
                    from { background-position: 0 0; }
                    to   { background-position: 300% 0; }
                }

                /* Blinking dot */
                .tr-blink { animation: blink 2s ease-in-out infinite; }
                @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }

                /* Underline reveal */
                .tr-underline::after {
                    content: '';
                    position: absolute;
                    bottom: -3px; left: 0; right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #1a7a3c, #66bb6a);
                    border-radius: 2px;
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.6s ease 0.9s;
                }
                .tr-underline.show::after { transform: scaleX(1); }

                /* Marquee */
                .tr-marquee-track {
                    display: flex;
                    gap: 16px;
                    width: max-content;
                    padding: 12px 0;
                    animation: scrollLeft 35s linear infinite;
                }
                .tr-marquee-track:hover { animation-play-state: paused; }
                @keyframes scrollLeft {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }

                /* Fade-in helpers */
                .tr-fade { opacity: 0; transform: translateY(14px); transition: opacity 0.6s ease, transform 0.6s ease; }
                .tr-fade.show { opacity: 1; transform: translateY(0); }
                .tr-fade-d1 { transition-delay: 0.1s; }
                .tr-fade-d2 { transition-delay: 0.2s; }
                .tr-fade-d4 { transition-delay: 0.4s; }
                .tr-fade-d55 { transition-delay: 0.55s; }
                .tr-fade-d13 { transition-delay: 1.3s; }

                /* Card bottom bar */
                .tr-gcard::after {
                    content: '';
                    position: absolute;
                    bottom: 0; left: 0; right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #1a7a3c, #66bb6a);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.3s ease;
                }
                .tr-gcard:hover::after { transform: scaleX(1); }
            `}</style>

            <section
                ref={sectionRef}
                className="tr-font tr-dotgrid relative bg-[#f7fdf9] py-16 overflow-hidden"
            >
                {/* Accent Bar */}
                <div className="tr-bar absolute top-0 left-0 right-0 h-[5px] z-10" />

                <div className="relative z-10 max-w-6xl mx-auto px-8">

                    {/* ── Header ── */}
                    <div className="text-center mb-12">

                        {/* Eyebrow */}
                        <div className={`tr-fade tr-fade-d1 ${visible ? "show" : ""} inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-5 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase text-green-800 mb-5`}>
                            <span className="tr-blink w-[7px] h-[7px] bg-green-500 rounded-full inline-block" />
                            Placement Partners
                        </div>

                        {/* Title */}
                        <h2 className={`tr-fade tr-fade-d2 ${visible ? "show" : ""} text-4xl font-extrabold text-gray-900 leading-tight mb-3`}>
                            Our{" "}
                            <span className={`tr-underline ${visible ? "show" : ""} text-green-800 relative inline-block`}>
                                Top Recruiters
                            </span>
                        </h2>

                        {/* Description */}
                        <p className={`tr-fade tr-fade-d4 ${visible ? "show" : ""} text-sm text-gray-500 max-w-xl mx-auto leading-relaxed`}>
                            Leading organizations that consistently hire talented graduates
                            from Brahma Valley College of Engineering &amp; Research Institute
                        </p>

                    </div>
                </div>

                {/* ── Marquee (full width) ── */}
                <div className="relative overflow-hidden mt-2
                    before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:w-24 before:bg-gradient-to-r before:from-[#f7fdf9] before:to-transparent before:z-10 before:pointer-events-none
                    after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:w-24 after:bg-gradient-to-l after:from-[#f7fdf9] after:to-transparent after:z-10 after:pointer-events-none">
                    <div className="tr-marquee-track">
                        {doubled.map((r, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center gap-2.5 bg-white border border-green-100 rounded-2xl px-4 py-5 w-36 flex-shrink-0 cursor-pointer shadow-sm
                                    hover:border-green-500 hover:shadow-lg hover:-translate-y-1.5 hover:scale-[1.03] transition-all duration-300"
                            >
                                <LogoCard name={r.name} file={r.file} size={64} />
                                <span className="text-[13px] font-semibold text-gray-800 text-center">{r.name}</span>
                                <span className="text-[10px] font-semibold text-green-700 bg-green-50 px-2.5 py-0.5 rounded-full">{r.sector}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    );
}

export default TopRecruiters;