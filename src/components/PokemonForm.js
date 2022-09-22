import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm(props) {

  function onAddSubmit(e) {
    e.preventDefault();
    const formGroup = e.target.firstChild;
    const nameForm = formGroup.firstChild;
    const nameInput = nameForm.lastChild.firstChild;
    const hpForm = nameForm.nextSibling;
    const hpInput = hpForm.lastChild.firstChild;
    const frontImgForm = hpForm.nextSibling;
    const frontImgInput = frontImgForm.lastChild.firstChild;
    const backImgForm = frontImgForm.nextSibling;
    const backImgInput = backImgForm.lastChild.firstChild;
    const nameValue = nameInput.value.toLowerCase();
    const hpValue = hpInput.value;
    const frontImgValue = frontImgInput.value;
    const backImgValue = backImgInput.value;
    e.target.reset();
    return props.handleAddPokemon(nameValue, hpValue, frontImgValue, backImgValue);
  };

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={onAddSubmit}>
        <Form.Group widths="equal">
          <Form.Input tabIndex={1} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input tabIndex={2} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input tabIndex={3} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
          <Form.Input tabIndex={4} fluid label="Back Image URL" placeholder="url" name="backUrl" />
        </Form.Group>
        <Form.Button tabIndex={5}>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
