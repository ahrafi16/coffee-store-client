import { Link } from 'react-router';
import bg from '../../public/images/more/15.jpg';
import logo from '../../public/images/more/logo1.png';

const Header = () => {
    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '90px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Link to="/">
                <div className='rancho-regular text-4xl flex items-center gap-2' style={{ color: 'white', zIndex: 1 }}> <img className='w-20' src={logo} alt="" /> Espresso Emporium </div>
            </Link>
        </div>
    );
};

export default Header;