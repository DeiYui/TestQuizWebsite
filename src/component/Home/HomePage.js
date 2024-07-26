import videoHomepage from '../../assets/video-homepage.mp4';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomePage =(props) => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const navigate = useNavigate();
    
    return (
        <div className='homepage-container'>
            <video autoPlay muted loop>
                <source
                    src={videoHomepage}
                    type="video/mp4"
                />
            </video>
            <div className='homepage-content'>
                <div className='title-1'>There's a better way to ask</div>
                <div className='title-2'>
                You don't want to try a boring form. <br></br>
                Come to us
                </div>
                <div className='title-3'>
                    {isAuthenticated === false ?
                        <button onClick={() => navigate('/login')}>Get's started</button>
                        :
                        <button onClick={() => navigate('/users')}>Doing Quiz now</button>
                    }
                </div>
            </div> 
        </div>
    )
}

export default HomePage;