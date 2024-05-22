import { gradientBtn } from "@/common/ClassNames";

interface IProps {
    child:string
}
export default function SeeMoreBtn({child}:IProps) {
  return (
    <div className="flex justify-center mt-12 mb-12">
      <button className={gradientBtn}>{child}</button>
    </div>
  );
}
