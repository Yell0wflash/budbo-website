import Image from "next/image";

const Token = () => {
  return (
    <div className="flex justify-center py-[300px]">
        <div className="pointer-events-none">
            <Image
                src="/about/token.png"
                alt="budbo token"
                width={404}
                height={404}
            />
        </div>
    </div>
  );
};

export default Token;
