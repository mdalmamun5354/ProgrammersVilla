import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import ProListRander from "./ProListRander";
import { useState } from "react";

const ProList = ({ proList, setProInfo }) => {

  const [moreProOpen, setMoreProOpen] = useState(false);

  let rowInd = 0;
  let rows = [rowInd++, rowInd++];

  if (moreProOpen)
    for (let i = 2; i < Math.ceil(proList.length / 3); i++) {
      rows.push(rowInd++);
    }

  return (
    <>
      <div className="container text-center">
        <hr />
        <h2 className="mb-4">Our Top Programmers</h2>

        <ProListRander
          proList={proList}
          setProInfo={setProInfo}
          rows={rows}
        />
      </div>


      {!moreProOpen &&
        <FontAwesomeIcon
          icon={faChevronDown}
          className="d-block m-auto p-2 mb-5 btn my-icon more-less-btn"
          onClick={() => { setMoreProOpen(true) }}
        />
      }
      {moreProOpen &&
        <FontAwesomeIcon
          icon={faChevronUp}
          className="d-block m-auto p-2 mb-5 btn my-icon more-less-btn"
          onClick={() => { setMoreProOpen(false) }}
        />
      }
    </>
  )
}

export default ProList;