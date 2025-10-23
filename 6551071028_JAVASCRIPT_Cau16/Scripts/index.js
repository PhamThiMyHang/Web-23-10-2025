$(document).ready(function() {
  const API_URL = "https://68f985ebef8b2e621e7c5db3.mockapi.io/Node";
  // 
  $("#addList").click(function() {
    $.ajax({
      url: API_URL,
      type: "GET",
      success: function(data) {
        $("#List").empty();
        $.each(data, function(Node) {
          const row = `
            <tr>
              <td>${Node.name}</td>
              <td>${Node.Email}</td>
              <td>${Node.Birthday}</td>
            </tr>
          `;
          $("#List").append(row);
        });
      },
      error: function() {
        alert("Lỗi khi tải dữ liệu!");
      }
    });
  });

  // --- POST: Gửi ghi chú mới ---
  $("#addList").click(function() {
    const newNote = {
      name: $("#Name").val(),
      Email: $("#Email").val(),
      Birthday: new Date().toISOString(),
    };

    $.ajax({
      url: API_URL,
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(newNote),
      success: function(note) {
        alert("Đã thêm !");
        $("#List").append(`<li><b>${note.name}</b>: ${note.Email}:${note.Birthday}</li>`);
      },
      error: function() {
        alert("Không thể thêm ghi chú!");
      }
    });
  });
});