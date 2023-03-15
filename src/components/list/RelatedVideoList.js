import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../features/relatedVideos/relatedVideosSlice';
import Loading from '../../utils/Loading';
import RelatedVideoListItem from './RelatedVideoListItem';

const RelatedVideoList = ({ currentVideoId, tags }) => {
    const dispatch = useDispatch()
    const { relatedVideos, isLoading, isError, error } = useSelector((state) => state.relatedVideos);

    useEffect(() => {
        dispatch(fetchRelatedVideos({ tags, id: currentVideoId }))
    }, [currentVideoId, dispatch, tags])


    let content = null;
    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>

    if (!isLoading && !isError && relatedVideos?.length === 0) content = <div className="col-span-12">No Related videos Found...</div>

    if (!isLoading && !isError && relatedVideos?.length > 0){
        content = relatedVideos.map((video)=><RelatedVideoListItem key={video.id} video={video} />)
    }
    return (
        <div
            className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
        >

            {content}
        </div>
    );
};

export default RelatedVideoList;