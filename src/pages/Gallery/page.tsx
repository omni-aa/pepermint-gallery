import React from 'react';
import Gallery from "@/components/Gallery.tsx";
import {artworkData} from "@/data/artworkData.ts";


const GalleryPage: React.FC = () => { // Rename this component to avoid naming conflict
    return (
        <div className="pt-16">
            <Gallery artworks={artworkData} /> {/* Use Gallery directly */}
        </div>
    );
};

export default GalleryPage;