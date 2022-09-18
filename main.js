function addTask() {
  // let valueAddTask = document.getElementById("addTaskValue").value;
  // console.log(valueAddTask);
  // document.getElementById("taskInnerHtml").innerHTML = valueAddTask;
  let tableRow = document.getElementById("new-task-adder");

  if (document.querySelector("#addTaskValue").value.length <= 2) {
    alert("Please enter a task name to add new task");
  } else {
    tableRow.innerHTML += `
        <tr>
                <td>${document.querySelector("#addTaskValue").value}</td>
                <td><button>IN PROGRESS</button></td>
                <td>
                  <button><i class="bx bx-edit-alt"></i></button>
                </td>
                <td>
                  <button class="delete-btn" id="delete-btn"><i class="bx bx-trash"></i></button>
                </td>
              </tr>
        `;

        let deleteTask = document.querySelectorAll('.delete-btn');
        for (let i = 0; i < deleteTask.length; i++) {
            deleteTask[i].onclick = function(){
                this.parentNode.parentNode.remove();
            }
        }

  }
}
