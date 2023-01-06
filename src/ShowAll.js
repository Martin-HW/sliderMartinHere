import React from "react";

const ShowAll = ({ people }) => {
  const [show, setShow] = React.useState(false);

  const handlePeople = () => {
    setShow(true);
  };
  const hidingPeople = () => {
    setShow(false);
  };

  return (
    <div className="people-list">
      {show && (
        <>
          <h4>The total number of people is: {people.length}</h4>
          <ul>
            {people.map((person, ind, arr) => {
              return (
                <li key={person.id}>
                  {person.id}.- {person.name}
                </li>
              );
            })}
          </ul>
        </>
      )}
      {show ? (
        <button className="hideAll" onClick={hidingPeople}>
          Hide All
        </button>
      ) : (
        <button className="hideAll" onClick={handlePeople}>
          Display all
        </button>
      )}
    </div>
  );
};

export default ShowAll;
