import { useParams } from "react-router-dom";
import MainContent from "../../components/shops/MainContent";
import SideNav from "../../components/shops/SideNav";
import MainContainer from "../../components/wrappers/MainContainer";

const Shops = () => {
  const { category_id } = useParams();
  return (
    <MainContainer>
      <div className="bg-[#f1f1f1] min-h-[80vh] pb-[10vh] lg:pt-10 pt-4">
        <div className="flex lg:w-[80vw] w-[95vw] mx-auto lg:flex-row flex-col justify-between pt-[10vh]">
          <div className="lg:w-[22%]">
            <SideNav id={category_id} />
          </div>
          <div className="main lg:w-[76%]">
            <MainContent />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Shops;
