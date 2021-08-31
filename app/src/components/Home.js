import { Container, Table, Badge, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { Alert } from "react-bootstrap";

export default function Home(props) {
  const [show, setShow] = useState(false);
  const [id, setid] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {props.data.length ? (
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th scope="col">Center Id</th>
                <th scope="col">Name</th>
                <th scope="col">Availability</th>
                <th scope="col">Vaccine</th>
                <th scope="col">Info</th>
              </tr>
            </thead>
            <tbody>
              {props.data.map((x, index) => (
                <tr>
                  <th scope="row">{x["center_id"]}</th>
                  <td>
                    <h4>{x["name"]}</h4>
                    <p class="text-muted">
                      {x["address"] +
                        ", " +
                        x["state_name"] +
                        ", " +
                        x["district_name"] +
                        ", " +
                        x["pincode"]}
                    </p>
                  </td>
                  <td>
                    {x["available_capacity"] > 0 ? (
                      <Badge pill bg="success">
                        Yes
                      </Badge>
                    ) : (
                      <Badge pill bg="warning">
                        No
                      </Badge>
                    )}
                  </td>
                  <td>{x["vaccine"]}</td>
                  <td>
                    <Button variant="primary" onClick={handleShow}>
                      Know More
                    </Button>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>More details</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        {x["fee_type"] +
                          x["fee_type"] +
                          x["session_id"] +
                          x["date"] +
                          x["available_capacity_dose1"] +
                          x["available_capacity_dose2"] +
                          x["fee"] +
                          x["min_age_limit"] +
                          x["vaccine"]}
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                          Done
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      ) : (
        <Container className="d-flex justify-content-around">
          <Alert>
            There are no available sessions for the pincode or the date you
            entered.
          </Alert>
        </Container>
      )}
    </>
  );
}
