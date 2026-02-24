import React, {ReactNode} from 'react';

type HeaderButtonSortOptions = {
    children: ReactNode;
}

export default function HeaderButtonSort({children}: HeaderButtonSortOptions) {
    return (
        <button className="px-6 py-3 rounded-[30px] bg-gray-200">{children}</button>
    );
}
