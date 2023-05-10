import React from "react"
import RvImage from '../../../Svg/MyReviewRvImage.svg'
import RvQR from '../../../Svg/MyReviewQR.svg'
import "./RvDetailsQR.css";

function RvDetailsQR() {
    return (
        <div className="MyReviewQR-container">
            <div className="MyReviewQRImageContainer">
                <img className="MyReviewQRImage" src={RvImage} />
            </div>
            <div className="MyReviewQR-QRContainer">
                <img src={RvQR} />
                <h1>Scan this QR Code to Bring up this RV on Your Phone</h1>
            </div>

        </div>
    );
}

export default RvDetailsQR