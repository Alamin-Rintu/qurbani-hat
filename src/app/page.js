import Banner from "@/components/Banner";
import FeaturedAnimals from "@/components/FeaturedAnimals";
import QurbaniTips from "@/components/QurbaniTips";


export default function Home() {
  return (
  <div className="container mx-auto">
    <Banner/>
    <QurbaniTips/>
    <FeaturedAnimals/>
  </div>
  );
}
