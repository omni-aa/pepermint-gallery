import type {Artwork} from "@/types";

export const artworkData: Artwork[] = [
    {
        id: '1',
        title: 'Neon Dreams',
        description: 'Cyberpunk character illustration with neon aesthetics',
        imageUrl: 'https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?w=800&h=1000&fit=crop',
        category: 'artwork',
        tags: ['digital', 'cyberpunk', 'character', 'neon'],
        date: '2024-01-15',
        featured: true,
        aspectRatio: 'portrait'
    },
    {
        id: '2',
        title: 'Cyber Samurai',
        description: 'Futuristic samurai cosplay photography',
        imageUrl: 'https://images.unsplash.com/photo-1578632749014-ca77efd052eb?w=800&h=1000&fit=crop',
        category: 'cosplay',
        tags: ['cyberpunk', 'armor', 'futuristic', 'photography'],
        date: '2024-01-10',
        featured: true,
        aspectRatio: 'portrait'
    },
    {
        id: '3',
        title: 'Ethereal Mage',
        description: 'Fantasy mage digital painting',
        imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop',
        category: 'artwork',
        tags: ['digital', 'fantasy', 'magic', 'character'],
        date: '2024-01-08',
        aspectRatio: 'square'
    },
    {
        id: '4',
        title: 'Forest Spirit',
        description: 'Nature spirit cosplay in woodland setting',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
        category: 'cosplay',
        tags: ['fantasy', 'nature', 'photography', 'makeup'],
        date: '2024-01-05',
        aspectRatio: 'landscape'
    }
];