
import bg from '../../public/images/more/13.jpg';
import logo from '../../public/images/more/logo1.png';

const Footer = () => {
    return (
        <div className='flex' style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div>
                <img className='w-20' src={logo} alt="" />
                <h1 className='text-2xl font-semibold rancho-regular'>Espresso Emporium</h1>
                <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                <p>Get in Touch</p>
            </div>
            <div>

            </div>

        </div>
    );
};

export default Footer;