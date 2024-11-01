import styles from "./Buttons.module.css"

function ExploreButton() {
    return<>
        <div className={styles.container}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.45 17.216l7.981-3.845 2.98-7.115-7.116 2.98zm6.741-4.358l-4.599 2.216 2.216-4.6zM12 1.2A10.8 10.8 0 1 0 22.8 12 10.812 10.812 0 0 0 12 1.2zm0 20.6a9.8 9.8 0 1 1 9.8-9.8 9.81 9.81 0 0 1-9.8 9.8z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>            
            <p className={styles.p}>Explore</p>
        </div>
    </>
}
export default ExploreButton;