import videoHomepage from '../../assets/video-homepage.mp4';

const HomePage =(props) => {
    return (
        <div className='homepage-container'>
            <video autoPlay muted loop>
                <source
                    src={videoHomepage}
                    type="video/mp4"
                />
            </video>
            <div className='homepage-content'>
                <div className='title-1'>alooo</div>
                <div className='title-2'>alooo.
                    blo.
                    clo.</div>
                <div className='title-3'>
                    <button>bat dau</button>
                </div>
            </div> 
        </div>
    )
}

export default HomePage;