import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Authorization from 'src/components/authorization/authorization';
import './header.css';

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='header_container'>
                    <Link to={'/'}>
                        <Button variant='outlined'>Home</Button>
                    </Link>
                    <Link to={'/searchMovie'}>
                        <Button variant='outlined'>Search</Button>
                    </Link>
                    <Authorization />
                </div>
            </div>
        </header>
    );
};

export default Header;
