import Navbar from "./Navbar";

const Layout = ({children}) => {

    return(
        <div className="content">
            <Navbar/>
            {children}
            
            {/* <footer><h1 className="foot">Create. Every. Day.</h1></footer>
            <style jsx>{`
        .foot {
            color: #000435;
            }
        `}</style> */}
        </div>
        
    );
}

export default Layout


//#000435