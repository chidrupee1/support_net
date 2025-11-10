function markResolved(index) {
  const issues = JSON.parse(localStorage.getItem("studentIssues")) || [];
  issues[index].status = "Resolved";
  localStorage.setItem("studentIssues", JSON.stringify(issues));
  alert("Issue marked as Resolved!");
  location.reload();
}

window.onload = function () {
  const issues = JSON.parse(localStorage.getItem("studentIssues")) || [];
  const tbody = document.querySelector(".issue-table tbody");

  if (issues.length > 0) {
    tbody.innerHTML = "";

    issues.forEach((issue, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${issue.studentName}</td>
        <td>${issue.category}</td>
        <td>${issue.issueDescription}</td>
        <td><span class="badge ${issue.status === 'Resolved' ? 'resolved' : 'new'}">${issue.status}</span></td>
        <td>
          <button onclick="markResolved(${index})" ${issue.status === 'Resolved' ? 'disabled' : ''}>
            Mark Resolved
          </button>
        </td>
      `;
      function updateStatus(button) {
  const row = button.parentElement.parentElement;
  const statusCell = row.querySelector(".status");
  statusCell.textContent = "Resolved";
  statusCell.classList.remove("pending");
  statusCell.classList.add("resolved");
}


      tbody.appendChild(row);
    });
  }
};
