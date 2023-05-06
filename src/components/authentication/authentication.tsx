import { Backdrop, Box, Button, Fade, Modal, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { AUTHENTICATION_USER } from 'src/components/store/authSlice';
import { IS_OPEN_MODAL } from 'src/components/store/modalSlice';
import {
    AUTH_DATA,
    emptyString,
    logIn,
    logOut,
    login,
    password,
} from 'src/shared/const';
import { AuthenticationStore } from 'src/shared/types';

const authenticationModalStyle = {
    position: 'absolute' as 'absolute',
    borderRadius: '15px',
    color: '#fff',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#28282e',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'center',
};

type AuthInputs = {
    login: string;
    password: string;
};
const Authentication = () => {
    const dispatch = useDispatch();

    const isOpen = useSelector(
        (state: { modal: { isOpen: boolean } }) => state.modal.isOpen
    );
    const isLogined = useSelector(
        (state: AuthenticationStore) => state.authentication.isLogined
    );

    const handleOpenModal = () => dispatch(IS_OPEN_MODAL(true));
    const handleCloseModal = () => dispatch(IS_OPEN_MODAL(false));

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthInputs>();

    const clearAuthentication = () => {
        setValue(login, emptyString);
        setValue(password, emptyString);
    };
    const userAuthentication = () => {
        dispatch(AUTHENTICATION_USER(!isLogined));
        clearAuthentication();
        handleCloseModal();
    };

    return (
        <div>
            <Button
                onClick={isLogined ? userAuthentication : handleOpenModal}
                variant='outlined'
            >
                {isLogined ? logOut : logIn}
            </Button>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                open={isOpen}
                onClose={handleCloseModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={isOpen}>
                    <Box
                        sx={authenticationModalStyle}
                        component='form'
                        onSubmit={handleSubmit(userAuthentication)}
                    >
                        <TextField
                            error={!!errors.login}
                            autoComplete='off'
                            label='Login'
                            variant='outlined'
                            {...register(login, {
                                required: true,
                                validate: (login) => login === AUTH_DATA.login,
                            })}
                        />
                        <TextField
                            error={!!errors.password}
                            label='Password'
                            variant='outlined'
                            type='password'
                            {...register(password, {
                                required: true,
                                validate: (password) =>
                                    password === AUTH_DATA.password,
                            })}
                        />
                        <Button
                            sx={{ width: '100px' }}
                            variant='outlined'
                            type='submit'
                        >
                            LogIn
                        </Button>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default Authentication;
