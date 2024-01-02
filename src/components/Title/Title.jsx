import './Title.scss';

export function Title({ Title, Desc }) {
    return (
        <div className="Title">
            <h1>{Title}</h1>
            <p>{Desc}</p>
        </div>
    )
}