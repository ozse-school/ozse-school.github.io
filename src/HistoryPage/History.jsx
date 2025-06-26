import React from "react";

function History({ id }) {

    return (
        <div
            className={`"flex flex-col items-center justify-center space-y-8 px-4"`}
            id={id}
        >
            <div className="flex flex-col pt-12 pb-6 space-y-8 md:px-4 md:text-lg max-w-6xl w-full">
                <p className="text-3xl sm:text-4xl font-bold text-left">
                    🌏 History of Software Engineering Seasonal Schools in Australia
                </p>

                <p>
                    The Australian Summer/Winter School in Software Engineering has a proud tradition of bringing together emerging researchers, academics, and industry practitioners to foster deep engagement and collaboration in the field of software engineering.
                </p>

                <p className="text-2xl sm:text-3xl font-semibold text-left">
                    Timeline of Past Events
                </p>

                <ul className="space-y-4 pl-4 md:pl-8 list-disc">
                    <li>
                        <b>2015 – Fall School of Software Engineering</b> hosted by Swinburne University & NICTA<br />
                        The first iteration of the event was launched as the Fall School of Software Engineering, hosted by Swinburne University in collaboration with NICTA. It laid the foundation for a national platform focused on PhD training and research excellence.
                    </li>

                    <li>
                        <b>2017 – Fall School of Software Engineering</b> hosted by Deakin University<br />
                        Deakin University hosted the Fall School on Software Engineering, continuing the effort to build a cohesive research community across Australian universities.
                    </li>

                    <li>
                        <b>2018 – Autumn School on Software Engineering</b> hosted by University of Adelaide<br />
                        Branded as the Autumn School on Software Engineering, the 2018 edition expanded its academic program and attracted a broader set of participants from around the country.
                    </li>

                    <li>
                        <b>2019 – Australian Software Engineering Winter School</b> hosted by University of Technology Sydney (UTS)<br />
                        The event matured into the Australian Software Engineering Winter School in Sydney, with a strong focus on industry collaboration and career development.<br />
                        <i>LinkedIn Recap | Event Website</i>
                    </li>

                    <li>
                        <b>2020–2023</b> – Australia’s software engineering community played a pivotal role in hosting international conferences:
                        <ul className="list-disc pl-6">
                            <li>ICSME 2020, Adelaide, South Australia</li>
                            <li>ASE 2020 & 2021, Melbourne, Victoria</li>
                            <li>RE 2022, Melbourne, Victoria</li>
                            <li>ICSE 2023, Melbourne, Victoria</li>
                        </ul>
                    </li>

                    <li>
                        <b>2024 – Australasian Software Engineering Summer School (ASESS)</b> hosted by UNSW Sydney<br />
                        <i>ASESS 2024 Website</i>
                    </li>

                    <li>
                        <b>2025 – No Event</b><br />
                        Due to scheduling constraints, the school was paused in 2025.
                    </li>

                    <li>
                        <b>2026 – Australian Summer School in Software Engineering (OzSE)</b> hosted by University of Melbourne and Monash University<br />
                        The summer school returns in 2026 with a renewed focus on foundational training, cutting-edge research, and responsible AI in software engineering.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default History;
