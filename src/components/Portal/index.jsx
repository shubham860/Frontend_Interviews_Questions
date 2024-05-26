import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function Portal({children, disablePortal}) {
    const [portalElement, setPortalElement] = useState(null);

    useEffect(() => {
        const portalDiv = document.createElement('div');
        portalDiv.setAttribute('id', 'portal-root');
        document.body.appendChild(portalDiv);
        setPortalElement(portalDiv);
        
        // Clean-up function to remove the div when the component unmounts
        return () => {
            document.body.removeChild(portalDiv);
        };
    }, []);

    // If portalElement does not exist yet, don't render anything
    if (!portalElement) {
        return null;
    }

    if(disablePortal) {
        return children;
    }

    return ReactDOM.createPortal(children, portalElement)
}