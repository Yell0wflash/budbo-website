import Image from "next/image";

const Title = () => {
  return (
    <div className="py-[100px] font-normal leading-normal font-sysui h-[912px] mb-[150px]">
        <h6 className="text-[80px] absolute top-[980px] left-[450px]" id="begin-precession">
            Recession-proof
        </h6>
        <h6 className="text-[58px] absolute top-[1200px] right-[530px]" id="begin-portfolio">
            your portfolio
        </h6>
        <h6 className="text-[58px] absolute top-[1170px] left-[300px]" id="begin-begin">
            Let&apos;s begin
        </h6>
        <h6 className="text-[58px] absolute top-[1300px] right-[200px]" id="begin-adventure">
            your adventure
        </h6>
        <h6 className="text-[58px] absolute top-[1720px] left-[860px]" id="begin-together">
            together
        </h6>
        <h6 className="text-[80px] absolute top-[1520px] left-[650px]" id="begin-experience">
            Public exit experience
        </h6>
        <div id="left-phone"
            className="absolute left-[14%] top-[900px]">
            <Image
                src="/begin/cart 5.png"
                alt="Left phone"
                width={912}
                height={912}
            />
        </div>
        <div id="right-phone"
            className="absolute right-[18%] top-[1135px]">
            <Image
                className="absolute right-[100px]"
                src="/begin/puff 6.png"
                alt="Right phone"
                width={677}
                height={677}
            />
        </div>
    </div>
  );
};

export default Title;
