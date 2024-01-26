import { NavLink, Navigate, Outlet} from "react-router-dom";
import { useAuth } from "../../store/auth";
export const AdminLayout = () =>{

    const {user, isLoading} = useAuth();

    if(isLoading){
      return <h1>Loading ...</h1>
    }

    if(!user.isAdmin){
      return <Navigate to='error' />;
    }

    return (
        <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light flex-column">
          <div className="container">
            <NavLink className="navbar-brand" exact to="/admin/">
              Dashboard
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/admin-users">
                    Users
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/contacts">
                    Contacts
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/teams">
                    Teams
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/problem-statements">
                    Problem Statements
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/results">
                    Results
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/logout">
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
    );
};