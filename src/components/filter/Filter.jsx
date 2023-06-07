import Form from "react-bootstrap/Form";

export function Filter({
  setSortAscending,
  setSortDescending,
  setPostsSorted,
}) {
  return (
    <div key={`inline-radio`} className="mb-3">
      <Form.Check
        inline
        label="по возрастанию"
        name="group1"
        type="radio"
        checked
        id={`inline-radio-2`}
        onChange={() => {
          setSortAscending(true);
        }}
      />
      <Form.Check
        inline
        label="по убыванию"
        name="group1"
        type="radio"
        id={`inline-radio-2`}
        onChange={() => {
          setSortAscending(false);
          setPostsSorted([]);
        }}
      />
    </div>
  );
}
