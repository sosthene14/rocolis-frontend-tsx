import { titleClassNames } from "@/common/ClassNames";
import { CustomCarousel } from "@/components/customs/CustomCarousel";

export const RecommendedAds = () => {
  return (
    <div className="flex justify-center flex-col items-center overflow-x-hidden mt-20 ">
      <p className={titleClassNames}>Nos recommendations</p>
      <CustomCarousel />
    </div>
  );
};
