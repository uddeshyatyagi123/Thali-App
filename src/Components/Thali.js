import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {addImage, removeImage} from '../Feature/ImageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';


const style = {

    card : {
        height: '18rem',
        width:'12rem',
        margin:'8px',
        fontFamily:'Josefin Sans'
    },
    cardImage :{
        height : '15rem',
        width : '12rem'
    },
    imageSize : {
        height:'5rem',
        width :'5rem',
    },
    heading:{
        fontFamily: 'Nosifer',
        textAlign:'center',
        
    },
    maincontainer:{
        display:'flex',
        flexWrap:'wrap'
    },
    removeButton:{
        height:'3rem',
        width:'6rem'
    }
}

function Thali() {
const dispatch = useDispatch()

const addImageHandler = (imgAdress)=>{
    dispatch(addImage(imgAdress))
}

const [error,setError] = useState(false);

const images = useSelector(state => state.images)



  return (
    <>
    <div >
   <h1 style={style.heading}>Add items in your thali</h1>
   <div style = {style.maincontainer}>
<div style= {style.container}> 
   <Card style={style.card}>
      <Card.Img variant="top" style={style.cardImage} src="https://www.cookwithnabeela.com/wp-content/uploads/2023/04/Chapati-500x375.webp"  />
      <Card.Body>
        <Card.Title>Chapati</Card.Title>
    <Button onClick={()=> addImageHandler('https://www.cookwithnabeela.com/wp-content/uploads/2023/04/Chapati-500x375.webp')}>Add</Button>
      </Card.Body>
    </Card>
     </div> 
     <div style= {style.container}>
   <Card style={style.card}>
      <Card.Img variant="top" style={style.cardImage} src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/01/mango-pickle-recipe-500x375.jpg" />
      <Card.Body>
        <Card.Title>Pickle</Card.Title>
        <Button onClick={()=> addImageHandler('https://www.indianhealthyrecipes.com/wp-content/uploads/2022/01/mango-pickle-recipe-500x375.jpg')}>Add</Button>     
         </Card.Body>
    </Card>
    </div>
<div style= {style.container}>
   <Card style={style.card} >
      <Card.Img variant="top" style={style.cardImage} src="https://www.mistrichacha.com/assets/images/products/1617608772nG4pbHUM.png" />
      <Card.Body>
        <Card.Title>Curd</Card.Title>
        <Button onClick={()=> addImageHandler('https://www.mistrichacha.com/assets/images/products/1617608772nG4pbHUM.png')}>Add</Button>
      </Card.Body>
    </Card>
    </div>
<div style= {style.container}>
   <Card style={style.card}>
      <Card.Img variant="top" style={style.cardImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2s2Y5CJo8efJzKpwA1qoqD3fgIC18t_YrqA&usqp=CAU" />
      <Card.Body>
        <Card.Title>Sweet</Card.Title>
        <Button onClick={()=> addImageHandler('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2s2Y5CJo8efJzKpwA1qoqD3fgIC18t_YrqA&usqp=CAU')}>Add</Button>
      </Card.Body>
    </Card>
    </div>
<div style= {style.container}>
   <Card style={style.card}>
      <Card.Img variant="top" style={style.cardImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKMA7kVX76l11qjX7RAx3bptDS-wmvgJMldw&usqp=CAU" />
      <Card.Body>
        <Card.Title>Daal</Card.Title>
        <Button onClick={()=> addImageHandler('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKMA7kVX76l11qjX7RAx3bptDS-wmvgJMldw&usqp=CAU')}>Add</Button>
      </Card.Body>
    </Card>
    </div>
<div style= {style.container}>
   <Card style={style.card}>
      <Card.Img variant="top" style={style.cardImage} src="https://www.funfoodfrolic.com/wp-content/uploads/2022/08/Paneer-Curry-Blog.jpg" />
      <Card.Body>
        <Card.Title>Paneer dish</Card.Title>
        <Button onClick={()=> addImageHandler('https://www.funfoodfrolic.com/wp-content/uploads/2022/08/Paneer-Curry-Blog.jpg')}>Add</Button>
      </Card.Body>
    </Card> 
    </div>
    </div><br/>
    <div>

    </div>
    {images.map((image)=>(
        <li key={image.id}>
            <img src = {image.image} alt = 'not found' style={style.imageSize}></img>
            <Button variant="outline-danger" className='btn-sm'
            onClick={(e =>{dispatch(removeImage(image.id))})}
            >Remove</Button>
        </li>
    ))}

    {console.log(images)}
    <div>
    {images.length>=2?        <div>
            <Link to="/Checkout">
            <Button style={{float:'right'}}  variant="primary">CheckOut</Button>
            </Link>
    </div>:        <div>
            <Button style={{float:'right'}}
            onClick={()=>(setError(true))}
            variant="primary">CheckOut</Button>
    </div>}
    </div>
    <br/>
<br/>
<br/>
  {error &&  <Alert  variant='danger' onClose={() => setError(false)} dismissible>
                Add atleast two items
              </Alert> }


</div>
    </>
  )
}

export default Thali
