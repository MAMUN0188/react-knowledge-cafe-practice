import PropTypes from 'prop-types';
import img from '../../assets/images/4.jpg'
import babyImg from '../../assets/images/girl2.jpg'
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleBookmarks, handleReadingTime }) => {
    const { id, title, readingTime, cover, posted, author, authorImg, date, hashtags } = blog
    return (
        <div>
            <img className='w-full h-80' src={img} alt="" />
            <div className='flex justify-between items-center text-xl'>
                <div className='flex gap-2 my-3'>
                    <img className='w-12' src={babyImg} alt="" />
                    <div>
                        <div>{author}</div>
                        <div>{date}</div>
                    </div>
                </div>
                <p>{readingTime} min read <button onClick={() => handleBookmarks(blog)}><FaRegBookmark></FaRegBookmark></button></p>
            </div>
            <h3 className='font-bold text-2xl'>{title}</h3>
            <p className='my-2'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a className='mr-2' href="">{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleReadingTime(id, readingTime)} className='text-red-400 underline mb-6'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
    handleBookmarks: PropTypes.func
}
export default Blog;