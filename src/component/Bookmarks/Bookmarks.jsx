import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='w-1/3  ml-2'>
            <h1 className='p-5 border rounded-lg mb-3 border-green-900 text-green-700'>Spent time on read: {readingTime} min</h1>
            <div className='bg-neutral-300 rounded-lg p-5'>
                <h2>Bookmarked Blogs: {bookmarks.length}</h2>
                <div>
                    {
                        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
};

Bookmark.propTypes ={
    bookmarks: PropTypes.func
}
export default Bookmarks;