import Banner from '../components/Home/Banner';
import CheckIntake from '../components/Home/CheckIntake';
import BVCTE from '../components/Home/BVCTE';
import Circular from '../components/Home/Circular';
import OurCourses from '../components/Home/OurCourses';
import Facilities from '../components/Home/Facilities';
import Faculty from '../components/Home/Faculty';
import TopRecruiters from '../components/Home/TopRecruiters';
// import AcademicDepartments from './AcademicDepartments';
// import Welcome from './Welcome';
// import CoursesOffered from './CoursesOffered';
// import BrahmaValleyCampus from './BrahmaValleyCampus';

// Pages

function Home() {
    return (
        <>
            <Banner />
            <CheckIntake />
            <BVCTE />
            <Circular />
            <OurCourses />
            <Facilities />
            <Faculty />
            <TopRecruiters />
            {/* <AcademicDepartments />
            <Welcome />
            <CoursesOffered />
            <BrahmaValleyCampus />
            <TopRecruiters /> */}

        </>
    );
}

export default Home;
