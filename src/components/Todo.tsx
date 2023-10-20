interface Props {
  id: number
  title: string
  completed: boolean
}

export const Todo: React.FC<Props> = ({ id, title, completed }) => (
    <div className="view">
        <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={() => { } } />
        <label>{title}</label>
        <button className="destroy" onClick={() => {}}> </button>
    </div>
)
