import React from 'react'
import { Stack, Typography,  TextField, Card, Button,CardContent,CardActions} from '@mui/material'
export default function Pending(props) {


  return (
    <>
    <form className='pendingTask' onSubmit={props.addTask}>
        {(props.inList===false && props.isEmpty===false) && <TextField style={{width:'500px'}}
          id="outlined-basic"
          label="Enter task"
          name='task'
          value={props.formData.task}
          onChange={props.handleChange}
        />}
        {(props.inList && props.isEmpty===false) && <TextField error
          style={{width:'500px'}}
          id="outlined-error"
          label="Already in list"
          value={props.formData.task}
          onChange={props.handleChange}
        />}
        {props.isEmpty && <TextField error
          style={{width:'500px'}}
          id="outlined-error"
          label="Enter task in textbox"
          value={props.formData.task}
          onChange={props.handleChange}
        />}
        <button>Add task</button>
    </form>

    <Stack spacing={3} direction={'column'} style={{display:'flex',flexDirection:'column', alignItems:'center', marginTop:'15px'}}>
        <Typography variant="h4" color="initial">
            My tasks
        </Typography>
        {props.tasks.length===0 && <Typography variant="h5" color="initial">
            You have no pending tasks
            </Typography>}
        {props.tasks.length!==0 && props.tasks.map((item,index)=>{
            return <Card style={{width:'500px'}}>
                <CardContent>
                    <Typography variant="body1" color="initial" align='left'>
                        {item}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" onClick={()=>props.deleteTask(index)}>
                        delete task
                    </Button>
                    <Button variant="contained" color="primary" onClick={()=>props.completeTask(index)}>
                        complete task
                    </Button>
                </CardActions>
            </Card>
        })}
        <Button variant="contained" color="primary" onClick={props.clearPending}>
            Clear tasks
        </Button>
    </Stack>
    </>
  )
}
