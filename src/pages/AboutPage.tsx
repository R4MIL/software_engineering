import { Link } from 'react-router-dom'

//export const AboutPage = () =>
function AboutPage() {
    return (
        <div style={{ padding: "20px" }}>
            <Link to="/geolocation">← Назад</Link>
            <br />
            <h2>Это сервис нужен для получения данных о загрязнении в населеном пункте</h2>
            <img src={require('../images/photo.jpg')} alt="photo1" />
        </div>
    )
}

export default AboutPage;