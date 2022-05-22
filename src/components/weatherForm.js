import { useState } from "react";
import style from "./weatherForm.module.css";

export default function WeatherForm({ onChangeCity }) {
    const [city, setCity] = useState('');

    function onChange(e) {
        const value = e.target.value;
        if (value !== '') {
            setCity(value);
        }
    }
    function handleSudmit(e) {
        e.preventDefault();
        onChangeCity(city);
    }
    return (
        <form onSubmit={handleSudmit} className={style.container}>
            <input tipey="text" onChange={onChange} className={style.input}/>
        </form>
    )
}