import { useNavigate } from "react-router-dom";
function NavButtons() {
    const navigate = useNavigate ()

    const navButtons = () => {
        return (
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                |
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        )
    }

    return (
        <div>
            {navButtons()}
        </div>
    )
}

export default NavButtons