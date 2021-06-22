import IRoute from "../interfaces/IRoute";
import EditPage from "../pages/Edit";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

const authRoutes: IRoute[] = [
    { path: "/login", exact: true, auth: false, component: LoginPage, name: "Login" },
    { path: "/register", exact: true, auth: false, component: RegisterPage, name: "Register" },
];
const blogRoutes: IRoute[] = [
    { path: "/edit", exact: true, auth: true, component: EditPage, name: "Edit" },
    { path: "/edit/:blogID", exact: true, auth: true, component: EditPage, name: "Edit" },
    { path: "/blogs/:blogID", exact: true, auth: false, component: EditPage, name: "Blog" },
];
const mainRoutes: IRoute[] = [{ path: "/", exact: true, auth: true, component: HomePage, name: "Home" }];

const routes: IRoute[] = [...authRoutes, ...blogRoutes, ...mainRoutes];

export default routes;

/* 
    TODO: temporarily skip part 3 - up to nav bar
*/
