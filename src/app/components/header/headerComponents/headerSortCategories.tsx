import React from 'react';
import HeaderButtonSort from "@/app/components/header/headerComponents/headerButtonSort";

export default function HeaderSortCategories() {
    const sortCategories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
    return (
        <div className="flex flex-row gap-5 my-8 mx-16">
            {sortCategories.map((category) => (
                <HeaderButtonSort key={category}>{category}</HeaderButtonSort>
            ))}
        </div>
    );
}

