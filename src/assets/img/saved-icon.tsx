type SavedIconProps = {
    active: boolean;
    onClick: () => void;
}
const SavedIcon = ({ active, onClick }: SavedIconProps) => {
    return (
        <svg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'>
            <rect fill='none' height='256' width='256' />
            <path
                d='M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z'
                opacity='1'
                fill='none'
            />
            <path
                onClick={onClick}
                className='saved_icon'
                d='M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z'
                fill={active ? 'red' : 'none'}
                stroke='#fff'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='10'
            />
        </svg>
    );
};

export default SavedIcon;
