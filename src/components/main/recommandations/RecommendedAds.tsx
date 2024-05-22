import { CustomCarousel } from "@/components/customs/CustomCarousel";

export default function RecommendedAds() {
  return (
    <div className="flex justify-center flex-col items-center overflow-x-hidden mt-20 mb-20">
        <p className="text-3xl mb-5 font-bold dark:text-white text-slate-600">Nos recommendations</p>
        <CustomCarousel />
    </div>
  )
}
