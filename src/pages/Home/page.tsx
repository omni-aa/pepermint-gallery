import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Palette, Camera, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home: React.FC = () => {
    const navigate = useNavigate();

    const featuredStats = [
        { number: '50+', label: 'Artworks Created', icon: Palette },
        { number: '25+', label: 'Cosplay Projects', icon: Camera },
        { number: '3', label: 'Years Creating', icon: Heart },
        { number: '15+', label: 'Characters Brought to Life', icon: Zap },
    ];

    const recentWork = [
        {
            title: 'Cyber Samurai',
            category: 'Cosplay',
            image: 'https://images.unsplash.com/photo-1578632749014-ca77efd052eb?w=400&h=500&fit=crop',
            tags: ['cyberpunk', 'armor', 'photography']
        },
        {
            title: 'Ethereal Mage',
            category: 'Artwork',
            image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop',
            tags: ['digital', 'fantasy', 'magic']
        },
        {
            title: 'Neon Dreams',
            category: 'Artwork',
            image: 'https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?w=400&h=500&fit=crop',
            tags: ['cyberpunk', 'character', 'neon']
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            {/* Badge */}
                            <div className="inline-flex items-center space-x-2 bg-muted/50 border rounded-full px-4 py-2 mb-8">
                                <Sparkles className="h-4 w-4 text-blue-500" />
                                <span className="text-sm font-medium">Digital Artist & Cosplayer</span>
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6">
                                Creative
                                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Visionary
                </span>
                            </h1>

                            {/* Subtitle */}
                            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                                Bringing characters to life through digital art and cosplay.
                                Explore a world where imagination meets reality.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Button
                                    onClick={() => navigate('/gallery')}
                                    size="lg"
                                    className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                >
                                    <span>View Gallery</span>
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>

                                <Button
                                    onClick={() => navigate('/about')}
                                    variant="outline"
                                    size="lg"
                                    className="px-8 py-6 rounded-full font-medium text-lg border-2"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {featuredStats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <Card key={index} className="text-center border-0 bg-background/50 backdrop-blur-sm">
                                        <CardContent className="p-6">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <Icon className="h-6 w-6 text-white" />
                                            </div>
                                            <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-border rounded-full mt-2 animate-bounce" />
                    </div>
                </div>
            </section>

            {/* Featured Work Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light tracking-tight mb-4">Featured Work</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            A glimpse into my latest creative projects and character explorations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {recentWork.map((work, index) => (
                            <Card key={index} className="group overflow-hidden border-0 bg-background hover:shadow-xl transition-all duration-300 cursor-pointer">
                                <div className="aspect-[3/4] overflow-hidden">
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-semibold">{work.title}</h3>
                                        <span className={`px-3 py-1 rounded-full text-xs ${
                                            work.category === 'Artwork'
                                                ? 'bg-blue-100 text-blue-800'
                                                : 'bg-pink-100 text-pink-800'
                                        }`}>
                      {work.category}
                    </span>
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                        {work.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {tag}
                      </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button
                            onClick={() => navigate('/gallery')}
                            variant="outline"
                            size="lg"
                            className="rounded-full px-8 py-6 text-lg"
                        >
                            View All Projects
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-light tracking-tight mb-4">
                        Ready to Explore More?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Dive into the complete collection of digital artworks and cosplay photography.
                        Discover the stories behind each character and creation.
                    </p>
                    <Button
                        onClick={() => navigate('/gallery')}
                        size="lg"
                        variant="secondary"
                        className="rounded-full px-8 py-6 text-lg bg-white text-blue-600 hover:bg-blue-50"
                    >
                        Enter the Gallery
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Home;