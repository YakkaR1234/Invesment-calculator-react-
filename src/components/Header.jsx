import logo from "../assets/headerIcon.png";

export default function Header() {
    return (
        <header id="header">
            <img src={logo} alt="calculator icon" />
            <h1>Investment Calculator</h1>
        </header>
    );
}
