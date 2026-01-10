
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import bg from '../../public/images/more/13.jpg';
import logo from '../../public/images/more/logo1.png';
import Swal from 'sweetalert2';

const Footer = () => {

    const handleMessageSend = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        // console.log(name, email, message)

        if (name && email && message) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${name}, your message has been sent`,
                showConfirmButton: false,
                timer: 1500
            });
            form.reset();
        } else {
            Swal.fire({
                position: "top-end",
                icon: "danger",
                title: "Please give name, email, message!",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div className='flex gap-6 px-6 py-12 md:px-28' style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className='flex-2'>
                <img className='w-20' src={logo} alt="" />
                <h1 className='text-2xl font-semibold rancho-regular'>Espresso Emporium</h1>
                <p className='my-3'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                <div className='flex gap-3 my-3'>
                    <Facebook />
                    <Twitter />
                    <Instagram />
                    <Linkedin />
                </div>
                <p className='text-2xl font-semibold rancho-regular mt-8'>Get in Touch</p>
                <div className='flex flex-col gap-3 mt-2'>
                    <p className='flex gap-3 items-center'><Phone /> +88 01533 333 333</p>
                    <p className='flex gap-3 items-center'><Mail /> info@gmail.com</p>
                    <p className='flex gap-3 items-center'><MapPin />72, Wall street, King Road, Dhaka</p>
                </div>
            </div>
            <div className='flex-1'>
                <h1 className='text-2xl font-semibold rancho-regular'>Connect with Us</h1>
                <form onSubmit={handleMessageSend} className='flex flex-col gap-3 mt-2 w-full'>
                    <input className='p-2 w-full bg-white' type="text" name="name" id="name" placeholder='Name' />
                    <input className='p-2 w-full bg-white' type="email" name="email" id="email" placeholder='Email' />
                    <textarea rows="4" className='p-2 w-full bg-white resize-none' name="message" id="message" placeholder='Message'></textarea>
                    <input className='btn border-2 rounded-full flex items-center border-[#331A15] rancho-regular w-1/2' type="submit" value="Send Message" />
                </form>
            </div>

        </div>
    );
};

export default Footer;