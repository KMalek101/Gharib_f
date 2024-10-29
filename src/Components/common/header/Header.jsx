import stylesHeader from "./Header.module.css"
import RightElements from "./RightElements";
import InputSearch from "../inputs/inputSearch/InputSearch";
import Gharib from "../gharib/Gharib";

function Header() {
    return <>
        <div className={stylesHeader.container}>
            {/* gharib icon */}
            <Gharib />
            <InputSearch />
            <RightElements />
        </div>
    </>
}
export default Header;