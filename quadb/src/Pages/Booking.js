import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Booking = () => {
    const params = useParams();
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
                ...storedData
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
            <form onSubmit={handleSubmit}>
                <h3>Booking Form</h3>
                <label>
                    <input type="text" name="movieName" value={formData.movieName} readOnly />
                </label>
                <input placeholder='Name' type="text" name="userName" value={formData.userName} onChange={handleInput} />
                <input placeholder="Email" type='email' name="userEmail" value={formData.userEmail} onChange={handleInput} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Booking