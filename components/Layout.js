import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => (
    <div className="flex flex-col min-h-screen"> 
        <Header />
        <main className="grow">{children}</main>
        <Footer />
    </div>
)
  
export default Layout