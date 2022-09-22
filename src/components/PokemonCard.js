import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard(props) {

  const [imgFront, setImgFront] = useState(true);

  function imgClick() {
    return setImgFront(!imgFront);
  }

  function imgState() {
    return imgFront ? props.frontSprite : props.backSprite;
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={imgClick} alt={props.name} src={imgState()}/>
        </div>
        <div className="content">
          <div className="header">{props.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {props.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
