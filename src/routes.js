import user from "./components/user/network.js";



const routes = (app)=>{
    app.use("/api/v1", user);

}





export default routes;