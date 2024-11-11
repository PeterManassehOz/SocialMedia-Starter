import React, { useState, useRef } from "react";
import "./PostShare.css";
import ProfileImage from "../../img/profileImg.jpg";
import { UilScenery, UilPlayCircle, UilLocationPoint, UilSchedule, UilTimes } from '@iconscout/react-unicons';

const PostShare = () => {
    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const img = event.target.files[0];
            setImage(URL.createObjectURL(img));  // Store directly as a URL string
        }
    };

    return (
        <div className="PostShare">
            <img src={ProfileImage} alt="Profile" />
            <div>
                <input type="text" placeholder="What's happening?" />
                <div className="postOptions">
                    <div 
                        className="option" 
                        style={{ color: 'var(--photo)' }} 
                        onClick={() => imageRef.current.click()}
                    >
                        <UilScenery />
                        Photo
                    </div>
                    <div className="option" style={{ color: 'var(--video)' }}>
                        <UilPlayCircle />
                        Video
                    </div>
                    <div className="option" style={{ color: 'var(--location)' }}>
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className="option" style={{ color: 'var(--shedule)' }}>
                        <UilSchedule />
                        Schedule
                    </div>
                    <button className="button ps-button">Share</button>
                    <div style={{ display: 'none' }}>
                        <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
                    </div>
                </div>

                {image && (
                    <div className="previewImage">
                        <UilTimes onClick={() => setImage(null)} />
                        <img src={image} alt="Preview" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostShare;
