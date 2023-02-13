import './Navbar.css';
import { HiChevronRight } from "react-icons/hi";
const Navbar = () => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">Home</li>
                <span><HiChevronRight /></span>
                <li className="breadcrumb-item">Administrator</li>
                <span><HiChevronRight /></span>
                <li className="breadcrumb-item active">Logger Search</li>
            </ol>
        </nav>
    )
};

export default Navbar;
