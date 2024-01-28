import Cell from "./Cell"

const Row = ({ item }) => {
  return (
    <tr>
        {/* map through different objects */}
        {Object.entries(item).map(([key, value]) =>{
            return (
                <Cell key={key} cellData={JSON.stringify(value)}/>
            )
        })}
    </tr>
  )
}

export default Row