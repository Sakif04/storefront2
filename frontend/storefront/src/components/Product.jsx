import { Card,Typography } from '@mui/material';

export default function Product({prodItem}){
    const cardStyle = {
        display: 'block',
        padding:'0.5rem',
        fontSize:"0.5rem",
        width: '100px',
        transitionDuration: '0.3s',
        height: '25vh'
    }
    const headerStyle={
        color:"#0E747E", 
        fontSize:"10px",
    }

    return(<Card style={cardStyle} >
        
        <Typography style={headerStyle} >{
            prodItem.id
        }
        </Typography>
        <Typography style={headerStyle} >
        {prodItem.title}</Typography> 

        <p>
        without Tax:
        {prodItem.price}
        </p>
        <p>
        with Tax:{
            prodItem.price_with_tax
        }</p>
        </Card>


    )
}