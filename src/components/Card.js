import Button from "react-bootstrap/Button";

function Card(props) {

    return (
        <div className="card m-3 text-start align-top" style={{width: "18rem", minHeight: "10rem"}}>
            <h5 className="card-header">{props.title}</h5>
            <div className="card-body position-relative">
                <p className="card-text pb-4">{props.description}</p>
                <div className="text-end button-corner">
                    <Button variant="danger" onClick={() => props.handleClick(props.index)}>
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );

}

export default Card;