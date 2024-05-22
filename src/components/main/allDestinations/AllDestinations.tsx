import { gradientBtn, subTitlesClassNames, titleClassNames } from "@/common/ClassNames";
import { destinationsDatas } from "@/constants/variables";

export const AllDestinations = () => {

  return (
    <div className="flex-col mx-52  ">
      <div className="flex justify-center items-center gap-10  mt-20 flex-wrap w-96 md:w-full ">
        <div className="flex flex-col md:gap-0 mx-8 md:mx-0 ">
          <div >
            <p className={titleClassNames}>Planifiez votre envoi parfait</p>
          </div>
          <div >
            <p className={subTitlesClassNames}>Toutes les destinations possible</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-wrap justify-center items-start gap-0 md:gap-10 mt-10">
        {destinationsDatas.map((data, index) => (
          <div
            key={index}
            className="p-3 hover:bg-slate-200 transition-all text-neutral-900 duration-100 bg-slate-100 dark:text-white dark:hover:bg-slate-700 dark:bg-slate-500 rounded-2xl w-[300px] shadow justify-center items-center gap-4 flex mt-10 cursor-pointer"
          >
            <div className="w-[90px] h-[90px] flex-col justify-start items-center inline-flex">
              <img
                className="self-stretch grow shrink basis-0 rounded-lg"
                src={data.img}
                alt="Placeholder"
              />
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch opacity-70  text-base font-semibold font-['Montserrat']">
                <p className="">
                  {data.countryName}, {data.cityName}
                </p>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className=" text-sm font-medium font-['Montserrat']">
                  <p>{data.nickname}</p>
                </div>
                <div className="ttext-sm font-medium font-['Montserrat']">
                  •
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12 mb-12">
        <button className={gradientBtn}>Voir plus de destinations</button>
      </div>
    </div>
  );
};
