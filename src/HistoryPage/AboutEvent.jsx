import React from "react";

function AboutEvent() {
    return (
        <div
            className="flex flex-col items-center justify-center space-y-8 px-4"
        >
            <div className="flex flex-col pt-12 pb-6 space-y-8 md:px-4 md:text-lg max-w-6xl w-full">
                <p className="text-3xl sm:text-4xl font-bold text-left">
                    About the Event
                </p>
                <p>
                    <b>Artificial Intelligence (AI)</b>, particularly generative AI techniques, is increasingly used in software engineering practices and embedded in software systems across industry and government, enabling the automation and support of various decision-making. The global AI market is projected to grow substantially annually. Significant investments—including Australia’s A$33.7 million in AI-driven solutions—have been made to harness AI for national and industrial advancement.
                </p>
                <p>
                    The rapid rise of AI-embedded software has widened the gap between academia and industry and highlighted a shortage of software engineers skilled in AI. Addressing this challenge requires closer collaboration between academia and industry to share knowledge, tackle shared issues, and train the next generation to build responsible, reliable software in the AI era.
                </p>
                <p>
                    The <b>Australian Summer School in Software Engineering (OzSE)</b> aims to tackle these challenges by serving as a three-way connection hub that brings together graduate students, researchers, and industry leaders across Australasia. OzSE will serve as a platform to foster collaboration, focusing on practical and emerging issues in AI-embedded software engineering. Through a dynamic program of keynote speakers, talks, and networking sessions, OzSE aims to meet the following objectives:
                </p>
                <div className="pl-4 md:pl-12">
                    <ul className="list-decimal space-y-2">
                        <li>
                            <b>Foster meaningful academic-industry engagement</b> to tackle real-world software engineering challenges.
                        </li>
                        <li>
                            <b>Advance knowledge and skills</b> through expert-led lectures, hands-on workshops, and applied learning experiences.
                        </li>
                        <li>
                            <b>Build a SE community</b> to foster long-term collaboration and create capacity in the Australasian software engineering ecosystem.
                        </li>
                        <li>
                            <b>Inspire the next generation</b> to pursue impactful research and careers in software engineering.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutEvent;
