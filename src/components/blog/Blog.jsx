import PropTypes from 'prop-types';
import { FaBeer } from 'react-icons/fa';

const Blog = ({blog}) => {
    const {title, cover, author_img, reading_time, author, posted_date, hashtags} = blog
    return (
        <div className='my-14 space-y-5 p-5'>
            <img className='rounded-2xl' src={cover} alt="" />
            <h3 className="text-3xl font-extrabold">{title}</h3>
            <div className='flex justify-between'>
            <div className='flex gap-2'>
                <div><img className='w-16 rounded-full' src={author_img} alt="" /></div>
                <div>
                <p className='text-xl font-semibold'>{author}</p>
                <p className='text-xl font-semibold'>{posted_date}</p>
                </div>
            </div>
            <p className='text-2xl font-bold'><span>{reading_time} </span>  Min</p>
            </div>
            <p className='text-xl font-semibold'><span>#_{hashtags[0]}   #_{hashtags[1]}   #_{hashtags[2]}</span></p>
        </div>
    );
};

Blog.propTypes = {
blog: PropTypes.object.isRequired
}
export default Blog;