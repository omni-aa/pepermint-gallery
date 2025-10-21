export interface Artwork {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    category: 'artwork' | 'cosplay';
    tags: string[];
    date: string;
    featured?: boolean;
    aspectRatio?: 'square' | 'portrait' | 'landscape';
}

export interface GalleryFilter {
    category: 'all' | 'artwork' | 'cosplay';
    tags: string[];
}