import Image from "next/image";
import Lottie from "lottie-react";
import animatedCheckbox from "./checkbox.json"


const interactivity = {
    mode: "scroll",
    actions: [
        {
            visibility: [0, 0.25],
            type: "stop",
            frames: [0],
        },
        {
            visibility: [0.25, 0.75],
            type: "seek",
            frames: [0, 55],
        }
    ]
}

const choices = [
    'Explosive revenue growth potential',
    'Proven SaaS model',
    'Diverse and experienced team',
    'Public exit experience',
    'Patent-pending technology',
    'Your future begins'
]

const Future = () => {
  return (
    <div className="bg-black text-white py-[20px] text-center font-sysui">
      <h1 className="text-[88px] my-[83px] text-center font-semibold">
        Your future awaits...
      </h1>
        <div className="flex w-max justify-center items-center">
            <Image
                src="/screenshot/homebook 2.png"
                alt="Purple Line"
                width={875}
                height={419}
            />
            <Image
                src="/screenshot/Image.png"
                alt="Purple Line"
                width={201}
                height={408}
            />
            <Image
                src="/screenshot/connectbook5 3.png"
                alt="Purple Line"
                width={875}
                height={419}
            />
            <Image
                src="/screenshot/connectphone 2.png"
                alt="Purple Line"
                width={201}
                height={408}
            />
            <Image
                src="/screenshot/traxbook 2.png"
                alt="Purple Line"
                width={875}
                height={419}
            />
        </div>
        <h2 className="text-[60px] font-semibold mt-[120px] mb-[90px]">Start your adventure.</h2>
        <div className="flex justify-center">
            <div className="flex flex-col lg:h-[240px] w-1/2 flex-wrap justify-center">
                {choices.map((choice, i) => <div className="flex gap-[22px] w-max items-center" key={i}>
                        <Lottie
                            animationData={animatedCheckbox}
                            style={{height: 75}}
                            interactivity={interactivity}
                        />
                        <p>{choice}</p>
                    </div>
                )}
            </div>
        </div>
        <div className="my-[50px]">
            <Image
                src="/screenshot/owlanim.gif"
                alt="Owl Animation"
                width={382}
                height={253}
            />
        </div>
        <div className="text-center py-[64px] justify-center relative z-10">
            <h3 className="text-[80px] font-semibold py-[60px]">Invest with confidence today</h3>
            <button className="h-[82px] px-[53px] bg-primary-purple
                hover:bg-primary-purple50 transition-all rounded-xl">I’m joining the Budbo Team</button>
        </div>
        <div className="-translate-y-full -z-1">
            <Image
                src="/investors/invest today.svg"
                alt=""
                width={1303}
                height={420}
            />
        </div>
    </div>
  );
};

export default Future;
