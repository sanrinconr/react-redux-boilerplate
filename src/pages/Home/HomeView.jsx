import NamesContainer from "./components/NamesContainer";
import styles from "./HomeView.module.css"
export function HomeView(){
    return <div className={styles.container}>
            <span>Hi!, home here</span>
            <span>Data from redux:</span>
            <NamesContainer/>
    </div>
}