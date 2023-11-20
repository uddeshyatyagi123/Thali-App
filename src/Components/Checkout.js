import React from 'react'
import { useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';


const styles = {
    listImg : {
        height :'2rem',
        width: '2rem'
    }
}

function Checkout() {
    const images = useSelector(state => state.images)
  return (
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Dish</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        {images.map((image)=>(
            <tr key={image.id}>
          <td>{image.id}</td>
          <td>{<img src={image.image} style={styles.listImg} alt = 'not-found'></img>}</td>
          <td>${image.price}</td> 
            </tr>
        ))}
        </tbody>
        </Table>
        <div style ={{float:'right'}}>
        Total price is ${images.length}
        </div>
        <Link to ='/'>
        <Button variant="outline-danger" className='btn'
            >Add/Remove</Button>
        </Link>
    </div>
  )
}

export default Checkout
