import React, { useState } from 'react';
import { Search, Filter, X, Expand } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import type { Artwork, GalleryFilter } from "@/types";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryProps {
    artworks: Artwork[];
}

const Gallery: React.FC<GalleryProps> = ({ artworks }) => {
    const [filter, setFilter] = useState<GalleryFilter>({
        category: 'all',
        tags: []
    });
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const allTags = Array.from(new Set(artworks.flatMap(art => art.tags)));

    const filteredArtworks = artworks.filter(artwork => {
        const matchesCategory = filter.category === 'all' || artwork.category === filter.category;
        const matchesTags = filter.tags.length === 0 ||
            filter.tags.some(tag => artwork.tags.includes(tag));
        const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            artwork.description.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesTags && matchesSearch;
    });

    const toggleTag = (tag: string) => {
        setFilter(prev => ({
            ...prev,
            tags: prev.tags.includes(tag)
                ? prev.tags.filter(t => t !== tag)
                : [...prev.tags, tag]
        }));
    };

    const getAspectRatioClass = (aspectRatio?: string) => {
        switch (aspectRatio) {
            case 'portrait': return 'aspect-[3/4]';
            case 'landscape': return 'aspect-[4/3]';
            default: return 'aspect-square';
        }
    };

    return (
        <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-light tracking-tight mb-4">Gallery</h2>
                <p className="text-muted-foreground text-lg">
                    Explore my collection of digital artwork and cosplay photography
                </p>
            </div>

            {/* Filters and Search */}
            <div className="mb-8 space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                    {/* Search */}
                    <div className="relative flex-1 max-w-md w-full">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                            type="text"
                            placeholder="Search artworks..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                        />
                    </div>

                    {/* Category Filter */}
                    <select
                        value={filter.category}
                        onChange={(e) => setFilter(prev => ({ ...prev, category: e.target.value as any }))}
                        className="flex h-10 w-full max-w-[200px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                        <option value="all">All Categories</option>
                        <option value="artwork">Artwork</option>
                        <option value="cosplay">Cosplay</option>
                    </select>

                    {/* Filter Button (Mobile) */}
                    <Button
                        variant="outline"
                        onClick={() => setIsFilterOpen(true)}
                        className="sm:hidden"
                    >
                        <Filter className="h-4 w-4 mr-2" />
                        Filters
                    </Button>
                </div>

                {/* Tags Filter - Desktop */}
                <div className="hidden sm:flex flex-wrap gap-2">
                    {allTags.map(tag => (
                        <Badge
                            key={tag}
                            variant={filter.tags.includes(tag) ? "default" : "outline"}
                            className="cursor-pointer transition-all"
                            onClick={() => toggleTag(tag)}
                        >
                            {tag}
                            {filter.tags.includes(tag) && <X className="h-3 w-3 ml-1" />}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredArtworks.map(artwork => (
                    <div
                        key={artwork.id}
                        onClick={() => setSelectedArtwork(artwork)}
                        className="group relative bg-card rounded-xl border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg"
                    >
                        <div className={`${getAspectRatioClass(artwork.aspectRatio)} overflow-hidden`}>
                            <img
                                src={artwork.imageUrl}
                                alt={artwork.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <Expand className="h-8 w-8 text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-medium text-foreground line-clamp-1">{artwork.title}</h3>
                                <Badge
                                    variant={artwork.category === 'artwork' ? "default" : "secondary"}
                                    className="text-xs"
                                >
                                    {artwork.category}
                                </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                                {artwork.description}
                            </p>
                            <div className="flex flex-wrap gap-1">
                                {artwork.tags.slice(0, 2).map(tag => (
                                    <span key={tag} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                                {artwork.tags.length > 2 && (
                                    <span className="text-xs text-muted-foreground">
                                        +{artwork.tags.length - 2}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredArtworks.length === 0 && (
                <div className="text-center py-16">
                    <div className="text-muted-foreground mb-4">No artworks found</div>
                    <Button
                        variant="outline"
                        onClick={() => {
                            setFilter({ category: 'all', tags: [] });
                            setSearchTerm('');
                        }}
                    >
                        Clear filters
                    </Button>
                </div>
            )}

            {/* Filter Sheet (Mobile) */}
            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6 space-y-4">
                        <div className="flex flex-wrap gap-2">
                            {allTags.map(tag => (
                                <Badge
                                    key={tag}
                                    variant={filter.tags.includes(tag) ? "default" : "outline"}
                                    className="cursor-pointer"
                                    onClick={() => toggleTag(tag)}
                                >
                                    {tag}
                                    {filter.tags.includes(tag) && <X className="h-3 w-3 ml-1" />}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </SheetContent>
            </Sheet>

            {/* Image Dialog */}
            <Dialog open={!!selectedArtwork} onOpenChange={() => setSelectedArtwork(null)}>
                <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
                    {selectedArtwork && (
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:flex-1">
                                <img
                                    src={selectedArtwork.imageUrl}
                                    alt={selectedArtwork.title}
                                    className="w-full h-auto max-h-[70vh] object-contain"
                                />
                            </div>
                            <div className="lg:w-80 p-6 border-t lg:border-t-0 lg:border-l">
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{selectedArtwork.title}</h3>
                                        <Badge variant={selectedArtwork.category === 'artwork' ? "default" : "secondary"}>
                                            {selectedArtwork.category}
                                        </Badge>
                                    </div>
                                    <p className="text-muted-foreground">{selectedArtwork.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedArtwork.tags.map(tag => (
                                            <Badge key={tag} variant="outline" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Created: {new Date(selectedArtwork.date).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Gallery;