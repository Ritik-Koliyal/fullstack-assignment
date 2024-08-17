import { useState } from "react";

const Header = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
    console.log(e.target.value);
  }
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
    console.log(e.target.value);
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:2100/api/cards', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          title: title,
          description: description,
        })

      });
      const result = await response.json();
      if (response.ok) {
        alert('Request submitted successfully')
        setTitle('');
        setDescription('');
        document.querySelector('[data-bs-dismiss="modal"]').click();
      }
      else {
        alert('Error submitting requies', result.error)
      }
    }

    catch (error) {
      alert('An error occurred while submitting the request');
    }
  }


  return (
    <>
      <nav className="navbar">
        <div className="container-fluid  d-flex justify-content-around">
          <a className="navbar-brand text-white" href="#">abstract  | Help center</a>
          <div>
            <button className="sub-btn " data-bs-toggle="modal" data-bs-target="#exampleModal">Submit a request</button>
          </div>
        </div>
      </nav>

      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Submit a new request</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input type="text" name="title" className="form-control" placeholder="please write title here " value={title} onChange={handleTitleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea className="form-control" placeholder="add description  here" rows="4" name="description" value={description} onChange={handleDescriptionChange}></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>Send submit request</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header;