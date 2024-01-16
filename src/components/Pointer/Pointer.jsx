import { useSelector } from 'react-redux';
import './Pointer.scss';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


export function Pointer() {
    const Sign = useSelector((state) => state.Sign);
    return (
        <a className={Sign ? 'Pointer' : 'Pointer hide'} href="#Intro">
            <ArrowUpwardIcon />
        </a>
    )
}