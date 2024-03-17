import profile from './../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center m-4'>
            <h1 className='text-4xl text-red-500 font-extrabold'>React Knowledge Kafe</h1>
            <img className='w-10 rounded-full' src={profile} alt="" />
        </div>
    );
};

export default Header;