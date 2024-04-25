import { Button} from 'antd'
import { Link } from 'react-router-dom'


export const AuthPage = () => {
    return (<div>AuthPage
        <Button type="primary">PRESS ME</Button>
        <Link to="/geolocation">Страница Геолокации</Link>
        <Link to="/geolocation">О странице</Link>
        <Link to="/geolocation">Страница 404</Link>
    </div>)
}