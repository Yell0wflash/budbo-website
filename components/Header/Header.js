import Image from "next/image";
import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <nav className="w-full fixed top-0 z-50 select-none bg-white/70 backdrop-blur-xl transition-all duration-300">
      <div className="hidden md:flex py-[8px] px-[18px] md:px-[48px] row-auto justify-between border-b-[1px] border-secondary-graylight">
        <button className="py-[2px] px-[8px] bg-white border-[1px] text-primary-graydark
        border-secondary-graylight rounded-[8px] text-xs font-sysui font-bold leading-4">+ ADD YOUR LOCATION</button>
        <div className="flex md:gap-[24px] gap-[14px]">
          <div className="hidden lg:flex items-center gap-[8px]">
            <p className="flex text-primary-graydark font-sysui font-bold text-[14px] leading-normal items-center">
              Convert Prices to &nbsp;
              <Image
                src="/logo_ico.svg"
                alt="Bubo icon"
                width={16} height={16}
              />
              &nbsp; BUBO
            </p>
            <label className="relative inline-flex cursor-pointer align-middle">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-[44px] h-[24px] bg-secondary-graylight rounded-full
              peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-['']
              after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full
              after:h-[20px] after:w-[20px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center">
            <p className="flex text-primary-graydark font-sysui text-[14px] leading-[16px]">
              <span className="mr-1 leading-[16px]"><Icon icon="tabler:arrows-double-ne-sw" width="16" height="16"/></span>
              <span className="mr-1 font-bold text-primary-purple">1 BUBO</span>
              <span className="mr-1 font-bold text-black">= 1.4567 USD</span>
              <span className="mr-1">- 24.12</span>
              <span className="mr-1 leading-[16px] font-bold text-secondary-greendark"><Icon icon="typcn:arrow-up-thick" width="16" height="16" /></span>
              <span className="mr-1 font-bold text-secondary-greendark">0.5%</span>
            </p>
          </div>
          <div className="flex items-center gap-2 text-primary-graydark font-sysui text-[14px] leading-[16px]">
            Connect Crypto Wallet
            <Icon icon="streamline:computer-connection-wifi-wireless-wifi-internet-server-network" width="16" height="16" rotate={1}/>
          </div>
        </div>
      </div>
      <div className="py-[24px] px-[18px] md:px-[48px] row-auto flex justify-between border-b-[1px] border-secondary-graylight">
        <div className="flex gap-[24px] h-[48px]">
          <a href="#home" className="hidden md:flex link mt-[-10px]">
            <Image
              src="/logo_txt.svg"
              alt="Logo - Budbo"
              width={145}
              height={65}
            />
          </a>
          <a href="#home" className="flex md:hidden link mt-[-20px] mb-[-20px]">
            <Image
              src="/logo.svg"
              alt="Logo - Budbo"
              objectFit="fill"
              width={100}
              height={100}
            />
          </a>
          <button className="xl:px-[24px] xl:py-[14px] h-[48px] w-[48px] xl:w-max bg-primary-purple10 flex gap-[16px] rounded-[24px] xl:rounded-[8px]
            font-bold text-primary-purple text-[18px] hover:bg-primary-purple50 transition-all justify-center items-center">
            <Image
              src="/cannabis.svg"
              alt="Cannabis Slider Icon"
              width={24}
              height={24}
            />
            <span className="hidden xl:block">Find Perfect Match</span>
          </button>
          <div className="hidden lg:flex relative text-gray-light-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-[16px] pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input className="pl-[48px] px-[24px] py-[14px] h-[48px] max-w-[416px] bg-white border-[1px] border-primary-purple10 gap-[16px] rounded-[8px]
              text-[18px] text-black focus:border-primary-graydark50 focus:outline-none transition-all font-sysui"
              placeholder="Products, retailers & more..." />
          </div>
        </div>
        <div className="flex gap-[32px] h-[48px] items-center">
          <div className="flex gap-[16px] items-center">
            <button className="p-[16px] h-[48px] w-[48px] bg-primary-purple10 flex rounded-full
              hover:bg-primary-purple50 text-primary-purple transition-all">
              <Icon icon="el:user" width="16" height="16" />
            </button>
            <p className="hidden xl:flex text-primary-graydark text-[16px] font-bold transition-all">Login / Register</p>
          </div>
          <button className="hidden xl:flex p-[16px] h-[48px] w-[48px] bg-primary-purple10 rounded-full
            hover:bg-primary-purple50 text-primary-purple transition-all">
            <Icon icon="mdi:heart" width="16" height="16" />
          </button>
          <div className="flex gap-[16px] items-center">
            <button className="p-[16px] h-[48px] w-[48px] bg-primary-purple flex rounded-full
              hover:bg-primary-purple50 text-primary-purple10 transition-all">
              <Icon icon="majesticons:shopping-cart" color="white" width="16" height="16" hFlip={true} />
            </button>
            <p className="hidden xl:flex text-primary-graydark text-[16px] font-medium">0.00 USD</p>
          </div>
          <button className="h-[48px] w-[48px] ml-[-20px] flex md:hidden justify-center items-center rounded-full text-black transition-all">
            <Icon icon="tabler:menu-deep" color="black" width="36" height="36" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
