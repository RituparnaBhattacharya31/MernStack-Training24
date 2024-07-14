import { Box, Typography } from '@mui/material'
import React from 'react'

function TabPanel(props) {
    const { children, value, index } = props;
    return (
        <div>
            {
                value === index && <Box>
                    <Typography>
                        {children}
                    </Typography>
                </Box>
            }
        </div>
    )
}

export default TabPanel