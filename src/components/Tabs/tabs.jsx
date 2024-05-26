import React, { createContext, useContext } from "react"
import './index.css';

const TabsContext = createContext();

export function Tabs(props) {
    const { children, onTabChange, currentTab } = props;

    return <TabsContext.Provider value={{onTabChange, currentTab}} >
        <div className="tabs">
            {children}
        </div>
    </TabsContext.Provider>
}

export function TabsHeader({children}) {
    return <div className="tabsHeader">
        {children}
    </div>
} 

export function Tab({index, label}) {
    const { currentTab, onTabChange } = useContext(TabsContext);
    const tabClasses = currentTab === index ? 'tab active' : 'tab';
    return <div className={tabClasses} onClick={() => onTabChange(index)}>
        {label}
    </div>
}


export function TabContentContainer({children}) {
    return <div className="tabsContentContainer">
        {children}
    </div>
}

export function TabContent({index, children}) {
    const { currentTab } = useContext(TabsContext);
    return index === currentTab ? <div className="content">{children}</div> : null;
}