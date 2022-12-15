import { CloseButton, ListGroup, ListGroupItem } from "react-bootstrap"

export const ListTodo = ({ items, loading, onDelete }) => {

  return (
    <ListGroup className="mb-2">
      <ListGroupItem active>
        Items
      </ListGroupItem>
      {
        items && items.map((item) =>
          <ListGroupItem
            className="list-group-item d-flex justify-content-between align-items-center"           
            key={item.id}>
            {item.value}
            <CloseButton
              aria-label="Eliminar item"
              disabled={loading}
              onClick={() => {onDelete(item.id)}} />
          </ListGroupItem>
        )
      }
    </ListGroup>
  )
}