import ListItems from './ListItems'

const List = ({ data }) => {
  return (
    <ul>
        {
            data.map(item => (
                <ListItems
                    key={item.id}
                    item={item}
                />

            ))
        }
    </ul>
  )
}

export default List