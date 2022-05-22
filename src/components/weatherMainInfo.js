import style from './weatherMainInfo.module.css';

export default function WeatherMainInfo({ weather }) {
    return (
        <div className={style.mainInfo}>
            <div className={style.city}>{weather?.location.name}</div>
            <div className={style.country}>{weather?.location.country}</div>
            <div className={style.row}>
                <div>
                    <img src={`http:${weather?.current.condition.icon}`}
                        alt={weather?.current.condition.text}
                        width="128" />
                </div>
                <div className={style.weatherConditions}>
                    <div className={style.condition}>
                        {weather?.current.condition.text}
                    </div>
                    <div className={style.current}>
                        {weather?.current.temp_c}&deg;C
                    </div>
                </div>
            </div>
            <iframe
                title="mapa"
                src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d841905.2517693588!2d${weather?.location.lon}2!3d${weather?.location.lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suy!4v1653159189124!5m2!1sen!2suy`}
                width="100%"
                height="110%"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}