import { ServiceType } from '../ServiceType/ServiceType'
import { Title } from '../Title/Title'
import './Servics.scss'
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import InsertChartOutlinedTwoToneIcon from '@mui/icons-material/InsertChartOutlinedTwoTone';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

export function Service() {

    return (
        <div className="Service container" id='Service'>
            <Title Title="Services" Desc="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit" />
            <div className="Service_pt2">
                <ServiceType Header="Dolor Sitema"
                    Icon={<FactCheckOutlinedIcon />}
                    Desc="Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                     tarad limino ata" />
                <ServiceType Header="Sed ut perspiciatis"
                    Icon={<InsertChartOutlinedTwoToneIcon />}
                    Desc="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" />
                <ServiceType Header="Magni Dolores" delayTime={0.5}
                    Icon={<TravelExploreOutlinedIcon />}
                    Desc="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                    anim id est laborum" />
                <ServiceType Header="Magni Dolores" delayTime={0.5}
                    Icon={<WbSunnyOutlinedIcon />}
                    Desc="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum" />
                <ServiceType Header="Eiusmod Tempor" delayTime={0.8}
                    Icon={<CalendarMonthOutlinedIcon />}
                    Desc="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
                    cum soluta nobis est eligendi" />
                <ServiceType Header="Lorem Ipsum" delayTime={0.8}
                    Icon={<WorkOutlineOutlinedIcon />}
                    Desc="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati 
                    cupiditate non provident" />
            </div>
        </div>
    )
}