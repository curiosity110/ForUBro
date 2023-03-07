import "./styles.css";

const Cell = (props) => {
    return (
        <div
            className="cell"
            style={{
            background: `radial-gradient(circle, rgba(255, 255, 150), ${props.color}`,
        }}
    ></div>
    );
};

export default Cell;