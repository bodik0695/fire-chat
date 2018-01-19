import { blue, grey } from 'material-ui/colors';

export const chatStyle = theme => ({
    chat: {
        display: 'flex',
        overflow: 'hidden',
        background: grey[200],
        width: '100%',
        flexDirection: 'column',
    },
    updateBtn: {
        margin: 0,
        display: 'block',
        position: 'absolute',
        top: '15px',
        right: '17px',
        padding: '5px',
        color: blue[500],
        border: `1px solid ${blue[500]}`,
    }
});