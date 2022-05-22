import loading from "../assets/Loading.gif";
import style from "./loading.module.css";

export default function Loading() {
    return (
        <div className={style.mainInfo}>
           <div className={style.loadingCity}></div>
            <div className={style.loadingText}></div>
            <div className={style.loadingText1}>
                <div className={style.loadingText2}>
                </div>
                <div className={style.loadingText3}>
                    <div className={style.loadingText4}>
                    </div>
                    <div className={style.loadingText5}>
                    </div>
                </div>
            </div>
            <div className={style.loadingText6}>
            </div>
        </div>
    );
}