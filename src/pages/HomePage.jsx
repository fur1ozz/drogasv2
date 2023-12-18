import Home from "../components/Home";
import Footer from "../components/Footer";
import Header2 from "../components/Header2";
import {DangerToast, Toast, WarningToast} from "../utils/Toasts";

function HomePage(){
    return(
        <>
            {/*<Toast message="Item moved successfully." />*/}
            {/*<DangerToast message="Item has been deleted." />*/}
            {/*<WarningToast message="Improve password difficulty." />*/}
            <Header2 />
            <Home />
            <Footer />
        </>
    );
}
export default HomePage;