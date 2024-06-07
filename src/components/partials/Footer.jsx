


const Footer = () => {

    return (
        <div>
            <footer className="py-2 bg-theme mt-auto ">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-white">Copyright &copy; SlyPoS {new Date().getFullYear()} | Version 0.1.0 Beta</div>
                            <div>
                               <small className="text-white">Design & Developed By <a href="https://saabdullah.vercel.app/" target="_blank" className="text-white">SA Abdullah</a></small>
                            </div>
                        </div>
                    </div>
                </footer>
        </div>
    );
};

export default Footer;