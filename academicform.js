function markSeen(button) {
  button.innerText = "Seen";
  button.disabled = true;
  button.style.backgroundColor = "gray";
}

function showNotification() {
  const issues = JSON.parse(localStorage.getItem("studentIssues")) || [];
  if (issues.length > 0) {
    alert("You have " + issues.length + " student issue(s) submitted.");
  } else {
    alert("No new notifications.");
  }
}

window.onload = function () {
  const issues = JSON.parse(localStorage.getItem("studentIssues")) || [];
  const tbody = document.querySelector(".issue-table tbody");

  if (issues.length > 0) {
    tbody.innerHTML = ""; // Clear default rows

    issues.forEach((issue) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${issue.studentName}</td>
        <td>${issue.category}</td>
        <td>${issue.issueDescription}</td>
        <td><span class="badge new">${issue.status}</span></td>
        <td><button onclick="markSeen(this)">Mark as Seen</button></td>
      `;

      tbody.appendChild(row);
    });
    window.addEventListener("load", () => {
    const issues = JSON.parse(localStorage.getItem("studentIssues") || "[]");
    const container = document.getElementById("notifications");

    if (issues.length === 0) {
      container.innerHTML = "<p>No new issues yet.</p>";
    } else {
      issues.forEach((issue, i) => {
        const div = document.createElement("div");
        div.innerHTML = `
          <div style="border:1px solid #ccc; padding:10px; margin-bottom:10px;">
            <h4>${issue.type} Issue from ${issue.name}</h4>
            <p><strong>Contact:</strong> ${issue.contact || 'N/A'}</p>
            <p><strong>Email:</strong> ${issue.email || 'N/A'}</p>
            <p>${issue.issue}</p>
            <small>${issue.timestamp}</small><br>
            <span>Status: ${issue.status}</span>
          </div>
        `;
        container.appendChild(div);
      });
    }
  });
  }
};
