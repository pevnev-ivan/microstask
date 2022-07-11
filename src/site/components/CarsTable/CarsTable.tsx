import './CarsTable.module.css'


type TypeTopCars = {
    topCars: TopCarsArr[]
}

type TopCarsArr = {
    manufacturer: string;
    model: string;
}


const Cars = (props: TypeTopCars) => {
    return <div>
        <h1>Cars HomeWork</h1>
        <div>
        <table>

        <th>Id</th>
        <th>Car manufacturer</th>
        <th>Car model</th>

        {props.topCars.map((objectFromTopCarsArray, index )=>{
            return(
                <tbody key={index}>
                    <tr>
                        <td>{index+1} </td>
                        <td >{objectFromTopCarsArray.manufacturer}</td>
                        <td>{objectFromTopCarsArray.model}</td>
                    </tr>
                </tbody>
            )
        })}
    </table>
        </div>
    </div>
}



export default Cars
