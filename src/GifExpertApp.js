import React, { useState } from 'react';
import { AddCategorie } from './components/AddCategorie';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <AddCategorie setCategories={setCategories} />
            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};
