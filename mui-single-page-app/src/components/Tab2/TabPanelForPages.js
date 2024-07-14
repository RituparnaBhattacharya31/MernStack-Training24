import { Box, Typography } from '@mui/material'
import React from 'react';
import PropTypes from "prop-types";

function TabPanelForPages(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`tabpanel-${index}`}
            {...other}
        >
            {
                value === index &&
                <Box alignContent={"center"} textAlign={"center"}>
                    <Typography>
                        {children}
                    </Typography>
                </Box>
            }
        </div>
    )
}

TabPanelForPages.prototype = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default TabPanelForPages;