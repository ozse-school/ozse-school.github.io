import SpeakerCard from "./components/SpeakerCard.jsx";
import React from "react";

const speakers = [
    {
        topic: "",
        name: "Professor Jon Whittle",
        position: "Managing Director",
        group: "",
        organization: "CSIRO's Data61",
        profileImage: "https://media.licdn.com/dms/image/v2/D5603AQHyqtuXfIPaOQ/profile-displayphoto-shrink_800_800/B56ZcpLsN2GoAc-/0/1748742620619?e=1756339200&v=beta&t=y1wuAun747n4R8OwhoerPCJ2CIRbWfHzraxOm2hfJgI",
    },
    {
        topic: "",
        name: "Dr. Chetan Arora",
        position: "Director of Education",
        group: "Software Systems and Cybersecurity",
        organization: "Monash University",
        profileImage: "https://media.licdn.com/dms/image/v2/D5603AQHmuAOZZAZOHw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681948537270?e=1756339200&v=beta&t=2CZJ6mpXg3bEJDs-EBYeIOuJLX4ZNCAPxACfy7DMm6M",
    },
    {
        topic: "",
        name: "Dr. Qinghua Lu",
        position: "Group Leader",
        group: "Software System Research Group",
        organization: "CSIRO's Data61",
        profileImage: "https://i0.wp.com/research.csiro.au/scs/wp-content/uploads/sites/373/2021/09/QinghuaLu_Photo.jpg?resize=150%2C150&ssl=1",
    },
    {
        topic: "",
        name: "Ben Kereopa-Yorke",
        position: "Senior Security Consultant",
        group: "Artificial Intelligence",
        organization: "NBN",
        profileImage: "https://cdn.prod.website-files.com/67a009cc4f974824eabac86c/684141692a9ab07195e42bad_7157bc391e4641d8bcc802379740eac4.avif",
    },
    {
        topic: "",
        name: "Professor Aldeida Aleti",
        position: "Professor of Software Engineering",
        group: "",
        organization: "Monash University",
        profileImage: "https://media.licdn.com/dms/image/v2/D5603AQG4qbUzY-URLQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698375370752?e=1756944000&v=beta&t=oMjw8okDEA3et8_mBmVcOqpV3T36ouwXl09fIQBKEKI",
    },
    {
        topic: "",
        name: "Dr. Joey (Joselito) Chua",
        position: "Head of AI Engineering & Operations",
        group: "",
        organization: "Transurban",
        profileImage: "https://media.licdn.com/dms/image/v2/C5603AQFI45LFRfCF-Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517573207618?e=1756944000&v=beta&t=RyST_VzUUIZ39IxvUxBZTfZdHVxc8SFxbn530XcFWCs",
    },
    {
        topic: "",
        name: "Dr. Naim Rastgoo",
        position: "CTO & Head of AI",
        group: "",
        organization: "AIHUB",
        profileImage: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=frUTKSgAAAAJ&citpid=2",
    },
    {
        topic: "",
        name: "A/Prof Scott Barnett",
        position: "Deputy Head",
        group: "Translational Research and Commercialisation",
        organization: "Deakin University",
        profileImage: "https://experts.deakin.edu.au/42177-scott-barnett/thumbnail",
    }
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