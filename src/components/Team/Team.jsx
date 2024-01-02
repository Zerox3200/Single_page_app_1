import './Team.scss';
import { Title } from '../Title/Title';
import { Members } from './Members/Members';
import Member1 from './team/team-1.jpg'
import Member2 from './team/team-2.jpg'
import Member3 from './team/team-3.jpg'
import Member4 from './team/team-4.jpg'
import Member5 from './team/team-5.jpg'
import Member6 from './team/team-6.jpg'

export function Team() {
    return (
        <div className="Team container" id='Team'>
            <Title Title='Team' Desc='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit' />
            <div className="Team_Members">
                <Members Image={Member1} Title='Walter White' Job='Chief Executive Officer'
                    Desc='Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow'
                />
                <Members Image={Member2} Title='Sarah Jhonson' Job='Product Manager'
                    Desc='Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium 
                    aut quod dolores exercitationem ut' delayTime='0.2'
                />
                <Members Image={Member3} Title='William Anderson' Job='CTO'
                    Desc='Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut
                     praesentium vel tque sed facilis at qui' delayTime='0.4'
                />
                <Members Image={Member4} Title='Amanda Jepson' Job='Accountant' Desc='Magni voluptatem accusamus assumenda 
                cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur'delayTime='0.6'
                />
                <Members Image={Member5} Title='Brian Doe' Job='Marketing'
                    Desc='Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam 
                    sunt doloribus quia impedit laborum velit' delayTime='0.8'
                />
                <Members Image={Member6} Title='Josepha Palas' Job='Operation'
                    Desc='Sint sint eveniet explicabo amet consequatur nesciunt error enim
                     rerum earum et omnis fugit eligendi cupiditate vel' delayTime='1'
                />
            </div>
        </div>
    )
}