import Form from "react-bootstrap/Form";

export function Filter({ setSortAscending, setPostsSorted }) {
  return (
    <div key={`inline-radio`} className="mb-3">
      <Form.Check
        inline
        label="по возрастанию"
        name="group1"
        type="radio"
        defaultChecked
        id={`inline-radio-2`}
        onChange={() => {
          setPostsSorted([]);
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
          setPostsSorted([]);
          setSortAscending(false);
        }}
      />
    </div>
  );
}
