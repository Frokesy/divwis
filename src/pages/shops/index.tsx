import { useParams } from "react-router-dom";
import MainContent from "../../components/shops/MainContent";
import SideNav from "../../components/shops/SideNav";
import MainContainer from "../../components/wrappers/MainContainer";

const Shops = () => {
  const { category_id } = useParams();
  return (
    <MainContainer>
      <div className="bg-[#f1f1f1] min-h-[80vh] pb-[10vh]">
        <div className="flex w-[80vw] mx-auto justify-between pt-[10vh]">
          <div className="w-[22%]">
            <SideNav id={category_id} />
          </div>
          <div className="main w-[76%]">
            <MainContent />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Shops;
