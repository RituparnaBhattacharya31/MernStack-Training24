import React from 'react'
import { Button, Card, FormControl, Input, InputLabel, TextField } from '@mui/material'

function MuiForm({ handleSubmit }) {
    return (
        <form onSubmit={(e) => handleSubmit(e)} style={{ backgroundColor: "aliceblue" }} autoComplete='off'>
            <Card
                sx={{
                    width: 200, height: 400, marginTop: "30px",
                    backgroundColor: "#FFFFF", marginLeft: "auto", marginRight: "auto", mt: 2
                }}
            >
                <FormControl variant='standard' sx={{ mt: 2 }}>
                    {/* <InputLabel html="name">Name</InputLabel> */}
                    <TextField id="name" name="name" label="Name"></TextField>
                </FormControl>
                <br></br>
                <FormControl variant='standard' sx={{ mt: 2 }}>
                    <InputLabel html="email">Email</InputLabel>
                    <Input id="email" name="email"></Input>
                </FormControl>
                <br></br>
                <FormControl variant='standard' sx={{ mt: 2 }}>
                    <InputLabel html="name">Phone</InputLabel>
                    <Input id="phone" name="phone"></Input>
                </FormControl>
                <br></br>
                <FormControl variant='standard' sx={{ mt: 2 }}>
                    <InputLabel html="name">Message</InputLabel>
                    <Input id="message" name="message" multiline rows={4}></Input>
                </FormControl>
                <br></br>
                <Button variant='contained' sx={{ mt: 2 }} type='submit'>Submit</Button>
            </Card>
        </form>
    )
}

export default MuiForm