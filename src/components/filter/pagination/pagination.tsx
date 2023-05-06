import { Button, Box } from '@mui/material';

type PaginationProps = {
    nextPage: () => void;
    prevPage: () => void;
    currentPage: number;
    totalPages: number;
}
const Pagination = ({
    nextPage,
    prevPage,
    currentPage,
    totalPages,
}: PaginationProps) => {
    return (
        <>
            <Box
                display='flex'
                minWidth='200px'
                justifyContent='space-between'
                sx={{ mb: '15px' }}
            >
                <Button variant='outlined' onClick={prevPage}>
                    Назад
                </Button>
                <Button variant='outlined' onClick={nextPage}>
                    Вперед
                </Button>
            </Box>

            <p>{`${currentPage} из ${totalPages}`}</p>
        </>
    );
};

export default Pagination;
