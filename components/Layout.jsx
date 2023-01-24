import Header from "./Header";
import Footer from "./Footer";
import Bio from "./Bio";
import Circle from "./Circle";

export default function Layout(props) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
}