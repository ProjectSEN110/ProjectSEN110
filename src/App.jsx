import Vidme from './Vidme.jsx'
import Sidebar from './Sidebar.jsx';
import Header from './Header.jsx';
import ReportSiteForm from './ReportSiteform.jsx';
import RiskMap from './RiskMap.jsx';
import VolunteerForm from './VolunteerForm.jsx';
import SymptomChecker from './Symptoms.jsx';


function App(){
 
return(
<>
<Header/>
<Sidebar/>
<SymptomChecker/>
<Vidme/>
<ReportSiteForm/>
<RiskMap/>
<VolunteerForm/>
</>
);
}
export default App