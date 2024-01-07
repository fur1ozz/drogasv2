import Footer from "../components/Footer";
import WorkerLayout from "../components/WorkerLayout";
import HeaderWorker from "../components/HeaderWorker";
import {ConditionalAccessComponent} from "../utils/UserAccesTest";

function WorkerWelcomePage() {
    return(
        <ConditionalAccessComponent >
            <HeaderWorker />
            <WorkerLayout />
            <Footer />
        </ConditionalAccessComponent>
    );
}
export default WorkerWelcomePage;