import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'




export default function Body(props) {
  return (
    <>
    <Container maxWidth="md" style={{ display:'flex', marginTop:'17px',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
        <Typography variant="h3" color="initial" align='center'>
            Welcome to iList
        </Typography>
        <Typography variant="body1" color="initial" align='center'>
            Note down your daily tasks with iList. From Groceries to Goals you want to achieve.
        </Typography>
        <Container maxWidth="xs" style={{display:'flex', justifyContent:'center'}}>
        <Button variant={props.pendingVariant} color="primary" style={{width:'200px',margin:'15px 10px',height:'35px'}} onClick={props.showPending}>
          Your tasks
        </Button>
        <Button variant={props.completedVariant} color="primary" style={{width:'200px',height:'35px',margin:'15px 10px'}} onClick={props.showCompleted}>
          Completed tasks
        </Button>
        </Container>
    </Container>
    </>
  )
}
