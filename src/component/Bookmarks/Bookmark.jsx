import React from 'react';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className='p-3 bg-white my-2 rounded-lg'>
            <p>{title}</p>
        </div>
    );
};

export default Bookmark;