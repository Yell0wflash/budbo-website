import Image from "next/image";
import { Icon } from '@iconify/react';

const We = () => {
  return (<div className="text-center font-sysui my-[130px]">
    <div>
        <h2 className="text-[60px] leading-4">
            We are
        </h2>
        <h1 className="italic text-[90px] font-medium bg-linear bg-clip-text text-transparent">
            The Premier Online Marketplace
        </h1>
        <p className="text-[30px]">for Recreational and Medical Cannabis - Shop 1000s of local dispensaries</p>
        <div className="flex my-[270px] justify-center items-center">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-[24px] pointer-events-none">
                    <Icon icon="tabler:location-filled" color="#6E2DFA" width="24" height="24" />
                </div>
                <input className="pl-[72px] pr-[240px] px-[24px] py-[28px] w-[773px] bg-white border-none shadow-md flex rounded-l-[12px] rounded-r-[80px]
                text-[18px] text-black focus:outline-none transition-all font-sysui border-0 outline-none"
                    placeholder="Enter your city or address to get started" />
                <button className="absolute inset-y-[12px] right-[12px] flex items-center px-[24px] py-[16px] transition-all
                    rounded-l-[12px] rounded-r-[80px] bg-primary-purple hover:bg-primary-purple50 text-white">
                    Start Shopping ➔
                </button>
            </div>
        </div>
        <div className="absolute top-[8300px] right-[60px] pointer-events-none -z-1">
            <Image
                src="/about/homebook 3.png"
                alt="homebook3"
                width={1002}
                height={480}
            />
        </div>
        <div className="absolute top-[8700px] left-[340px] pointer-events-none -z-1">
            <Image
                src="/about/summary.png"
                alt="summary"
                width={343}
                height={816}
            />
        </div>
        <div className="absolute top-[8900px] right-[-400px] hover:right-[-10px] transition-all duration-1000">
            <Image
                src="/about/reatiler.png"
                alt="reatiler list"
                width={1440}
                height={443}
            />
        </div>
        <div className="absolute top-[8500px] left-[411px] pointer-events-none z-[-2]">
            <Image
                src="/about/circle.svg"
                alt="circle bg"
                width={700}
                height={700}
            />
        </div>
        <div className="absolute top-[9480px] right-[560px] pointer-events-none -z-1">
            <Image
                src="/about/account.png"
                alt="account"
                width={300}
                height={276}
            />
        </div>
        <div className="absolute top-[9650px] right-[185px] pointer-events-none z-[-2]">
            <Image
                src="/about/circle.svg"
                alt="circle bg"
                width={1050}
                height={1050}
            />
        </div>
        <div className="absolute top-[9800px] left-[-26px] pointer-events-none -z-1">
            <Image
                src="/about/retailer.png"
                alt="retailer"
                width={1156}
                height={554}
            />
        </div>
        <div className="absolute top-[9858px] right-[76px] pointer-events-none -z-1">
            <Image
                src="/about/image 495.png"
                alt="image 495"
                width={870}
                height={403}
            />
        </div>
        <div className="absolute top-[10435px] left-1/2 -translate-x-1/2 -z-1">
            <Image
                src="/about/checkout.gif"
                alt="checkout"
                width={1200}
                height={900}
            />
        </div>
        <div className="h-[2680px] w-3/5 border-b-[1px] border-secondary-graylight mx-auto -z-1" />
    </div>
    <div className="pt-[120px] text-center">
        <h2 className="text-[60px] leading-4">
            We are
        </h2>
        <h1 className="italic text-[90px] font-medium bg-linear bg-clip-text text-transparent mb-[120px]">
            Software-as-a-Service
        </h1>
        <Image
            src="/about/connectbook5 2.png"
            alt="connectbook5"
            width={1040}
            height={498}
        />
        <div className="flex justify-center mt-[100px] mb-[26px]">
            <p className="text-[48px] w-[860px]">
                <span>Explosive potential for revenue growth</span>&nbsp;
                <span className="italic font-medium bg-linear bg-clip-text text-transparent">Saas</span>&nbsp;
                <span>through monthly recurring revenue model</span>
            </p>
        </div>
        <div>
            <h3 id="we-revenue-count" className="text-[128px] font-bold italic">1,000+</h3>
            <Image
                className="absolute inset-0 -z-1 object-cover"
                src="/purple line.svg"
                alt="Purple Line"
                width={508}
                height={60}
            />
            <div id="we-revenue-description" className="my-[-74px] z-10 relative">
                <div id="we-revenue-laboratories">
                    <h6 className="text-[30px] font-bold italic text-white">Laboratories</h6>
                    <p className="text-[14px] text-white">($1.1billion global industry CAGR 15.4%)</p>
                </div>
                <div id="we-revenue-growers">
                    <h6 className="text-[30px] font-bold italic text-white">Growers</h6>
                    <p className="text-[14px] text-white">($1.8 billion globally, CAGR 21.4%)</p>
                </div>
                <div id="we-revenue-dispensaries">
                    <h6 className="text-[30px] font-bold italic text-white">Dispensaries and Retailers</h6>
                    <p className="text-[14px] text-white">($13.2 billion globally, CAGR 25.5%)</p>
                </div>
                <div id="we-revenue-product">
                    <h6 className="text-[30px] font-bold italic text-white">Product Manufacturers</h6>
                    <p className="text-[14px] text-white">($18.38 billion globally, CAGR 21.15%)</p>
                </div>
                <div id="we-revenue-consumers">
                    <h6 className="text-[30px] font-bold italic text-white">Consumers and Patients</h6>
                    <p className="text-[14px] text-white">($323.9 billion globally, CAGR 21.4%)</p>
                </div>
            </div>
            <div id="effects" className="w-screen">
                <div className="absolute left-[250px] top-[12780px]">
                    <Image
                        src="/coin.svg"
                        alt="BUBO Coin"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="absolute right-[220px] top-[13080px] rotate-45 opacity-80">
                    <Image
                        src="/coin.svg"
                        alt="BUBO Coin"
                        width={80}
                        height={80}
                    />
                </div>
                <div className="absolute left-[200px] top-[13380px] -rotate-45 opacity-30">
                    <Image
                        src="/coin.svg"
                        alt="BUBO Coin"
                        width={25}
                        height={25}
                    />
                </div>
                <div className="absolute right-[300px] top-[13480px] -rotate-45 opacity-30">
                    <Image
                        src="/coin.svg"
                        alt="BUBO Coin"
                        width={25}
                        height={25}
                    />
                </div>
                <h2 className="text-[100px] font-bold bg-linear bg-clip-text text-transparent
                absolute left-[120px] top-[12880px]">$</h2>
                <h2 className="text-[100px] font-bold bg-linear bg-clip-text text-transparent
                absolute right-[280px] top-[12680px]">$</h2>
                <h2 className="text-[80px] font-bold bg-linear bg-clip-text text-transparent
                absolute right-[230px] top-[12900px] opacity-80">$</h2>
                <h2 className="text-[40px] font-bold bg-linear bg-clip-text text-transparent
                absolute right-[370px] top-[13080px] opacity-40">$</h2>
                <h2 className="text-[30px] font-bold bg-linear bg-clip-text text-transparent
                absolute left-[240px] top-[13460px] opacity-20">$</h2>
            </div>
        </div>
        <div className="h-[3000px]">
            <div className="absolute top-[13250px] left-1/2 -translate-x-1/2 pointer-events-none z-[-2]">
                <Image
                    src="/about/circle.svg"
                    alt="circle bg"
                    width={1100}
                    height={1100}
                />
            </div>
            <div className="absolute top-[13278px] left-[366px] pointer-events-none -z-1">
                <Image
                    src="/about/Main User Dropdown.png"
                    alt="circle bg"
                    width={303}
                    height={428}
                />
            </div>
            <div className="absolute top-[13520px] left-[600px] pointer-events-none -z-1">
                <Image
                    src="/about/Dropdowns.png"
                    alt="dropdowns"
                    width={303}
                    height={304}
                />
            </div>
            <div className="absolute top-[13408px] right-[-348px] pointer-events-none -z-1">
                <Image
                    src="/about/connectbook5 4.png"
                    alt="dropdowns"
                    width={1439}
                    height={689}
                />
            </div>
            <div className="absolute top-[13900px] left-[514px] pointer-events-none -z-1">
                <Image
                    src="/about/map 19.png"
                    alt="dropdowns"
                    width={241}
                    height={488}
                />
            </div>
            <div className="absolute top-[14240px] right-[428px] pointer-events-none -z-1">
                <Image
                    src="/about/map 19.png"
                    alt="dropdowns"
                    width={241}
                    height={488}
                />
            </div>
            <div className="absolute top-[14550px] left-[283px] pointer-events-none -z-1">
                <Image
                    src="/about/Popular Products.png"
                    alt="dropdowns"
                    width={732}
                    height={717}
                />
            </div>
            <div className="absolute top-[14850px] right-[371px] pointer-events-none -z-1">
                <Image
                    src="/about/Heat Zone.png"
                    alt="dropdowns"
                    width={354}
                    height={708}
                />
            </div>
            <div className="absolute top-[14900px] right-[213px] pointer-events-none z-[-2]">
                <Image
                    src="/about/circle.svg"
                    alt="circle bg"
                    width={1100}
                    height={1100}
                />
            </div>
            <div className="absolute top-[15350px] left-[-348px] pointer-events-none -z-1">
                <Image
                    src="/about/connectbook5 4.png"
                    alt="dropdowns"
                    width={1439}
                    height={689}
                />
            </div>
            <div className="absolute top-[15700px] right-[534px] pointer-events-none -z-1">
                <Image
                    src="/about/Dashboard Chart Card.png"
                    alt="dropdowns"
                    width={354}
                    height={560}
                />
            </div>
        </div>
    </div>
  </div>)
};

export default We;
