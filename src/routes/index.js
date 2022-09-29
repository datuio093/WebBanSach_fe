import ResignPage from "../container/HomeTemplate/ResignPage";
import LoginPage from "../container/HomeTemplate/SignUpPage";


const routesUser=[
    {
        exact:true,
        path:"/login",
        Component:LoginPage
    },
    {
        exact:false,
        path:"/resign",
        Component:ResignPage
    },
   
];

export {routesUser};