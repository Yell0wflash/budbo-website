import Image from "next/image";

const Growth = () => {
  return (
    <>
        <div className="py-[100px] h-[1200px] font-normal leading-normal font-sysui text-center">
            <h6 className="text-[80px] text-center mb-16" id="begin-precession">
                Explosive revenue growth
            </h6>
            <div>
                <h3 id="revenue-count" className="text-[128px] font-bold italic">1,000+</h3>
                <Image
                    className="absolute inset-0 z-[-1] object-cover"
                    src="/purple line.svg"
                    alt="Purple Line"
                    width={508}
                    height={60}
                />
                <div id="revenue-description" className="my-[-74px]">
                    <div id="revenue-laboratories">
                        <h6 className="text-[30px] font-bold italic text-white">Laboratories</h6>
                        <p className="text-[14px] text-white">($1.1billion global industry CAGR 15.4%)</p>
                    </div>
                    <div id="revenue-growers">
                        <h6 className="text-[30px] font-bold italic text-white">Growers</h6>
                        <p className="text-[14px] text-white">($1.8 billion globally, CAGR 21.4%)</p>
                    </div>
                    <div id="revenue-dispensaries">
                        <h6 className="text-[30px] font-bold italic text-white">Dispensaries and Retailers</h6>
                        <p className="text-[14px] text-white">($13.2 billion globally, CAGR 25.5%)</p>
                    </div>
                    <div id="revenue-product">
                        <h6 className="text-[30px] font-bold italic text-white">Product Manufacturers</h6>
                        <p className="text-[14px] text-white">($18.38 billion globally, CAGR 21.15%)</p>
                    </div>
                    <div id="revenue-consumers">
                        <h6 className="text-[30px] font-bold italic text-white">Consumers and Patients</h6>
                        <p className="text-[14px] text-white">($323.9 billion globally, CAGR 21.4%)</p>
                    </div>
                </div>
                <div id="effects" className="w-screen">
                    <div className="absolute left-[250px] top-[2480px]">
                        <Image
                            src="/coin.svg"
                            alt="BUBO Coin"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="absolute right-[220px] top-[2780px] rotate-45 opacity-80">
                        <Image
                            src="/coin.svg"
                            alt="BUBO Coin"
                            width={80}
                            height={80}
                        />
                    </div>
                    <div className="absolute left-[200px] top-[3080px] -rotate-45 opacity-30">
                        <Image
                            src="/coin.svg"
                            alt="BUBO Coin"
                            width={25}
                            height={25}
                        />
                    </div>
                    <div className="absolute right-[300px] top-[3180px] -rotate-45 opacity-30">
                        <Image
                            src="/coin.svg"
                            alt="BUBO Coin"
                            width={25}
                            height={25}
                        />
                    </div>
                    <h2 className="text-[100px] font-bold bg-linear bg-clip-text text-transparent
                    absolute left-[120px] top-[2580px]">$</h2>
                    <h2 className="text-[100px] font-bold bg-linear bg-clip-text text-transparent
                    absolute right-[280px] top-[2380px]">$</h2>
                    <h2 className="text-[80px] font-bold bg-linear bg-clip-text text-transparent
                    absolute right-[230px] top-[2600px] opacity-80">$</h2>
                    <h2 className="text-[40px] font-bold bg-linear bg-clip-text text-transparent
                    absolute right-[370px] top-[2780px] opacity-40">$</h2>
                    <h2 className="text-[30px] font-bold bg-linear bg-clip-text text-transparent
                    absolute left-[240px] top-[3160px] opacity-20">$</h2>
                </div>
            </div>
        </div>
        
        <div className="py-[100px] h-[1612px] font-normal leading-normal font-sysui text-center">
            <h1 className="text-[65px] mb-[220px]" id="saas-model">
                Proven SaaS model • Patent-pending technology
            </h1>
            <h5 className="text-[60px] mb-[40px]">Don&apos;t miss another opportunity</h5>
            <h6 className="text-[50px] mb-[95px]">
                <span>Invest with confidence in the next</span>&nbsp;
                <span className="bg-linear bg-clip-text text-transparent italic font-medium">Big thing</span>
            </h6>
            <p className="text-[30px] mb-[22px]">Its only just a pipe dream, until you do it.</p>
            <button className="px-[28px] py-[6px] rounded-full text-primary-purple border-[2px] border-primary-purple">
                <p className="text-[16px] font-bold">Take control of your future now</p>
                <p className="text-[13px]">Invest for as little as $195</p>
            </button>
            <div id="left-phone"
                className="absolute left-[-13%] top-[3400px]">
                <Image
                    src="/begin/cart 5.png"
                    alt="Left phone"
                    width={912}
                    height={912}
                />
            </div>
            <div id="right-phone"
                className="absolute right-[-10%] top-[3635px]">
                <Image
                    className="absolute right-[100px]"
                    src="/begin/puff 6.png"
                    alt="Right phone"
                    width={677}
                    height={677}
                />
            </div>
        </div>
    </>
  );
};

export default Growth;
