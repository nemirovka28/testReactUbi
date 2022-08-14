import About from "../Pages/About";
import Login from "../Pages/Login";
import PostIdPage from "../Pages/PostIdPages";
import Posts from "../Pages/Posts";

export const privateRoutes = [
    {path: '/about', component: <About/>},
    {path: '/post', component: <Posts/>},
    {path: '/post/:id', component: <PostIdPage/>}
];

export const pablicRoutes = [
    {path: '/login', component: <Login/>}
]