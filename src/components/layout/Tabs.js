import TabButtons from "./TabButtons"

import { useState } from "react"

function Tabs({tab_names=[], tab_content=[]}){
    const [activeTab, setActiveTab] = useState(0)
    return(
        <div>
            <TabButtons tab_info={tab_names} handleOnClick={setActiveTab}/>
            {tab_content.length > 0 && tab_content[activeTab]}
        </div>
    )
}

export default Tabs