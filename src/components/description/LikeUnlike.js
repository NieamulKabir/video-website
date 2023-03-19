import React from 'react';
import { useDispatch } from 'react-redux';
import likeImage from '../../assets/like.svg'
import unlikeImage from '../../assets/unlike.svg'
import { postVideoLike, postVideoUnlike } from '../../features/video/videoSlice';

const LikeUnlike = ({ id, likes, unlikes }) => {

    const dispatch = useDispatch();
    const handleLike = () => {
        dispatch(postVideoLike({ id, likes }))
    }
    const handleUnlike = () => {
        dispatch(postVideoUnlike({ id, unlikes }))
    }

    return (
        <div className="flex gap-10 w-48">
            <div className="flex gap-1">
                <div className="shrink-0">
                    <img
                        className="w-5 block"
                        src={likeImage}
                        alt="Like"
                        onClick={handleLike}
                    />
                </div>
                <div
                    className="text-sm leading-[1.7142857] text-slate-600"
                >
                    {likes ? likes : 0}
                </div>
            </div>
            <div className="flex gap-1">
                <div className="shrink-0">
                    <img
                        className="w-5 block"
                        src={unlikeImage}
                        alt="Unlike"
                        onClick={handleUnlike}
                    />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">
                    {unlikes ? unlikes : 0}
                </div>
            </div>
        </div>
    );
};

export default LikeUnlike;