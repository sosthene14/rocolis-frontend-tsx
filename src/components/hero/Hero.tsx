
import { TypeAnimation } from "react-type-animation";
import { HeroBackgroundStyle } from '@/common/ClassNames';

export const Hero = () => {

  return (
    <div className="fade-in z-10">
      <div style={HeroBackgroundStyle}>
        <div className="mb-[70px]">
          <div className="flex-col justify-start items-center gap-1 flex">
            <div
              style={{ fontFamily: "Actor" }}
              className="text-center text-white text-[40px] font-normal font-['Actor']"
            >
              BIENVENUE SUR{" "}
            </div>

            <div
              style={{ fontFamily: "Moul" }}
              className="text-center text-white text-[50px] md:text-[80px] font-normal font-['Abril Fatface'] uppercase"
            >
              ROCOLIS
            </div>
          </div>
          <div
            style={{ fontStyle: "italic" }}
            className="mt-5 text-center h-20 text-white text-xl font-semibold font-['Montserrat']"
          >
            <TypeAnimation
              sequence={[
                "ROCOLIS - Ensemble, Connectons",
                1500, 
                "ROCOLIS - Ensemble, Connectons Mondes",
                1000,
                "ROCOLIS - Ensemble, Connectons Mondes et Cœurs",
                1500
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block",fontStyle: "italic" }}
              repeat={Infinity}
              className="mt-5 text-center  text-white text-xl font-semibold font-['Montserrat']"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

