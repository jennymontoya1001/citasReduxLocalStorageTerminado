import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Container } from "../container/Container";

export const AppRouter = () => {
    return (
       <BrowserRouter>
         <Routes>
             <Route path="/" element={<Container/>}/>
         </Routes>
       </BrowserRouter>
    )
}
