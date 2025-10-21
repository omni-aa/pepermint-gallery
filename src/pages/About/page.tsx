import React from 'react';

const About: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-16 mt-16">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-4xl font-light tracking-tight mb-6">About Me</h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                    <p>
                        I'm a passionate digital artist and cosplayer dedicated to bringing creative
                        visions to life. My work explores the intersection of traditional artistry
                        and modern technology.
                    </p>
                    <p>
                        Each piece represents a unique story and a labor of love, spanning various
                        genres including cyberpunk, fantasy, and character design.
                    </p>
                    <p>
                        When I'm not creating digital art, you can find me crafting detailed cosplay
                        costumes and bringing characters to life through photography.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <div className="space-y-2">
                        <h3 className="font-semibold text-lg">Digital Art</h3>
                        <p className="text-muted-foreground">
                            Character designs, illustrations, and concept art created with modern digital tools.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-semibold text-lg">Cosplay</h3>
                        <p className="text-muted-foreground">
                            Detailed costume creation, makeup, and photography to bring characters to life.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-semibold text-lg">Photography</h3>
                        <p className="text-muted-foreground">
                            Professional photoshoots showcasing cosplay work in various settings and themes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;