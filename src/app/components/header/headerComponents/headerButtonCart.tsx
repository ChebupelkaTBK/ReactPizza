import React from 'react';
import Image from "next/image";
import CartImage from "@/app/images/headerCart.png";

export default function HeaderButtonCart() {
    return (
        <button className="flex flex-row items-center justify-between px-10 w-37.5 h-12.5 bg-[#FE5F1E] rounded-[30px] text-white">
            <p>0 ₽</p>
            <div className="w-px h-6 bg-white"></div>
            <div className="flex flex-row">
                <Image src={CartImage} alt="cart image" width={16} height={16} />
                <p>3</p>
            </div>
        </button>
    );
}
