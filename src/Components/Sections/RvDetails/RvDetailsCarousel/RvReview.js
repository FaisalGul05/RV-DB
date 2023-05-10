import RvReviewProfile from '../../../Svg/MyReviewRvProfile.svg'
import "./RvDetailsCarousel.css";
import { Rating } from "@mui/material";

function RvReview({ name, rating }) {
    // console.log({ name, rating })
    return (
        <>
            <div className="RvCarouselItemContainer">
                <div className="RvCarouselImageContainer">
                    <img className="RvCarouselImage" src={RvReviewProfile} />
                </div>
                <div className='RvCarouselDetailContainer'>
                    <div className="RvCarouselDetailItem">
                        <h2 className='RvCarouselProfileName'>{name}</h2>
                        <div className='RvRatingList'>
                            {rating.map((item, index) => {
                                return (<div key={index} className='RvRatingItemBox'>
                                    <p className='RvRatingItemtitle'>{item.title}</p>
                                    <Rating
                                        name="read-only"
                                        value={item.rating}
                                        readOnly
                                        style={{ color: "#00669E" }}
                                    />
                                </div>
                                )
                            })}
                        </div>
                        <div className='RvRatingText'>
                            Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RvReview