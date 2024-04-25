import { Alert, Snackbar } from '@mui/material'
import React from 'react'

export default function Snack({ open, msg, onClose, time, severity }) {
    return (
        <Snackbar
        sx={{display:'flex', alignItems:'center', zIndex:11111 }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={open} autoHideDuration={time ?? 3000} onClose={onClose}>
            <Alert onClose={onClose} severity={severity ?? "error"} sx={{ width: '100%', boxShadow: '5px 10px 20px rgba(0,0,0,0.1)', alignItems:'center' }}>
                {msg}
            </Alert>
        </Snackbar>
    )
}