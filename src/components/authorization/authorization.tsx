import { Backdrop, Box, Button, Fade, Modal, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
    AUTH_DATA,
    EMPTY_STRING,
    LOG_IN,
    LOG_OUT,
    PASSWORD,
    authorizationModalStyle,
} from 'src/shared/const';
import { AuthorizationStore, ModalStore } from 'src/shared/types';
import { USER_AUTHORIZATION } from 'src/store/authSlice';
import { TOGGLE_MODAL } from 'src/store/modalSlice';

type AuthInputs = {
    login: string;
    password: string;
};
const Authorization = () => {
    const dispatch = useDispatch();

    const isOpen = useSelector((state: ModalStore) => state.modal.isOpen);
    const isLogined = useSelector(
        (state: AuthorizationStore) => state.authorization.isLogined
    );

    const handleOpenModal = () => dispatch(TOGGLE_MODAL(true));
    const handleCloseModal = () => dispatch(TOGGLE_MODAL(false));

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthInputs>();

    const clearAuthorizationForm = () => {
        setValue(LOG_IN, EMPTY_STRING);
        setValue(PASSWORD, EMPTY_STRING);
    };

    const userAuthorization = () => {
        dispatch(USER_AUTHORIZATION(!isLogined));
        clearAuthorizationForm();
        handleCloseModal();
    };

    return (
        <div>
            <Button
                onClick={isLogined ? userAuthorization : handleOpenModal}
                variant='outlined'
            >
                {isLogined ? LOG_OUT : LOG_IN}
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
                        sx={authorizationModalStyle}
                        component='form'
                        onSubmit={handleSubmit(userAuthorization)}
                    >
                        <TextField
                            error={!!errors.login}
                            autoComplete='off'
                            label='Login'
                            variant='outlined'
                            {...register(LOG_IN, {
                                required: true,
                                validate: (login) => login === AUTH_DATA.login,
                            })}
                        />
                        <TextField
                            error={!!errors.password}
                            label='Password'
                            variant='outlined'
                            type='password'
                            {...register(PASSWORD, {
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

export default Authorization;
