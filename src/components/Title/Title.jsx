import './Title.scss'

const Title = ({text}) => {
    return <div className="title">
        <h1 id='title'>
            {text}
        </h1>
    </div>
};

export default Title;