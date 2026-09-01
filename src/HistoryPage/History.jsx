import React from "react";
import { Link } from "react-router-dom";

function History({ id }) {

    return (
        <div
            className={`"flex flex-col items-center justify-center space-y-8 px-4 w-full`}
            id={id}
        >
            <div className="flex flex-col pt-12 pb-6 space-y-8 md:px-4 md:text-lg max-w-6xl w-full mx-auto">
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
                        <b>2003 – IEEE Symposium on Human-Centric Computing Languages and Environments (HCC)</b> hosted in Auckland, New Zealand (John Hosking and Philip Cox)<br />
                        <a href="https://ieeexplore.ieee.org/xpl/conhome/8908/proceeding" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Conference Proceedings</a>
                    </li>

                    <li>
                        <b>2009 – 24th IEEE/ACM International Conference on Automated Software Engineering (ASE)</b> hosted in Auckland, New Zealand (John Grundy)<br />
                        <a href="https://www.se.cs.uni-saarland.de/conferences/ASE/ase2009/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ASE 2009 Website</a>
                    </li>

                    <li>
                        <b>2014 – IEEE Symposium on Visual Languages and Human-Centric Computing (VL/HCC)</b> hosted in Melbourne, Australia (John Grundy and John Hosking)<br />
                        <a href="https://web.archive.org/web/20180217182944/https://sites.google.com/site/vlhcc2014/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">VL/HCC 2014 Website</a>
                    </li>

                    <li>
                        <b>2015 – Fall School of Software Engineering</b> hosted by Swinburne University & NICTA<br />
                        The first iteration of the event was launched as the Fall School of Software Engineering, hosted by Swinburne University in collaboration with NICTA. It laid the foundation for a national platform focused on PhD training and research excellence.
                    </li>

                    <li>
                        <b>2017 – Fall School of Software Engineering</b> hosted by Deakin University<br />
                        Deakin University hosted the Fall School on Software Engineering, continuing the effort to build a cohesive research community across Australian universities.
                    </li>

                    <li>
                        <b>2016 – 23rd Asia-Pacific Software Engineering Conference (APSEC)</b> hosted in Hamilton, New Zealand (Steve Reeves and Jens Dietrich)<br />
                        <a href="https://ieeexplore.ieee.org/xpl/conhome/7889645/proceeding" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">APSEC 2016 Proceedings</a>
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
                        <b>2020–2023</b> – Australia's software engineering community played a pivotal role in hosting international conferences:
                        <ul className="list-disc pl-6">
                            <li>ICSME 2020, Adelaide, South Australia</li>
                            <li>ASE 2020 & 2021, Melbourne, Victoria</li>
                            <li><b>VL/HCC 2020</b> – IEEE Symposium on Visual Languages and Human-Centric Computing hosted in Dunedin, New Zealand (Craig Anslow) – <a href="https://conf.researchr.org/home/vlhcc2020" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">VL/HCC 2020 Website</a></li>
                            <li>RE 2022, Melbourne, Victoria</li>
                            <li><b>SPLASH 2022</b> – ACM SIGPLAN Conference on Systems, Programming, Languages, and Applications: Software for Humanity hosted in Auckland, New Zealand (Alex Potanin) – <a href="https://2022.splashcon.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SPLASH 2022 Website</a></li>
                            <li>ICSE 2023, Melbourne, Victoria</li>
                        </ul>
                    </li>

                    <li>
                        <b>2024 – Australasian Software Engineering Summer School (ASESS)</b> hosted by UNSW Sydney<br />
                        <i>ASESS 2024 Website</i>
                    </li>

                    <li>
                        <b>2025 – ICSME</b> – IEEE International Conference on Software Maintenance and Evolution hosted in Auckland, New Zealand (Amjed Tahir and Steve MacDonell)<br />
                        <a href="https://conf.researchr.org/home/icsme-2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ICSME 2025 Website</a>
                    </li>

                    <li>
                        <b>2026 – Australian Summer School in Software Engineering (OzSE)</b> hosted by University of Melbourne and Monash University<br />
                        The summer school returned in 2026 with a renewed focus on foundational training, cutting-edge research, and responsible AI in software engineering.<br />
                        <Link to="/archive/2026" className="text-blue-600 hover:underline font-medium">
                            View the OzSE 2026 archive (speakers, program, photos &amp; organizers) →
                        </Link>
                    </li>

                    <li>
                        <b>2027 – Australian Summer School in Software Engineering (OzSE)</b> hosted at RMIT University, Melbourne<br />
                        OzSE returns on <b>18–19 February 2027</b> at RMIT University in Melbourne, continuing to bring together students, researchers, and industry across Australasia. Details are being announced on the <Link to="/" className="text-blue-600 hover:underline font-medium">homepage</Link>.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default History;
