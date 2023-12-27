
import Footer from '../components/layout/Footer.jsx';
import Aside from './Aside.jsx';
import LeftCalenadr from './LeftCalenadr.jsx';
import RightInfo from './RightInfo.jsx';

const Home = () => {

    return (
        <div id="wrap">
            <Aside/>
            <main id="main" role="main" className='section__border'>
                <div className="main__wrap">            
                    <LeftCalenadr />
                    <RightInfo />             
                </div>
            </main>
        </div>
    )
}

export default Home
