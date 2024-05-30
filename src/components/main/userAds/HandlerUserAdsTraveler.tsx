import { loadedDatas } from "@/mock/data";
import { UserAdsTraveler } from "./UserAdsTraveler";
import { IPublishAdd } from "@/components/interfaces/interfaces";

export const HandlerUserAdsTraveler = () => {
  return (
    <div className="flex justify-center gap-5 flex-wrap items-center">
      {loadedDatas.map((loadedData: IPublishAdd, index: number) => (
        <UserAdsTraveler loadedDatas={loadedData} key={index} />
      ))}
    </div>
  );
};
