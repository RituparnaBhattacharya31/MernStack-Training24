import { Tabs, Tab, Box } from '@mui/material'
import React, { useState } from 'react';
import TabPanel from './TabPanelForPages';
import Home from "../../pages/Home";
import About from "../../pages/About";
import Settings from "../../pages/Settings";
import ContactUs from "../../pages/ContactUs";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import MailIcon from '@mui/icons-material/Mail'; // https://mui.com/material-ui/material-icons/

function HeaderTabWithLink() {
    const [value, setValue] = useState("home");

    const handleTabChange = (e, value) => {
        console.log(value)
        setValue(value)
    }

    return (
        <div>
            <Box sx={{ width: "100%", borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleTabChange} textColor='secondary' indicatorColor='secondary' aria-label="basic tabs example" centered variant="fullWidth">
                    <Tab icon={<HomeIcon />} style={{fontWeight: "bolder"}} label="Home" value={"home"} />
                    <Tab icon={<InfoIcon />} style={{fontWeight: "bolder"}} label="About" value={"about"} />
                    <Tab icon={<SettingsIcon />} style={{fontWeight: "bolder"}} label="Settings" value={"settings"} disabled />
                    <Tab icon={<MailIcon />} style={{fontWeight: "bolder"}} label="Contact Us" value={"contact"} />
                </Tabs>
            </Box>

            <TabPanel value={value} index={"home"}>
                <Home />
            </TabPanel>
            <TabPanel value={value} index={"about"}>
                <About />
            </TabPanel>
            <TabPanel value={value} index={"settings"}>
                <Settings />
            </TabPanel>
            <TabPanel value={value} index={"contact"}>
                <ContactUs />
            </TabPanel>
        </div>
    )
}

export default HeaderTabWithLink;