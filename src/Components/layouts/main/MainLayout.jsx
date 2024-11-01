import Header from "../../common/header/Header";
import SideBar from "../../common/sidebar/Sidebar"
import styles from "./MainLayout.module.css"
import UserProfile from "../../pages/userProfile/UserProfile";
import axios from "axios"
import { useEffect, useState } from "react";
function MainLayout() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/retreive/1/')
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.error("There was an error fetching data!", error);
          });
    }, []);

    console.log("the data is : ", data);
    return<>
        <div className="real">
            <Header />
            <div className={styles.sidebarANDpage}>
                <SideBar />
                <userMenu />
                <UserProfile />
            </div>
        </div>
    </>
}
export default MainLayout;