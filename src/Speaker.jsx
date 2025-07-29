import SpeakerCard from "./components/SpeakerCard.jsx";

const speakers = [
    {
        topic: "",
        name: "Dr. Jon Whittle",
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
        name: "Qinghua Lu",
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
        name: "Naim Rastgoo",
        position: "Senior Research Fellow",
        group: "",
        organization: "Monash University",
        profileImage: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=frUTKSgAAAAJ&citpid=2",
    },
    // {
    //     topic: "",
    //     name: "To be announced",
    //     position: "To be announced",
    //     group: "",
    //     organization: "Atlassian",
    //     profileImage: "https://media.licdn.com/dms/image/v2/D4E0BAQGeyLL6crkJKg/company-logo_200_200/company-logo_200_200/0/1735593604612/atlassian_logo?e=1756339200&v=beta&t=43sGwXT6PZa1xN_zQ-64ck4TJTMivPImJYwY5tqV2-g",
    // },
    // {
    //     topic: "",
    //     name: "To be announced",
    //     position: "To be announced",
    //     group: "",
    //     organization: "Transurban",
    //     profileImage: "https://media.licdn.com/dms/image/v2/C4D0BAQELYJ1Z0b4Rrw/company-logo_200_200/company-logo_200_200/0/1631303830154?e=1756339200&v=beta&t=_sa1ZknfQDH9pwvj0lL9nCsVcPq1Bvb50sD4G-QaY2I",
    // },
];

const SpeakersSection = ({id}) => {
    return (
        <section id={id} className="pt-24 pb-6 bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Enhanced header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">
              Meet Our Experts
            </span>
                    </div>
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