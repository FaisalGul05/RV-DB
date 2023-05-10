import React from 'react'
import './RvDetailsReviewForm.css'
import RvImage from '../../../Svg/MyReviewRv.svg'
import { Rating } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { useForm } from 'react-hook-form'

function RvDetailsReviewForm() {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm();

    // console.log({ errors, isValid })
    const handleRatingClick = (e) => {
        const { name, value } = e.target
        // console.log({ name, value })
    }

    const onSubmit = (data) => { }
    
    return (
        <div className='RvFormContainer'>
            <div className='RvFormDetailContainer'>
                <h3 className='RvHeading'>Review This RV</h3>
                <div className='RvRatingFormContainer'>
                    <div className='RvRatingForm'>
                        {['Overall', 'Bathroom', 'Kitchen', 'Interior Layout Design', 'Exterior Design'].map((item, index) => (
                            <div key={index} className='RvFormRow'>
                                <label className='formlabel'>{item}</label>
                                <Rating className='RvRating'
                                    size='large'
                                    name={item}
                                    value={item.rating}
                                    onClick={handleRatingClick}
                                    style={{ color: "#00669E" }}
                                    emptyIcon={
                                        <StarBorderIcon fontSize="inherit" className='RvRatingEmptyIcon' />
                                    }
                                />
                            </div>
                        ))}
                    </div>
                    <textarea {...register("RvReview", { required: true })} className={`RVTextField ${errors.RvReview?.type === 'required' && 'error'}`} placeholder='Type a Review....'></textarea>
                    <button onClick={handleSubmit(onSubmit)} className='RvFormBtn'>Submit Review</button>
                </div>
            </div>
            <div className='RvFormImageContainer'>
                <img src={RvImage} className='RvFormImage' />
            </div>
        </div>
    )
}

export default RvDetailsReviewForm