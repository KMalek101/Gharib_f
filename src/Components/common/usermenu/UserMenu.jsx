import UserMenuStyles from "./UserMenu.module.css"
function UserMenu( { toggleUserMenu }) {
    return<>
        <div className={UserMenuStyles.container}>
            <div onClick={ ()=>toggleUserMenu(false)} className={UserMenuStyles.element}>Profile</div>
            <div onClick={ ()=>toggleUserMenu(false)} className={UserMenuStyles.element}>Options</div>
            <div onClick={ ()=>toggleUserMenu(false)} className={UserMenuStyles.element}>History</div>
            <div onClick={ ()=>toggleUserMenu(false)} className={UserMenuStyles.element}>Log Out</div>
        </div>
    </>
}
export default UserMenu;