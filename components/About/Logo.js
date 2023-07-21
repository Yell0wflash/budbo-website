import Image from "next/image";

const Logo = () => {
  return (<div className="text-center">
    <div id="logo-logo" className="w-[888px] h-[888px] mx-auto translate-x-10 absolute inset-0 z-10 object-cover top-[4800px]">
      <Image
          src="/logo.svg"
          alt="Logo"
          width={560}
          height={585}
      />
    </div>
    <div id="logo-text" className="mt-[600px] mx-auto top-[4800px] mb-[120px]">
      <Image
          src="/logo_txt_only.svg"
          alt="Purple "
          width={476}
          height={200}
      />
    </div>
    <div id="" className="absolute inset-0 top-[4500px]">
      <Image
          src="/screenshot/map 3.png"
          alt="Logo Phone"
          width={200}
          height={405}
      />
    </div>
  </div>)
};

export default Logo;
