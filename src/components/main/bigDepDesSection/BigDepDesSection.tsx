import { bigSections } from "@/constants/links";

export const BigDepDesSection = () => {
   
  
    return (
      <div className="flex flex-col mx-5 sm:mx-10 items-center gap-10 lg:mx-20 lg:gap-20 lg:flex-row justify-center mt-20 mb-20">
        {bigSections.map((section, index) => (
          <div
            key={index}
            className="relative rounded-xl w-full sm:w-[calc(50%-20px)] h-96 flex justify-center items-center overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
            style={{
              cursor: "pointer",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `linear-gradient(0deg, rgba(11,11,11,1) 0%, rgba(25,23,23,0.4234943977591037) 51%), url(${section.backgroundImage})`,
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
              <div className="text-4xl font-normal font-['Archivo Black'] mb-4">
                <p>{section.title}</p>
              </div>
              <div className="max-w-xs mx-auto text-base font-normal font-['Montserrat']">
                <p>{section.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  