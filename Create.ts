CreateDatabase({name: "employees"});

CreateCollection({name: "dept"});

CreateIndex();


Create(Collection("dept"), {
  data: {
    "deptno": 10,
    "dname": "ACCOUNTING",
    "loc": "NEW YORK"
  }
});

Create(Ref(Collection("warehouses"), "3"), {
  data: {
    name: 'North',
    address: {
      street: 'Wall St',
      city: 'NY',
      state: 'NY'
    }
  }
});
