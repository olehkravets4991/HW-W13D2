import Movie from "./Movie"

function Movies(props){
    return(<div>
            <h1> Marvel Iron Man Movies</h1>
            <h2>“I am Iron Man”- Tony Stark</h2>
            <div className="container">
                {props.movies.map((item, index)=>{
                return (
                    <Movie key={item.name} movie={item}/>
                )
                })}
            </div>
    </div>)
}

export default Movies