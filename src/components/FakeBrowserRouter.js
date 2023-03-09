import React, { useState } from "react";

const FakeBrowserRouter = ({children}) => {
    //I can interceptlocation and inject it
    const [location, setLocation] = useState(window.location);

    return (<>{children}</>);
}

export default FakeBrowserRouter;