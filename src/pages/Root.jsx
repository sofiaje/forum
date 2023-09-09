import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root = () => {
    return ( 
        <div className="pageWrapper">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
     );
}
 
export default Root;