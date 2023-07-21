import { Icon } from "@iconify/react";
import Image from "next/image";

const members = [
    {
        file: '1',
        name: 'Luke Patterson',
        role: 'CEO'
    },
    {
        file: '2',
        name: 'Gary Heitz',
        role: 'COO'
    },
    {
        file: '3',
        name: 'Jacob Patterson',
        role: ''
    },
    {
        file: '4',
        name: 'Nick Heldreth',
        role: 'CMO'
    },
    {
        file: '5',
        name: 'Stephen Rosen',
        role: 'CFO'
    },
    {
        file: '6',
        name: 'Virgil Grant',
        role: 'Advisor'
    },
    {
        file: '7',
        name: 'Dr. Uma Dhanabalan',
        role: 'MD MPH FAAFP MRO CMS'
    },
    {
        file: '8',
        name: 'Teran Ramsey',
        role: 'Advisor'
    }
]

const Team = () => {
    return (
        <div className="flex justify-center">
            {members.map(i => <div key={i} className="w-[135px]">
                <Image
                    src={`/team/${i.file}.png`}
                    alt="team"
                    width={135}
                    height={140}
                />
                <p className="p-[8px] text-[14px] font-semibold leading-[20px] -translate-y-full bg-linearblack">
                    <span>{i.name}</span>
                    <br/>
                    <span className="text-primary-purple text-[12px]">{i.role}</span>
                </p>
            </div>)}
        </div>
    );
};

export default Team;
