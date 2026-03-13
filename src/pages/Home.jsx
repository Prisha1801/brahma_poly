import Banner from '../components/Home/Banner';
import CheckIntake from '../components/Home/CheckIntake';
import BVCTE from '../components/Home/BVCTE';
import Circular from '../components/Home/Circular';
import OurCourses from '../components/Home/OurCourses';
import Facilities from '../components/Home/Facilities';
import Faculty from '../components/Home/Faculty';
import TopRecruiters from '../components/Home/TopRecruiters';
import CampusLife from '../components/Home/CampusLife';

function Home() {
    return (
        <>
            <Banner />
            <CheckIntake />
            <BVCTE />
            <Circular />
            <OurCourses />
            <CampusLife />
            <Facilities />
            <Faculty />
            <TopRecruiters />

        </>
    );
}

export default Home;
