import SpeakerCard from "./components/SpeakerCard.jsx";
import React from "react";

const speakers = [
    {
        topic: "",
        name: "Professor Jon Whittle",
        position: "Managing Director",
        group: "",
        organization: "CSIRO's Data61",
        profileImage: "/speaker/jon.png",
    },
    {
        topic: "",
        name: "Dr. Chetan Arora",
        position: "Director of Education",
        group: "Software Systems and Cybersecurity",
        organization: "Monash University",
        profileImage: "/speaker/chetan.jpg",
    },
    {
        topic: "",
        name: "Dr. Qinghua Lu",
        position: "Group Leader",
        group: "Software System Research Group",
        organization: "CSIRO's Data61",
        profileImage: "/speaker/qinghua.jpg",
    },
    {
        topic: "",
        name: "Ben Kereopa-Yorke",
        position: "Senior Security Consultant",
        group: "Artificial Intelligence",
        organization: "NBN",
        profileImage: "/speaker/ben.avif",
    },
    {
        topic: "",
        name: "Professor Aldeida Aleti",
        position: "Professor of Software Engineering",
        group: "",
        organization: "Monash University",
        profileImage: "/speaker/aldeida.jpg",
    },
    {
        topic: "",
        name: "Dr. Joey (Joselito) Chua",
        position: "Head of AI Engineering & Operations",
        group: "",
        organization: "Transurban",
        profileImage: "/speaker/joey.jpeg",
    },
    {
        topic: "",
        name: "Dr. Naim Rastgoo",
        position: "CTO & Head of AI",
        group: "",
        organization: "AIHUB",
        profileImage: "/speaker/naim.jpeg",
    },
    {
        topic: "",
        name: "Dr. Cristina Cifuentes",
        position: "Vice President",
        group: "Software Assurance",
        organization: "Oracle",
        profileImage: "/speaker/cristina.jpg",
    },
    {
        topic: "",
        name: "A/Professor Scott Barnett",
        position: "Deputy Head",
        group: "Translational Research and Commercialisation",
        organization: "Deakin University",
        profileImage: "/speaker/scott.jpeg",
    },
    {
        topic: "",
        name: "A/Professor Sherlock Licorish",
        position: "Associate Professor",
        group: "",
        organization: "University of Otago",
        profileImage: "/speaker/sherlock.jpg",
    },
    {
        topic: "",
        name: "A/Professor Jens Dietrich",
        position: "Associate Professor",
        group: "School of Engineering and Computer Science",
        organization: "Victoria University of Wellington Te Herenga Waka",
        profileImage: "/speaker/jens.png",
    },
    // {
    //     topic: "",
    //     name: "A/Professor Kelly Blincoe",
    //     position: "Associate Professor",
    //     group: "Software Engineering Lab",
    //     organization: "University of Auckland",
    //     profileImage: "/speaker/kelly.png",
    // },
    {
        topic: "",
        name: "Dr. Valerio Terragni",
        position: "Senior Lecturer",
        group: "",
        organization: "University of Auckland",
        profileImage: "/speaker/valerio.png",
    },
    // {
    //     topic: "",
    //     name: "Yongqiang Tian",
    //     position: "researcher",
    //     group: "software engineering",
    //     organization: "Monash University",
    //     profileImage: "/speaker/yongqiang.jpg",
    // },
    // {
    //     topic: "",
    //     name: "Dr. Tingting Bi",
    //     position: "Lecturer",
    //     group: "Software Engineering",
    //     organization: "University of Melbourne",
    //     profileImage: "/speaker/tingting.jpeg",
    // },
    {
        topic: "",
        name: "Professor Rashina Hoda",
        position: "Professor",
        group: "Software Engineering",
        organization: "Monash University",
        profileImage: "/speaker/rashina.jpg",
    },
];

const SpeakersSection = ({id}) => {
    return (
        <section id={id} className="pt-24 pb-6 bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="max-w-6xl w-full">
                    <p className="text-3xl sm:text-4xl font-bold text-left">Speakers</p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Enhanced header */}
                <div className="text-center mb-20">
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Learn from world-renowned experts in software engineering and AI who will share their
                        groundbreaking insights and transformative experiences at OzSE 2026.
                    </p>
                </div>

                {/* Enhanced grid with staggered animation effect */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    {speakers.map((speaker, index) => (
                        <div
                            key={index}
                            className="animate-fade-in"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <SpeakerCard speaker={speaker} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpeakersSection;