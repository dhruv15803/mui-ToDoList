import React from 'react'
import { Stack, Typography,Card,CardContent, Button} from '@mui/material';

export default function Completed(props) {
    console.log(props.completedTasks);
  return (
    <>
    <Stack direction={'column'} spacing={4} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        {props.completedTasks.length===0 && <Typography variant="h5" color="initial">
            You have no completed Tasks
            </Typography>}
        {props.completedTasks.length!==0 && props.completedTasks.map((item)=>{
            return <Card style={{width:'500px'}}>
            <CardContent>
                <Typography variant="body1" color="initial">
                    {item}
                </Typography>
            </CardContent>
        </Card>
        })}
        {props.completedTasks.length!==0 && <Button variant="contained" color="primary" onClick={props.clearCompleted}>
            Clear all
        </Button>}
    </Stack>
    </>
  )
}
