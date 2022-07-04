  //const names=["Đào Đình Luyện", "Nguyễn Duy Hưng","Trần Duy Hà","Nguyễn Hải Long" ];
  
  var students = [
    {
      firstName: "Cortez",
      lastName: "Cartwright",
      gender: "Hermaphrodite",
      email: "Alec14@yahoo.com",
      id: "1",
      mark: 9,
    },
    {
      firstName: "Priscilla",
      lastName: "Adams",
      gender: "Cis Woman",
      email: "Merritt6@yahoo.com",
      id: "2",
      mark: 8,
    },
    {
      firstName: "Gillian",
      lastName: "Nolan",
      gender: "Trans",
      email: "Carmelo_Jakubowski20@hotmail.com",
      id: "3",
      mark: 4,
    },
    {
      firstName: "Vince",
      lastName: "Lowe",
      gender: "Neutrois",
      email: "Keira.Swift@gmail.com",
      id: "4",
      mark: 7,
    },
    {
      firstName: "Herminia",
      lastName: "McLaughlin",
      gender: "Transexual Female",
      email: "Koby.Spinka12@yahoo.com",
      id: "5",
      mark: 4,
    },
    {
      firstName: "Kris",
      lastName: "Gerlach",
      gender: "Intersex",
      email: "Juwan23@hotmail.com",
      id: "6",
      mark: 7,
    },
    {
      firstName: "Marguerite",
      lastName: "Keeling",
      gender: "Cisgender Man",
      email: "Percy27@yahoo.com",
      id: "7",
      mark: 9,
    },
    {
      firstName: "Amelie",
      lastName: "Beier",
      gender: "Intersex person",
      email: "Amber49@yahoo.com",
      id: "8",
      mark: 5,
    },
  ];
  //const list = names.map((item)=><li>{item}</li>)
  /*  const nameFilter = (student) => {
    let firstName = student.firstName.toLowerCase();
    return firstName.indexOf("m") == 0;
  }; */
  /*******************Filter**************/
  //students=students.filter(nameFilter);

  /*******************Sorting*************/
  //students.sort((a, b)=>a.firstName.localeCompare(b.firstName));
  students.sort((a, b) => b.mark - a.mark);

  /***************style with condition********/
  for (var i = 0; i < students.length; i++) {
    if (students[i].mark >= 9) {
      students[i].style = "table-success";
    } else if (students[i].mark > 4) {
      students[i].style = "table-primary";
    } else {
      students[i].style = "table-danger";
    }
  }

  /* const student_list = students.map((item) => (
    // <tr className={item.style}>
    <tr className={item.mark>=9 ? "table-success" :( item.mark>4 ? "table-primary": "table-danger")}>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.email}</td>
      <td >{item.mark}</td>
    </tr>
  )); */

  /*for(var i=0; i< students.length;i++){
    student_list.push((<tr>
      <td>{students[i].firstName}</td>
      <td>{students[i].lastName}</td>
      <td>{students[i].email}</td>
    </tr>))
  }*/

  /*
  for (var i = 0; i < students.length; i++) {
    if (students[i].firstName.indexOf("H") == 0) {
      student_list.push(
        <tr>
          <td>{students[i].firstName}</td>
          <td>{students[i].lastName}</td>
          <td>{students[i].email}</td>
        </tr>
      );
    }
  }
  */