import Header from "./Header";
import Footer from "./Footer";

export default function Layout({setPage, children}) {
    return (
        <>
            <Header setPage={setPage} />
            {children}
            <Footer />
        </>
    );
}