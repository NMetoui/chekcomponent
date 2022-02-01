import "./App.css";
import ProfilePhoto from "./Component/Profile/ProfilePhoto/ProfilePhoto.js";
import FullName from "./Component/Profile/FullName/FullName.js";
import Address from "./Component/Profile/Address/Address.js";
function App() {
  return (
    <div className="App">
      <div>
        <Address />
        <div className="np">
          <FullName />
          <ProfilePhoto />
        </div>
      </div>
    </div>
  );
}

export default App;
