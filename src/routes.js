    
import HomePage from "./pages/HomePage";
import AppLayout from "./AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TravelList from "./pages/TravelList";
import DestinationList from "./pages/DestinationList";
import DestinationDetails from "./pages/DestinationDetail";
import AddTravel from "./pages/AddTravel";
import EditTravel from "./pages/EditTravel";


const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
              path: "/",
              element: <HomePage/>,
            },
            {
                path: "/travelList",
                element: <TravelList/>,
            },
            {
                path: "/destinationList",
                element: <DestinationList/>,
            },
            {
                path: "/destinationDetails/:name",
                element: <DestinationDetails/>,
            },
            {
                path: "addTravel",
                element: <AddTravel/>,
            },
            {
                path: "/editTravel/:destination",
                element: <EditTravel/>,
            },
        ],
    },
]);

export function AppRouter(){
    return <RouterProvider router={router} />;
}
