



import React, { useEffect } from "react";
import "swiper/css";

const Ourcustomer = () => {


    const sections = [
        {
            id: 1,
            title: "OUR VALUABLE CLIENTS",
            content: {
                en: `AL-MARAFIC –> KSA 
VVD –> INDIA
BWMT -> INDIA
ECO -> UAE
ESW -> UAE
FEWA -> UAE
MARK -> INDIA
APPC -> INDIA
EPPC -> EGYPT
CENTRAL BANK OF NIGERIA
`
            },

        }

    ];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => e.isIntersecting && e.target.classList.add("show"));
        }, { threshold: 0.3 });

        document.querySelectorAll(".section-wrapper").forEach(sec => observer.observe(sec));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="features-page">
            <br />
            <br />
            <br />
            <br />

            {sections.map((item, index) => (
                <div
                    key={item.id}
                    className={`section-wrapper ${index % 2 !== 0 ? "reverse" : ""}`}
                >
                    <br /><br />
                    <svg width="100%" height="40" viewBox="0 0 1000 40" preserveAspectRatio="none">
                        <polyline
                            className="zigzag-line"
                            points="0,38 750,38 760,2 1000,3"
                            fill="none"
                            stroke="#6b7f2a"
                            strokeWidth="3"
                        />
                    </svg>
                    <br /><br />
                    <div className="wm-section" style={{
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <div
                            className="wm-text"
                        >
                            <div className="section-bar">
                                &nbsp; &nbsp;&nbsp;&nbsp;<h2>{item.title}</h2>
                            </div>

                            <p style={{ whiteSpace: "pre-line" }}>
                                {item.content.en}
                            </p>
                            <p>{item.content.ar}</p>
                        </div>
                    </div>
                    <svg width="100%" height="40" viewBox="0 0 1000 40" preserveAspectRatio="none">
                        <polyline
                            className="zigzag-line"
                            points="0,38 750,38 760,2 1000,3"
                            fill="none"
                            stroke="#6b7f2a"
                            strokeWidth="3"
                        />
                    </svg>
                </div>
            ))}
        </div>
    );
}

export default Ourcustomer


