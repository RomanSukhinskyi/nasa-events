{
  loading ? (
    <Loader />
  ) : (
    <>
      <div>
        <h3>Filter by:</h3>
        <FloatingLabel controlId="floatingSelect" label="Sort by status">
          <Form.Select
            onChange={(e) => filterByStatus(e.target.value)}
            aria-label="Floating label select example"
          >
            <option>Open this select menu</option>
            <option value="closed">Closed</option>
            <option value="open">Open</option>
          </Form.Select>
        </FloatingLabel>
      </div>
      <TableRows data={data} />
    </>
  );
}
