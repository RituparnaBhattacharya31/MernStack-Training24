import { Tabs, Tab, Box } from '@mui/material'
import React, { useState } from 'react'
import TabPanel from './TabPanel';

function HeaderTabWithLink() {
    const [value, setValue] = useState("tab1");

    const handleTabChange = (e, value) => {
        console.log(value)
        setValue(value)
    }

    return (
        <div>
            <Box sx={{ width: "100%", borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleTabChange} textColor='secondary' indicatorColor='secondary' aria-label="basic tabs example" centered>
                    <Tab label="Tab 1" value={"tab1"} />
                    <Tab label="Tab 2" value={"tab2"} />
                    <Tab label="Tab 3" value={"tab3"} />
                    <Tab label="Tab 4" value={"tab4"} />
                </Tabs>
            </Box>

            <TabPanel value={value} index={"tab1"}>Content for Tab 1</TabPanel>
            <TabPanel value={value} index={"tab2"}>Content for Tab 2</TabPanel>
            <TabPanel value={value} index={"tab3"}>Content for Tab 3</TabPanel>
            <TabPanel value={value} index={"tab4"}>Content for Tab 4</TabPanel>
        </div>
    )
}

export default HeaderTabWithLink;