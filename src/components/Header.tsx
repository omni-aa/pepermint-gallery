import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Palette, Camera, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header: React.FC = () => {
    const location = useLocation();

    const navItems = [
        { id: '/', label: 'Home', icon: Palette },
        { id: '/gallery', label: 'Gallery', icon: Camera },
        { id: '/about', label: 'About', icon: User }
    ];

    return (
        <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Palette className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-xl font-light tracking-tight">Artfolio</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.id;

                            return (
                                <Button
                                    key={item.id}
                                    asChild
                                    variant={isActive ? "secondary" : "ghost"}
                                    className="flex items-center space-x-2 px-4"
                                >
                                    <Link to={item.id}>
                                        <Icon className="h-4 w-4" />
                                        <span>{item.label}</span>
                                    </Link>
                                </Button>
                            );
                        })}
                    </nav>

                    {/* Mobile Navigation */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                            <nav className="flex flex-col space-y-2 mt-8">
                                {navItems.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = location.pathname === item.id;

                                    return (
                                        <Button
                                            key={item.id}
                                            asChild
                                            variant={isActive ? "secondary" : "ghost"}
                                            className="justify-start space-x-3"
                                        >
                                            <Link to={item.id}>
                                                <Icon className="h-4 w-4" />
                                                <span>{item.label}</span>
                                            </Link>
                                        </Button>
                                    );
                                })}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;