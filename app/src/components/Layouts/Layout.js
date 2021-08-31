import Header from "./Header";
import Footer from './Footer';

function Layout(props) {
  return (
    <>
      <Header />
      <main className="flex-grow">{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
