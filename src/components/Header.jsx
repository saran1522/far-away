export default function Header(props) {
  return (
    <div className="container">
      <div>
        <h1>To Do</h1>
        <div className="inp-container">
          <form onSubmit={props.handleSubmit} className="input-form">
            <input
              type="text"
              name=""
              id="item"
              value={props.desc}
              onChange={props.handleDescChange}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
