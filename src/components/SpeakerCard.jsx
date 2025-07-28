import { Card, CardContent } from "../components/card.js";

const SpeakerCard = ({ speaker }) => {
    return (
        <Card className="min-h-[500px] relative bg-gradient-to-br from-card to-card/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <CardContent className="relative p-8">
                <div className="flex flex-col items-center text-center space-y-6">
                    <div className="space-y-3 w-full">
                        <h2 className="text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                            {speaker.topic}
                        </h2>
                    </div>
                    {/* Enhanced profile image with multiple effects */}
                    <div className="relative">
                        <div className="w-36 h-36 relative overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1 group-hover:scale-110 transition-transform duration-500">
                            <div className="w-full h-full rounded-full overflow-hidden bg-background">
                                <img
                                    src={speaker.profileImage}
                                    alt={`${speaker.name} profile`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    onError={(e) => {
                                        e.currentTarget.src = '/placeholder.svg';
                                    }}
                                />
                            </div>
                        </div>
                        {/* Floating accent ring */}
                        <div className="absolute -inset-2 rounded-full border-2 border-primary/20 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                    </div>

                    {/* Enhanced content layout */}
                    <div className="space-y-3 w-full">
                        <h3 className="text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                            {speaker.name}
                        </h3>

                        {/* Position with enhanced styling */}
                        <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                            <p className="text-primary font-semibold text-sm uppercase tracking-wide">
                                {speaker.position}
                            </p>
                        </div>

                        {/* Group with subtle styling */}
                        <p className="text-muted-foreground font-medium text-md">
                            {speaker.group}
                        </p>

                        {/* Organization with subtle styling */}
                        <p className="text-muted-foreground font-medium text-lg">
                            {speaker.organization}
                        </p>
                    </div>
                </div>
            </CardContent>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Card>
    );
};

export default SpeakerCard;