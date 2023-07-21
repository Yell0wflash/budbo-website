import { Icon } from "@iconify/react";
import Image from "next/image";

const members = [
    {
        key: 1,
        file: 'jack 5',
        name: 'Jack Finkelstei',
        investrole: 'Lead Investor',
        role: 'CEO - Liquimedlock, Inc.',
        words: 'I am the CEO and founder of a Canadian and US medical packaging company that offers unique supply chain products to labs, pharmacies, licensed producers and dispensaries in the cannabis industry. I’ve been a long time investor in Budbo. What first attracted me to Budbo was the matching technology and the ability for ancillary businesses, such as myself, to use the Budbo platform on the B2B side.',
        banner: 'jack_w'
    },
    {
        key: 2,
        file: 'virgil 2',
        name: 'Virgil Grant',
        investrole: 'Investor, Customer,',
        role: 'Owner - California Cannabis, Co-founder California Minority Alliance, Co-founder Southern California Coalition',
        words: 'Budbo has been a pleasure to work with and is multifaceted in that it supports a wide range of my cannabis businesses. I was first interested in Budbo as a platform for my dispensaries to increase sales. I have since joined the team as an advisor, investor, and customer for all of my cannabis related enterprises.',
        banner: 'virgil_w'
    },
]

const Investors = () => {
    return (
        <div className="font-sysui px-[160px] py-[70px]">
            <h1 className="font-semibold text-[54px] text-center my-[56px]">
                <span>Hear from some of our</span>
                &nbsp;
                <span className="bg-linear bg-clip-text text-transparent">Investors</span>
                &nbsp;
                <span>and</span>
                &nbsp;
                <span className="bg-linear bg-clip-text text-transparent">Customers</span>
            </h1>
            <div className="flex justify-center flex-wrap gap-[36px]">
                {members.map(i => <div key={i} className="flex items-start gap-[36px]">
                    <Image
                        src={`/investors/${i.file}.png`}
                        alt="team"
                        width={128}
                        height={150}
                    />
                    <div className="w-[400px] py-[24px]">
                        <p className="text-[20px] font-medium leading-snug mb-[60px]">
                            <p>{i.name}</p>
                            <p className="italic">{i.investrole}</p>
                            <p>{i.role}</p>
                            <br/>
                            <p className="text-primary-graydark">{i.words}</p>
                        </p>
                        <Image
                            src={`/investors/${i.banner}.png`}
                            alt="team"
                            width={402}
                            height={268}
                        />
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Investors;
