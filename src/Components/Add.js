import React,{useState} from 'react'
import {Button,Modal} from 'react-bootstrap'


function Add({SetMovieData ,MovieData}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[title,SetTitle]=useState('')
    const[description,SetDescription]=useState('')
    const[posterURL,SetPosterURL]=useState('')
    const[rating,SetRating]=useState('')
const AddMovie=(e)=>{
  e.preventDefault();
    let newMovie={
        id:Math.random(),
        title:title,
        description:description,
        rating:rating,
        posterURL:posterURL,
    };
    SetMovieData([...MovieData,newMovie])
    handleClose();

}
  return (
    <div>
      <Button variant="primary" onClick={handleShow} className="AddButton">
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose} className="Modal">
      <Modal.Header >
          <Modal.Title>Add a movie to your list</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <label>Title</label>
                <input type="text" name="title" onChange={e=>SetTitle(e.target.value)}/>
            </div>
            <div>
                <label>PosterURL</label>
                <input type="text" name="posterURL" onChange={e=>SetPosterURL(e.target.value)} />
            </div>
            <div>
                <label>Description</label>
                <input type="text" name="description" onChange={e=>SetDescription(e.target.value)}/>
            </div>
            <div>
                <label>Rating</label>
                <input type="text" name="rating" onChange={e=>SetRating(e.target.value)} />
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={AddMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Add