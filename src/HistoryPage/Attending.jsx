import React from "react";

function Attending({ id }) {
    return (
        <div
            className="flex flex-col items-center justify-center space-y-8 px-4"
            id={id}
        >
            <div className="flex flex-col pt-12 pb-6 space-y-8 md:px-4 md:text-lg max-w-6xl w-full">
                <p className="text-3xl sm:text-4xl font-bold text-left">
                    Why Attend OzSE?
                </p>
                <p>
                    OzSE offers a rare and valuable opportunity for Australasian talent to access the latest in software engineering research. Designed to be inclusive and impactful, the event brings cutting-edge knowledge directly to graduate students, early-career researchers, and industry professionals, especially those with limited exposure to advanced software engineering practices.
                </p>

                <p className="text-3xl sm:text-4xl font-bold text-left">
                    Who Should Attend
                </p>
                <ul className="list-disc pl-4 space-y-2">
                    <li>
                        <b>Postgraduate Students (Honours and Master’s):</b> Discover the world of software engineering research and explore potential pathways into a PhD. OzSE is an ideal starting point for those new to the field and eager to learn more.
                    </li>
                    <li>
                        <b>PhD Students:</b> Deepen your technical skills in software engineering and AI, and learn how to apply them to real-world, industry-relevant problems.
                    </li>
                    <li>
                        <b>Early-Career Researchers:</b> Expand your expertise in emerging topics, strengthen your academic profile, and build long-term collaborations with leading researchers and practitioners.
                    </li>
                    <li>
                        <b>Industry Practitioners:</b> Gain insight into state-of-the-art academic developments, explore how research can be applied to your organisation’s challenges, and connect with a network of innovators at the research–practice interface.
                    </li>
                </ul>

                <p>
                    OzSE is where research potential meets practical impact—don’t miss the chance to be part of this growing community.
                </p>
            </div>
        </div>
    );
}

export default Attending;
