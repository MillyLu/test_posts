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
        label="без фильтра"
        name="group1"
        type="radio"
        id={`inline-radio-1`}
        onChange={() => {
          setSortAscending(false);
          setSortDescending(false);
        }}
      />
      <Form.Check
        inline
        label="по возрастанию"
        name="group1"
        type="radio"
        id={`inline-radio-2`}
        onChange={() => {
          setSortAscending(true);
          setSortDescending(false);
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
          setSortDescending(true);
          setPostsSorted([]);
        }}
      />
    </div>
  );
}
