import { subTitlesClassNames, titleClassNames } from "@/common/ClassNames";
import CardAds from "@/components/common/cardsAds/CardAds";
import { picsList } from "@/assets/images/Images";
import SeeMoreBtn from "@/components/common/button/SeeMoreBtn";

export default function ImminentDeparture() {
  return (
    <div className="flex-col items-center">
      <div className="flex justify-center flex-col items-center">
        <p className={titleClassNames}>Départs imminents</p>
        <p className={subTitlesClassNames}>
          Personnes qui voyagent dans l'intervalle de 1 à 5 jours
        </p>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {Array.from({ length: 5 }).map((_,index:number) => (
          <div key={index} className="basis-[20%] sm:basis-1/3 md:basis-1/3 lg:basis-1/4">
            <CardAds picsList={picsList} />
          </div>
        ))}
      </div>
      <SeeMoreBtn child="Voir plus de départs imminents" />
    </div>
  );
}
