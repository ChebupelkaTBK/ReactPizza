import React from 'react';
import Image from "next/image";
import HeaderImage from "@/app/images/headerImage.png";

export default function HeaderLogo() {
    return (
        <div className="flex flex-row items-center gap-2">
            <Image src={HeaderImage} alt="Header Image" width={38} height={38} priority />
            <div>
                <h1 className="font-bold">REACT PIZZA</h1>
                <p className="text-gray-500">самая вкусная пицца во вселенной</p>
            </div>
        </div>
    );
}