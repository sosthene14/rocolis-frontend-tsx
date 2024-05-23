import { Oval } from "react-loader-spinner";
interface IProps  {
  isLoading:boolean;
}
export const LoaderCircle = ({isLoading}:IProps) => {
  return (
    <div>
      {isLoading &&
        <Oval
          visible={true}
          height="60"
          width="60"
          color="#10837f"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      }
    </div>
  );
};


