import { useState, useEffect } from "react";
import { gsap } from "gsap";
import Meta from "@/components/Seo/Meta";
import Loader from "@/components/Loader/Loader";
import Header from "@/components/Header/Header";
import Title from "@/components/Title/Title";
import Begin from "@/components/Begin/Begin";
import Growth from "@/components/Growth/Growth";
import Logo from "@/components/About/Logo";
import Role from "@/components/About/Role";
import We from "@/components/About/We";
import Token from "@/components/About/Token";
import We1 from "@/components/About/We1";
import Reason from "@/components/Reason/Reason";
import Investors from "@/components/Investors/Investors";
import Future from "@/components/Future/Future";
import Footer from "@/components/Footer/Footer";
// import Saas from "@/components/Saas/Saas";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isLoading, setIsLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  const [clientHeight, setClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2700);
  }, []);

  useEffect(() => {
    const result =
      typeof window.orientation === "undefined" &&
      navigator.userAgent.indexOf("IEMobile") === -1;
    window.history.scrollRestoration = "manual";

    setIsDesktop(result);
    setClientHeight(window.innerHeight);
    setClientWidth(window.innerWidth);
  }, [isDesktop, clientHeight]);

  const consoleLog = () => {
    console.log(
      "%c  ____  _           _     _       ____                          _\n / ___|| |__  _   _| |__ | |__   |  _ \\ ___  _ ____      ____ _| |\n \\___ \\| '_ \\| | | | '_ \\| '_ \\  | |_) / _ \\| '__\\ \\ /\\ / / _` | |\n  ___) | | | | |_| | |_) | | | | |  __/ (_) | |   \\ V  V / (_| | |\n |____/|_| |_|\\__,_|_.__/|_| |_| |_|   \\___/|_|    \\_/\\_/ \\__,_|_|\n",
      "background: #212121; color: #6b17e8;"
    );

    console.log(
      "%c Hope you like what you see :)",
      "background: #212121; color: #6b17e8; padding: 6px;"
    );

    console.log = () => {};
    console.error = () => {};
  };

  return (
    <>
      <Meta>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Header/>
            <Title/>
            <Begin/>
            <Growth/>
            <Logo/>
            <Role/>
            <We/>
            <Token/>
            <We1/>
            <Reason/>
            <Investors/>
            <Future/>
            <Footer/>
            {/* <Saas/> */}
            {/* <ProgressIndicator /> */}
            {/* <main className="flex flex-col">
              <div
                role="img"
                className="text-gray-light-1 opacity-10 sm:text-9xl xs:text-8xl inline-block -z-10 absolute rotate-90 right-0 md:top-52 xs:top-96"
              >
                DEV
              </div>
              <div className="fixed top-0 left-0 h-screen w-screen -z-1"></div>
              <Hero />
              <About1 clientHeight={clientHeight} />
              <Skills />
              <About2 clientHeight={clientHeight} />
              <Projects isDesktop={isDesktop} clientHeight={clientHeight} />
              <Work clientWidth={clientWidth} />
              <Collaboration clientHeight={clientHeight} />
              <div className="pt-10 sm:pt-16 bg-gray-dark-4"></div>
              <Contact />
            </main> */}
            {/* <Footer />
            <Scripts /> */}
          </>
        )}
        {consoleLog()}
      </Meta>
    </>
  );
}
