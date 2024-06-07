import axios from 'axios';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Constants from '../../constant';

const Nav = ()=>{

    const handleSidebar = (e)=>{
        e.preventDefault();
        $('body').toggleClass('sb-sidenav-toggled');

    }
    const handleLogout = ()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out from admin",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.post(`${Constants.BASE_URL}/logout`).then(res=>{
                localStorage.removeItem('email');
                localStorage.removeItem('name');
                localStorage.removeItem('photo');
                localStorage.removeItem('phone');
                localStorage.removeItem('token');
                // GlobalFunction.logOut();
               window.location.reload();

            }).catch(errors=>{
                // GlobalFunction.logOut();
            })
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            }
          });
        
    }
    return(
            <>
                 <nav className="sb-topnav navbar navbar-expand navbar-dark bg-theme">
           
            <Link to={'/'} className="navbar-brand ps-3">Sly Inventory & Pos</Link>
        
            <button onClick={handleSidebar} className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
        
        
            <ul className="navbar-nav align-items-center ms-auto ms-auto me-3 me-lg-4">
                <p className='text-white '>Admin</p>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#!">Settings</a></li>
                        <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><button onClick={handleLogout} className="dropdown-item">Logout</button></li>
                    </ul>
                </li>
            </ul>
                 </nav>
            </>
        )
}

export default Nav;