import { NumberPlus } from '../NumberCounter/NumberCounter';
import './Counter.scss';


export function Counter() {
    return (
        <div className="Counter">
            <NumberPlus n={232} Name="Client" />
            <NumberPlus n={521} Name="Projects" />
            <NumberPlus n={1453} Name="Hours Of Support" />
            <NumberPlus n={32} Name="Workers" />
        </div>
    )
}