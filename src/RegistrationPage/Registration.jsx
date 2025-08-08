import React from "react";

function Registration({ id }) {

    return (
        <div
            className={`"flex flex-col items-center justify-center space-y-8 px-4 w-full`}
            id={id}
        >
            <div className="flex flex-col pt-12 pb-6 space-y-8 md:px-4 md:text-lg max-w-6xl w-full mx-auto">
                <h3 className="text-3xl sm:text-4xl font-bold text-left">
                    🌏 Call for Registration
                </h3>
                <h4 className="text-2xl sm:text-3xl font-bold text-left">
                    Australian Summer School in Software Engineering (OzSE 2026)
                </h4>
                <p>
                    <br />&#128467; <b>Event Dates: 9–10 February 2026</b>
                    <br />&#128205; <b>Location: Melbourne Connect, Victoria, Australia</b>
                    <br />&#128073; <b>Registration Open: 1–30 September 2025</b>
                </p>
                <p>
                    OzSE is a two-day event designed to connect graduate students, researchers, and industry professionals working at the intersection of software engineering and AI. This year’s theme, Responsible AI, Agentic AI, and Software Engineering, highlights key directions shaping the future of intelligent software. Through keynotes, expert-led sessions, hands-on workshops, and networking, OzSE supports skill-building, collaboration, and innovation in AI-driven software systems.
                </p>
                <p>
                    <b>Who Is OzSE For?</b>
                    <ul className="space-y-1 pl-4 md:pl-8 list-decimal">
                        <li>
                            Postgraduate and PhD students interested in software engineering and AI
                        </li>
                        <li>
                            Researchers at any stage looking to explore new ideas and collaborations
                        </li>
                        <li>
                            Industry practitioners seeking insights from both research and industry practice
                        </li>
                    </ul>
                </p>
                <p>
                    <b>Registration Fees</b>
                    <ul className="space-y-1 pl-4 md:pl-8 list-disc">
                        <li>Regular (Industry/Academics): AUD$450</li>
                        <li>Student: AUD$250</li>
                    </ul>
                    <i>Fee includes full access to the program, workshops, and catering.</i>
                </p>
            </div>
        </div>
    )
}

export default Registration