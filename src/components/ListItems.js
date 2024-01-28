

const ListItems = ({ item }) => {
  // const data = JSON.stringify(item)
  console.log(typeof item);
  return (
    <li>
      {
        JSON.stringify(item)
        
      }
    </li>
  )
}

export default ListItems  