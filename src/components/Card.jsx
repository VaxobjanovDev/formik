import Data from "./data"

const Card = () => {
    console.log(Data[0].imageUrl)
    return (<div>
        {Data.map((item) => {
            return(<div className="card">
                <div className="card-body">
                    <img src={item.imageUrl} alt="" />
                </div>
                <div className="card-text">
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                </div>
                <button>{item.button}</button>
            </div>)
})}
    </div>
    )
}

export default Card