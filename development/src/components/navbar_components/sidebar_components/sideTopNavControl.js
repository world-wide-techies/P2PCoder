'use client';
import Image from 'next/image';
import Link from 'next/link';

function SideTopNavControl() {
  return (
    <div className="flex flex-col justify-start items-center space-y-2">
      <Link
        href={'/?view=quicklinks'}
        className="hover:bg-gray-200 dark:hover:bg-gray-700 w-16 h-16 flex items-center justify-center hover:rounded-lg">
        <Image
          src={'/assets/sideTopNavBar/add.png'}
          width={35}
          height={35}
          alt="nav_btn_iconadd"
        />
      </Link>
    </div>
  );
}

export default SideTopNavControl;
