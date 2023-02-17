import cardData from "./cardData";
import asicData from "./minerData";
import gadgetData from "./gadgetData";

const fetchData = (name) => {
  if (name == "Graphic Cards") {
    return cardData;
  } else if (name == "ASIC Miners") {
    return asicData;
  } else {
    return gadgetData;
  }
};

export default fetchData;
