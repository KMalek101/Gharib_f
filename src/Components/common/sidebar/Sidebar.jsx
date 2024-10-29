import stylesSideBar from "./Sidebar.module.css"
import ChatButton from "../buttons/ChatButton"
import HomeButton from "../buttons/HomeButton"
import ExploreButton from "../buttons/ExploreButton"
import ProgressButton from "../buttons/ProgressButton"
import TerminologyButton from "../buttons/TerminologyButton"
import CommunityButton from "../community/CommunityButton"
import { useState } from "react"

function Top() {
    return<>
        <div className={stylesSideBar.top}>
                <HomeButton />
                <ChatButton />
                <ExploreButton />
                <ProgressButton />
                <TerminologyButton />
        </div>
    </>
}

function Community() {
    const communityIcon = "./public/electron.svg"
    const [rotate, setRotate] = useState(90);

    const changeRotation = () => {
        if (rotate == 90) {
            setRotate(270);
        }else{
            setRotate(90);
        }
    }

    return <>
        <div className={stylesSideBar.community}>
            <div onClick={ changeRotation } className={stylesSideBar.community_scrol}>
                <p>COMMUNITIES </p>
                <svg style={{transform: `rotate(${rotate}deg)`}} className={stylesSideBar.back_arrow} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 20L7 12L15 4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>

            <CommunityButton communityIcon={communityIcon} communityName={"almajanin"} />
            <CommunityButton communityIcon={communityIcon} communityName={"almashimajanin"} />
            <CommunityButton communityIcon={communityIcon} communityName={"The Last Group"} />
        </div>
    </>
}

function SideBar() {

    return <>
        <div className={stylesSideBar.container}>
            <Top />
            <Community />
        </div>
    </>
}

export default SideBar;