import React from 'react'
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const PostList = ({ post }) => {
    return (
        <div>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
               
                    <Link to={`/post/${post.id}`}>
                    <Typography variant="h4" color="MediumSeaGreen" component="div"
                     sx={{ textAlign: 'left' }}>
                        {post.title}
                    </Typography>
                    </Link>
                    <Typography variant="p" color="Coral" component="div"
                     sx={{ textAlign: 'left' }}>
                        {post.content}
                    </Typography>
                    <Typography variant="h7" color="Indigo" component="div"
                     sx={{ textAlign: 'left' }}>
                        {post.slug}
                    </Typography>
                    

                </CardContent>
                <CardActions>
            
                    <Stack direction="row" spacing={0.5}>
                        <Link to={`/post/update/${post.id}`}>
                            <Button variant="contained" color="success">
                                Edit
                            </Button>
                        </Link>
                        <Button variant="contained" color="error"> Delete</Button>
                    </Stack>
                </CardActions>
            </Card>
        </div>
    )
}

export default PostList