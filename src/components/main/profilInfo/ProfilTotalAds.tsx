import ChartComponent, { PublicationData } from "./ChartComponent";

const generateRandomData = (): PublicationData[] => {
  const data: PublicationData[] = [];
  for (let i = 1; i <= 30; i++) {
    data.push({
      day: i,
      publications: Math.floor(Math.random() * 11), 
    });
  }
  return data;
};
const data = {
  '2023': {
    '01': generateRandomData(),
    '02': generateRandomData(),
  },
  '2024': {
    '01': generateRandomData(),
  },
};
export const ProfilTotalAds = () => {
  return <ChartComponent data={data} />;
};


