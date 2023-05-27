import React from 'react'
import Snackbar from "@mui/material/Snackbar";
import { RxCross2 } from "react-icons/rx";


function Snackbar() {
    const [open, setOpen] = useState(false);
    const [snackbarMsg, setSnackbarMsg] = useState();
    const [snackbarClass, setSnackbarClass] = useState();
    const handleClose = () => {
        setOpen(false);
    };

    const action = (
        <button onClick={handleClose}>
            <RxCross2 />
        </button>
    );
    return (
        <>
            <Snackbar
                className="invalid"
                sx={{ width: "310px" }}
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                action={action}
                message={Error}
                anchorOrigin={{
                    vertical: "Bottom",
                    horizontal: "Left",
                }}
            />
        </>
    )
}

export default Snackbar