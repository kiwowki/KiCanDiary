import Aside from '../components/layout/Aside.jsx';
import LeftCalenadr from './LeftCalenadr.jsx';
import RightInfo from './RightInfo.jsx';

const Home = () => {

    return (
        <div id="wrap">
            <Aside/>
            <main id="main" role="main">
                <div className="main__wrap">            
                    <LeftCalenadr />
                    <RightInfo />             
                </div>
            </main>
        </div>
    )
}

export default Home
