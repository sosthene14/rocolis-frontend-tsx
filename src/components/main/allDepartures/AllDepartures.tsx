import { picsList } from "@/assets/images/Images";
import {  titleClassNames } from "@/common/ClassNames";
import {SeeMoreBtn} from "@/components/common/button/SeeMoreBtn";
import {CardAds} from "@/components/common/cardsAds/CardAds";

export const AllDepartures = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center mb-8">
        <p className={titleClassNames}>Autres départs</p>

      </div>
      <div className="  place-items-center">
         <div className="flex flex-wrap justify-center">
        {Array.from({ length: 5 }).map((_, index: number) => (
          <div key={index} className="flex w-[350px] justify-center place-content-center">
            <CardAds picsList={picsList} />
          </div>
        ))}
      </div>
      </div>
     
      <div className="mt-8">
        <SeeMoreBtn child="Tous les autres départs" />
      </div>
    </div>
  )
}

