export default function Buttons(props) {
  return (
    <div className="btn-container">
      <button onClick={props.handleRemoveAll} id="removeBtn">
        Remove all
      </button>
    </div>
  );
}
