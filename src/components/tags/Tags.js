import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags } from '../../features/tags/tagsSlice';
import AuthorTag from './AuthorTag';
import ClearFilter from './ClearFilter';
// import Loading from '../../utils/Loading';
import Tag from './Tag';

const Tags = () => {
    const dispatch = useDispatch();

    const { tags } = useSelector((state) => state.tags);

    const { tags: selectedTags, authorTag, search, } = useSelector((state) => state.filter);

    const allCleared = selectedTags.length === 0 && authorTag === "" && search === "" ? true : false;


    useEffect(() => {
        dispatch(fetchTags())
    }, [dispatch])



    return tags?.length > 0 ? (
        <section
            className={!allCleared ? `flex justify-between px-9 items-center ` : null}
        >
            <div
                className={`max-w-7xl ${allCleared ? "mx-auto" : null
                    } px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto`}
            >
                {tags.map((tag) => (
                    <Tag key={tag.id} tag={tag} />
                ))}

                {
                    authorTag !== "" && <AuthorTag authorTag={authorTag} />
                }
            </div>
            <div>
                <ClearFilter />
            </div>
        </section>
    ) : null
};

export default Tags;