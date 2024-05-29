import { Link } from 'react-router-dom'

export const ErrorPage = () => {
    return (
        <div style={{padding: "20px"}}>
            <Link to="/geolocation">← Назад</Link>
            <h1>Страница не найдена</h1>
        </div>
    )
}