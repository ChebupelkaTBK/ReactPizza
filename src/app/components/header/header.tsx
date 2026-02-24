import React from 'react';
import HeaderButtonCart from "@/app/components/header/headerComponents/headerButtonCart";
import HeaderLogo from "@/app/components/header/headerComponents/headerLogo";
import HeaderSortCategories from "@/app/components/header/headerComponents/headerSortCategories";

export default function Header() {
    return (
        <header>
            {/*верхний блок*/}
            <div className="flex flex-row items-center justify-between mx-10 pt-10">
                <HeaderLogo/>
                <HeaderButtonCart/>
            </div>

            <div className=" w-[98%] h-px bg-gray-300 mt-10 ml-auto"></div>

            {/*блок категорий*/}
            <HeaderSortCategories/>
        </header>
    );
}
