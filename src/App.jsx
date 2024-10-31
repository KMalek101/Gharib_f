import SideBar from "./Components/common/sidebar/Sidebar.jsx"
import Header from "./Components/common/header/Header.jsx";
import MainLayout from "./Components/layouts/main/MainLayout.jsx";
import UserProfile from "./Components/pages/userProfile/UserProfile.jsx";

function App() {
  return<>
  <div className="container">
    {/* <UserProfile /> */}
    <MainLayout />
  </div>
    
  </>
}

export default App;