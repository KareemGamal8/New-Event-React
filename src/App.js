import { faClock, faHourglass, faMicrophone, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Overview from "./design-system/components/Overview";

function App() {
  return (
    <div className="App">
      <Overview icon={faUserGroup} title="650 Participants">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        odio quaerat excepturi nobis magnam illum ipsam molestias error
        voluptatum ipsa aliquid aperiam quisquam provident consequuntur,
        distinctio ratione mollitia asperiores eum.
      </Overview>
      <Overview icon={faClock} title="24 Programs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        odio quaerat excepturi nobis magnam illum ipsam molestias error
        voluptatum ipsa aliquid aperiam quisquam provident consequuntur,
        distinctio ratione mollitia asperiores eum.
      </Overview>
      <Overview icon={faMicrophone} title="11 Speakers">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        odio quaerat excepturi nobis magnam illum ipsam molestias error
        voluptatum ipsa aliquid aperiam quisquam provident consequuntur,
        distinctio ratione mollitia asperiores eum.
      </Overview>
    </div>
  );
}

export default App;
