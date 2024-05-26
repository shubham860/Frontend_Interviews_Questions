import { useState } from 'react';
import { Tabs, TabContent, TabContentContainer, TabsHeader, Tab } from './tabs';

export default function TabsComponent() {
    const [currentTab, setCurrentTab] = useState(1);

    const onTabChange = (index) => {
        if (index !== currentTab) {
            setCurrentTab(index);
        }
    }
    return <div className='tabs-component'>
        <Tabs currentTab={currentTab} onTabChange={onTabChange}>
            <TabsHeader>
                <Tab label={'Tab 1'} index={1} />
                <Tab label={'Tab 2'} index={2} />
                <Tab label={'Tab 3'} index={3} />
            </TabsHeader>

            <TabContentContainer>
                <TabContent index={1}>
                    i'm having tab1 content
                </TabContent>
                <TabContent index={2}>
                    i'm having tab2 content
                </TabContent>
                <TabContent index={3}>
                    i'm having tab3 content
                </TabContent>
            </TabContentContainer>
        </Tabs>
    </div>
}