import Image from "next/image";


const Footer = () => {
  return (
    <footer className="font-sysui">
      <div className="h-[52px] border-b-[1px] border-secondary-graylight mb-[47px]"/>
      <div className="flex justify-center items-center gap-[60px] mb-[40px]">
        <Image
            src="/logo_txt.svg"
            alt=""
            width={150}
            height={70}
        />
        <button className="h-[82px] px-[75px] bg-primary-purple
          hover:bg-primary-purple50 transition-all rounded-xl text-white">Invest now ➔</button>
        <h5 className="text-[24px] font-medium">Invest in Budbo, and together we will pioneer the future!</h5>
      </div>
      <p className="text-primary-graydark50 px-[336px] mb-[135px]">
        <ul className="list-disc">
          <li>Investments in private companies are particularly risky and may result in total loss of invested capital. Past performance of a security or a company does not guarantee future results or returns.</li>
          <li>Additional information about companies fundraising via Regulation Crowdfunding (CF) can be found by searching the EDGAR database.</li>
          <li>Private placements are speculative investments in which an investor could potentially lose the entire investment. The risks associated with a private placement are stated in its private placement memorandum (“PPM”). Investors considering investing in a private placement should fully review the PPM, and if appropriate, consult a legal or financial professional prior to making an investment decision.</li>
          <li>Offers to sell securities can only be made through official offering documents that contain important information about the investment and the issuers, including risks. Investors should carefully read the offering documents. Investors should conduct their own due diligence and are encouraged to consult with their tax, legal and financial advisors.</li>
          <li>Investors should verify any issuer information they consider important before making an investment.</li>
        </ul>
      </p>
    </footer>
  );
};

export default Footer;
