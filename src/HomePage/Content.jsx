import React from "react";
// Import the group photo directly
import groupPhoto from "../assets/gallery/DSC06065.JPG";

function Content({ id }) {
    return (
        <div
            className="flex flex-col items-center justify-center space-y-8 px-4"
            id={id}
        >
            <div
                className="flex flex-col pt-12 pb-6 space-y-8 md:px-4 md:text-lg max-w-6xl w-full"
            >
                {/* Event Photo */}
                <div className="w-full mb-6 relative group">
                    <img
                        src={groupPhoto}
                        alt="OzSE Event"
                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                    <button
                        onClick={() => {
                            const imageSrc = groupPhoto;
                            const imageName = "OzSE-Group-Photo.jpg";
                            fetch(imageSrc)
                                .then(response => response.blob())
                                .then(blob => {
                                    const url = window.URL.createObjectURL(blob);
                                    const link = document.createElement("a");
                                    link.href = url;
                                    link.download = imageName;
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                    window.URL.revokeObjectURL(url);
                                })
                                .catch(error => {
                                    console.error("Download failed:", error);
                                    window.open(imageSrc, "_blank");
                                });
                        }}
                        className="absolute top-4 right-4 bg-white/90 hover:bg-white text-[#000F46] p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
                        title="Download photo"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                        </svg>
                    </button>
                </div>

                <p>
                    The <b>Australian Summer School in Software Engineering (OzSE)</b> aims to tackle these challenges by serving as a three-way connection hub that brings together graduate students, researchers, and industry leaders across Australia. OzSE will serve as a platform to foster collaboration, focusing on practical and emerging issues in AI-embedded software engineering. Through a dynamic program of keynote speakers, talks, and networking sessions, OzSE aims to meet the following objectives:
                </p>
                <br />
                <div className="pl-4 md:pl-12">
                    <ul className="list-decimal">
                        <li>
                            <b>Foster meaningful academic-industry engagement</b> to tackle real-world software engineering challenges.
                        </li>
                        <li>
                            <b>Advanced knowledge and skills</b> through expert-led lectures, hands-on workshops, and applied learning experiences.
                        </li>
                        <li>
                            <b>Build a SE community to</b> foster long-term collaboration to create capacity in the Australian software engineering ecosystem.
                        </li>
                        <li>
                            <b>Inspire the next generation</b> to pursue impactful research and careers in software engineering.
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className="flex flex-col space-y-8 md:px-4"
            >
                <div
                    className="flex flex-col pt-12 pb-6 space-y-8 md:px-4 md:text-lg"
                >
                    <p className="text-3xl sm:text-4xl font-bold text-left">Why Attend OzSE?</p>

                    <div className="w-full max-w-6xl">
                        <p>
                            OzSE offers a rare and valuable opportunity for Australian talent to access the latest in software engineering research. Designed to be inclusive and impactful, the event brings cutting-edge knowledge directly to graduate students, early-career researchers, and industry professionals, especially those with limited exposure to advanced software engineering practices.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col pt-12 space-y-8 md:px-4 sm:px-0">
                    <p className="text-3xl sm:text-4xl font-bold text-left">Who Should Attend</p>

                    <div className="w-full max-w-6xl md:text-lg">
                        <ul className="list-disc pl-4">
                            <li>
                                <b>Postgraduate Students (Honours and Master’s):</b> Discover the world of software engineering research and explore potential pathways into a PhD. OzSE is an ideal starting point for those new to the field and eager to learn more.
                            </li>
                            <li>
                                <b>PhD Students:</b> Deepen your technical skills in software engineering and AI, and learn how to apply them to real-world, industry-relevant problems.
                            </li>
                            <li>
                                <b>Academics and Researchers:</b> Expand your expertise in emerging topics, strengthen your academic profile, and build long-term collaborations with leading industry and practitioners.
                            </li>
                            <li>
                                <b>Industry Practitioners:</b> Gain insight into state-of-the-art academic developments, explore how research can be applied to your organisation’s challenges, and connect with a network of innovators at the research–practice interface.
                            </li>
                        </ul>
                        <br />
                        <p>
                            OzSE is where research potential meets practical impact—don’t miss the chance to be part of this growing community.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
