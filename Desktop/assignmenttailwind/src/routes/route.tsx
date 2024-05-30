import { createBrowserRouter } from "react-router-dom";
import Workshop_tail from "@tailwindworkshop/Workshop_tail";
import Workshop_back from "@tailwindworkshop/Workshop_back";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Workshop_tail />,
  },
  {
    path: "/back",
    element: <Workshop_back />,
  },
],{basename:"/assignment_tailwind"});

export default route;
