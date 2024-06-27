import { subTitlesClassNames, titleClassNames } from "@/common/ClassNames";
import { CardAds } from "@/components/common/cardsAds/CardAds";
import { picsList } from "@/assets/images/Images";
import { SeeMoreBtn } from "@/components/common/button/SeeMoreBtn";

export const ImminentDeparture = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center mb-8">
        <p className={titleClassNames}>Départs imminents</p>
        <p className={subTitlesClassNames}>
          Personnes qui voyagent dans l'intervalle de 1 à 5 jours
        </p>
      </div>
      <div className="  place-items-center">
        <div className="flex flex-wrap gap-3 justify-center">
          {Array.from({ length: 5 }).map((_, index: number) => (
            <div
              key={index}
              className="flex w-[350px] justify-center place-content-center"
            >
              <CardAds picsList={picsList} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <SeeMoreBtn child="Voir plus de départs imminents" />
      </div>
    </div>
  );
};
