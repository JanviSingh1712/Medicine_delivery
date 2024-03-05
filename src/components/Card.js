import React from 'react';

export default function Card() {
  return (
    <div>
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card" style={{ "width": "18rem", "maxHeight": "360px" }}>
            <img src="./Images2/Image10.avif" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is some important text.
              </p>
              <div className='container w-100'>
                <select className='m-2 h-100 bg-success rounded'>
                  {Array.from(Array(6), (e, i) => {
                    return (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    )
                  })}
                </select>

                {/* <select className='m-2 h-100 bg-success rounded'>
                  <option value="">Half</option>
                  <option value="full">full</option>
                </select> */}
                <div className='d-inline h-100 fs-4'>Total Price: </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ "width": "18rem", "maxHeight": "360px" }}>
            <img src="./Images2/Image3.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is some important text.
              </p>
              <div className='container w-100'>
                <select className='m-2 h-100 bg-success rounded'>
                  {Array.from(Array(6), (e, i) => {
                    return (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    )
                  })}
                </select>
{/* 
                <select className='m-2 h-100 bg-success rounded'>
                  <option value="">Half</option>
                  <option value="full">full</option>
                </select> */}
                <div className='d-inline h-100 fs-4'>Total Price:</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ "width": "18rem", "maxHeight": "360px" }}>
            <img src="./Images2/Image4.avif" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is some important text.
              </p>
              <div className='container w-100'>
                <select className='m-2 h-100 bg-success rounded'>
                  {Array.from(Array(6), (e, i) => {
                    return (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    )
                  })}
                </select>
{/* 
                <select className='m-2 h-100 bg-success rounded'>
                  <option value="">Half</option>
                  <option value="full">full</option>
                </select> */}
                <div className='d-inline h-100 fs-4'>Total Price:</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ "width": "18rem", "maxHeight": "360px" }}>
            <img src="./Images2/Image5.webp" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is some important text.
              </p>
              <div className='container w-100'>
                <select className='m-2 h-100 bg-success rounded'>
                  {Array.from(Array(6), (e, i) => {
                    return (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    )
                  })}
                </select>
{/* 
                <select className='m-2 h-100 bg-success rounded'>
                  <option value="">Half</option>
                  <option value="full">full</option>
                </select> */}
                <div className='d-inline h-100 fs-4'>Total Price:</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card" style={{ "width": "18rem", "maxHeight": "360px" }}>
            <img src="./Images2/Image10.avif" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is some important text.
              </p>
              <div className='container w-100'>
                <select className='m-2 h-100 bg-success rounded'>
                  {Array.from(Array(6), (e, i) => {
                    return (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    )
                  })}
                </select>

                {/* <select className='m-2 h-100 bg-success rounded'>
                  <option value="">Half</option>
                  <option value="full">full</option>
                </select> */}
                <div className='d-inline h-100 fs-4'>Total Price:</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ "width": "18rem", "maxHeight": "360px" }}>
            <img src="./Images2/Image7.webp" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is some important text.
              </p>
              <div className='container w-100'>
                <select className='m-2 h-100 bg-success rounded'>
                  {Array.from(Array(6), (e, i) => {
                    return (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    )
                  })}
                </select>
{/* 
                <select className='m-2 h-100 bg-success rounded'>
                  <option value="">Half</option>
                  <option value="full">full</option>
                </select> */}
                <div className='d-inline h-100 fs-4'>Total Price:</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ "width": "18rem", "maxHeight": "360px" }}>
            <img src="./Images2/Image8.webp" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is some important text.
              </p>
              <div className='container w-100'>
                <select className='m-2 h-100 bg-success rounded'>
                  {Array.from(Array(6), (e, i) => {
                    return (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    )
                  })}
                </select>
{/* 
                <select className='m-2 h-100 bg-success rounded'>
                  <option value="">Half</option>
                  <option value="full">full</option>
                </select> */}
                <div className='d-inline h-100 fs-4'>Total Price:</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ "width": "18rem", "maxHeight": "360px" }}>
            <img src="./Images2/Image9.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is some important text.
              </p>
              <div className='container w-100'>
                <select className='m-2 h-100 bg-success rounded'>
                  {Array.from(Array(6), (e, i) => {
                    return (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    )
                  })}
                </select>

                {/* <select className='m-2 h-100 bg-success rounded'>
                  <option value="">Half</option>
                  <option value="full">full</option>
                </select> */}
                <div className='d-inline h-100 fs-4'>Total Price:</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
