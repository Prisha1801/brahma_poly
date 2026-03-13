import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import BoardMembers from "./components/About-Us/BoardMembers";
import PresidentDesk from "./components/About-Us/PresidentDesk";
import PrincipalDesk from "./components/About-Us/PrincipalDesk";
import MissionVision from "./components/About-Us/MissionVision";
import Governance from "./components/About-Us/Governance";
import CivilEngg from "./components/courses/CivilEngg";
import ComputerEngg from "./components/courses/ComputerEngg";
import ElectricalEngg from "./components/courses/ElectricalEngg";
import MechanicalEngg from "./components/courses/MechanicalEngg";
import ElectronicsEngg from "./components/courses/ElectronicsEngg";
import ScienceHumanities from "./components/courses/ScienceHumanities";
import CourseOffered from "./components/Admission/CourseOffered";
import Eligibility from "./components/Admission/Eligibility";
import FeesStructure from "./components/Admission/FeesStructure";
import RulesRegulations from "./components/Admission/RulesRegulations";
import AddmissionForm from "./components/Admission/AddmissionForm";
import RequiredDocuments from "./components/Admission/RequiredDocuments";
import Approvals from "./components/Admission/Approvals";
import AboutTPO from "./components/Training-Placement/AboutTPO";
import TPOTeam from "./components/Training-Placement/TPOTeam";
import CampusPlacement from "./components/Training-Placement/CampusPlacement";
import MOU from "./components/Training-Placement/MOU";
import ExaminationNotice from "./components/student-guide/ExaminationNotice";
import AcademicCalendar from "./components/student-guide/AcademicCalendar";
import ExaminationSchedule from "./components/student-guide/ExaminationSchedule";
import ExaminationDownloads from "./components/student-guide/ExaminationDownloads";
import Curriculum from "./components/student-guide/Curriculum";
import Library from "./facilities/Library";
import SyllabusDownload from "./components/student-guide/SyllabusDownload";
import Sports from "./facilities/Sports";
import Cafeteria from "./facilities/Cafeteria";
import Transportation from "./facilities/Transportation";
import Alumni from "./pages/Alumni";
import StudentGrievance from "./components/Grievance/StudentGrievance";
import AntiRagging from "./components/Grievance/AntiRagging";
import EmergencyCommittee from "./components/Grievance/EmergencyCommittee";
import WomensCommittee from "./components/Grievance/WomensCommittee";
import AntiHarassmentCommittee from "./components/Grievance/AntiHarassmentCommittee";
import AntiSexualCommittee from "./components/Grievance/AntiSexualCommittee";
import EntrepreneurshipCommittee from "./components/student-guide/EntrepreneurshipCommittee";
import SCSTCommittee from "./components/student-guide/SCSTCommittee";
import SocialLifeCommittee from "./components/student-guide/SocialLifeCommittee";
import VishakhaCommittee from "./components/Grievance/VishakhaCommittee";
import Contact from "./pages/Contact";
import Hostel from "./facilities/Hostel";

function App() {
  useEffect(() => {
    // Disable Right-Click
    const handleContextMenu = (e) => { e.preventDefault(); };
    // Disable Copy, Cut, Paste
    const handleCopy = (e) => { e.preventDefault(); };
    // Disable certain keyboard shortcuts (F12, Ctrl+Shift+I/J, Ctrl+U, Ctrl+C)
    const handleKeyDown = (e) => {
      if (e.keyCode === 123) e.preventDefault();
      if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) e.preventDefault();
      if (e.ctrlKey && e.keyCode === 85) e.preventDefault();
      if (e.ctrlKey && e.keyCode === 67) e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board-members" element={<BoardMembers />} />
          <Route path="/president-desk" element={<PresidentDesk />} />
          <Route path="/principal-desk" element={<PrincipalDesk />} />
          <Route path="/vision-mission" element={<MissionVision />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/governing-body" element={<Governance />} />
          <Route path="/courses/civil-engineering" element={<CivilEngg />} />
          <Route path="/courses/computer-engineering" element={<ComputerEngg />} />
          <Route path="/courses/electrical-engineering" element={<ElectricalEngg />} />
          <Route path="/courses/mechanical-engineering" element={<MechanicalEngg />} />
          <Route path="/courses/electronics-and-computer-engineering" element={<ElectronicsEngg />} />
          <Route path="/courses/science-and-humanities" element={<ScienceHumanities />} />
          {/* Admission Routes */}
          <Route path="/admission/program-details" element={<CourseOffered />} />
          <Route path="/admission/eligibility" element={<Eligibility />} />
          <Route path="/admission/fees-structure" element={<FeesStructure />} />
          <Route path="/admission/rules-regulations" element={<RulesRegulations />} />
          <Route path="/admission/admission-form" element={<AddmissionForm />} />
          <Route path="/admissions/admission-form" element={<AddmissionForm />} />
          <Route path="/admission/required-documents" element={<RequiredDocuments />} />
          <Route path="/admission/approvals" element={<Approvals />} />
          <Route path="/training-placements/about-tpo" element={<AboutTPO />} />
          <Route path="/training-placements/tpo-team" element={<TPOTeam />} />
          <Route path="/training-placements/campus-placements" element={<CampusPlacement />} />
          <Route path="/training-placements/mous" element={<MOU />} />
          <Route path="/student-guide/examination-notice" element={<ExaminationNotice />} />
          <Route path="/student-guide/academic-calendar" element={<AcademicCalendar />} />
          <Route path="/student-guide/examination-schedule" element={<ExaminationSchedule />} />
          <Route path="/student-guide/exam-downloads" element={<ExaminationDownloads />} />
          <Route path="/student-guide/curriculum" element={<Curriculum />} />
          <Route path="/student-guide/syllabus-download" element={<SyllabusDownload />} />
          <Route path="/facilities/library" element={<Library />} />
          <Route path="/facilities/sports" element={<Sports />} />
          <Route path="/facilities/cafeteria" element={<Cafeteria />} />
          <Route path="/facilities/hostel" element={<Hostel />} />
          <Route path="/facilities/transport" element={<Transportation />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/grievances/student-grievances" element={<StudentGrievance />} />
          <Route path="/grievances/anti-ragging-committee" element={<AntiRagging />} />
          <Route path="/grievances/emergency-contact-details" element={<EmergencyCommittee />} />
          <Route path="/grievances/womens-committee" element={<WomensCommittee />} />
          <Route path="/grievances/anti-harassment-committee" element={<AntiHarassmentCommittee />} />
          <Route path="/grievances/anti-sexual-harassment-committee" element={<AntiSexualCommittee />} />
          <Route path="/grievances/entrepreneurship-development-committee" element={<EntrepreneurshipCommittee />} />
          <Route path="/grievances/sc-st-committee" element={<SCSTCommittee />} />
          <Route path="/grievances/social-life-committee" element={<SocialLifeCommittee />} />
          <Route path="/grievances/vishakha-committee" element={<VishakhaCommittee />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
