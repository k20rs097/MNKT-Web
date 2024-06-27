import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div id="header" className="header">
            <div className="header-menu">
                <h1 className="header-title">
                    <Link to="/build">Munakata-Web</Link>
                </h1>
            </div>
        </div>
    );
}

export default Header;