import Header from "../../common/header/Header";
import SideBar from "../../common/sidebar/Sidebar"
import styles from "./MainLayout.module.css"

function MainLayout() {
    return<>
        <div className="real">
            <Header />
            <SideBar />
        </div>
    </>
}
export default MainLayout;