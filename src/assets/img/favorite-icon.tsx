type FavoriteProps = {
    active: boolean;
    onClick: () => void;
}
const FavoriteIcon = ({ active, onClick }: FavoriteProps) => {
    return (
        <svg
            onClick={onClick}
            enableBackground='new 0 0 50 50'
            height='50px'
            id='Layer_1'
            version='1.1'
            viewBox='0 0 50 50'
            width='50px'
            xmlSpace='preserve'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
        >
            <rect fill='none' height='50' width='50' />
            <polygon
                className='favorite_icon'
                fill={active ? '#f19509' : 'none'}
                points='25,3.553 30.695,18.321 46.5,19.173   34.214,29.152 38.287,44.447 25,35.848 11.712,44.447 15.786,29.152 3.5,19.173 19.305,18.321 '
                stroke='#fff'
                strokeMiterlimit='10'
                strokeWidth='2'
            />
        </svg>
    );
};

export default FavoriteIcon;
