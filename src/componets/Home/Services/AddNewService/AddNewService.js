import React, { useRef } from 'react';

import './AddNewService.css'


const AddNewService = () => {
    const ServiceName =useRef()
    const ServicePrice =useRef()
    const ServiceImg =useRef()
    const ServiceDescription =useRef();

    const handleAddNewService=(e)=>{
        const newService ={
            name:ServiceName.current.value,
            price:ServicePrice.current.value,
            img:ServiceImg.current.value,
            description:ServiceDescription.current.value
        }
        console.log(newService);
        
        fetch(`https://floating-scrubland-94674.herokuapp.com/services`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newService)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        e.target.reset()
        e.preventDefault();
    }

    return (
        <div className='p-5 w-50 d-flex justify-content-center align-item-center flex-column'>
            <div className='w-100'>
                <form onSubmit={handleAddNewService} className='w-100'>
                    <div className="mb-3">
                        <input type="text" ref={ServiceName} placeholder="Service name" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <input type="text" ref={ServicePrice} placeholder="price" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <input type="text" ref={ServiceImg} placeholder="Image URL" className="form-control" />
                    </div>
                    <div className="mb-3">
                    <textarea type="text" ref={ServiceDescription} placeholder="Description" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <input type="submit" placeholder="Booking Service" className="form-control bg-success text-white" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewService;