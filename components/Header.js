import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";

const Header = () => {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto text-violet-500'>
            <div className="flex flex-grow justify-evenly  max-w-2xl">
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="ACCOUNT" Icon={UserIcon} />
            </div>
            <Image className='object-contain'
                src="http://links.papareact.com/ua6" width={200} height={100} />
        </header>
    );
}

export default Header


