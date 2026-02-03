import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', gap: '20px', padding: '1rem', borderBottom: '1px solid #ccc' }}>
            <div className="logo"><strong>Caribbean Audiology</strong></div>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/pediatric">Pediatric</Link>
            <Link to="/tinnitus">Tinnitus</Link>
        </nav>
    )
}

export default Navbar;