import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Booking = () => {
    const params = useParams();
    console.log(params)
    const [formData, setFormData] = useState({
        movieName: params.name,
        userName: "",
        userEmail: "",
    })

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userFormData'))
        if (storedData) {
            setFormData(prevData => ({
                ...prevData,
                ...storedData,
                movieName: params.name
            }))
        }
    }, [])

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('userFormData', JSON.stringify(formData))
    }

    return (
        <div className="form-overlay">
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <h3 className='form--heading'>Booking Form</h3>
                    <label>
                        <input className="input-tile" type="text" name="movieName" value={formData.movieName} readOnly />
                    </label>
                    <input className="input-tile" placeholder='Name' type="text" name="userName" value={formData.userName} onChange={handleInput} />
                    <input className="input-tile" placeholder="Email" type='email' name="userEmail" value={formData.userEmail} onChange={handleInput} />
                    <button className="input-tile submit-button" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Booking