$(function () {
  loadProducts();
  $("#addBtn").click(addProducts);
  $("#products").on("click", "#updateButton", updateProducts);
  $("#products").on("click", "#delButton", deleteProduct);
  $("#updateSave").click(function () {
    let id = $("#updateId").val();
    let name = $("#updatetitle").val();
    let price = $("#updateprice").val();
    let color = $("#updatecolor").val();
    let department = $("updatedep").val();
    let description = $("updatedesc").val();
    $.ajax({
      url: "https://usman-cui-recipies.herokuapp.com/api/products/" + id,
      data: { id, name, price, color, department, description },
      method: "PUT",
      success: function (response) {
        console.log(response);
        loadProducts();
        $("#updateModal").modal("hide");
      },
    });
  });
});

function addProducts() {
  const name = $("#title").val();
  const price = $("#price").val();
  const color = $("#color").val();
  const description = $("#desc").val();
  const department = $("#dep").val();

  $.ajax({
    type: "POST",
    url: "https://usman-cui-recipies.herokuapp.com/api/products",
    data: { name, price, color, description, department },
    success: function (response) {
      console.log(response);
      $("#title").val("");
      $("#price").val("");
      $("#color").val("");
      $("#dep").val("");
      $("#desc").val("");
      loadProducts();
      $("#addModal").modal("hide");
    },
  });
}

function updateProducts() {
  const btn = $(this);
  const parent = btn.closest(".recipe");
  let id = parent.attr("data-id");
  $.get(
    "https://usman-cui-recipies.herokuapp.com/api/products/" + id,
    function (res) {
      $("#updateId").val(res._id);
      $("#updatetitle").val(res.name);
      $("#updateprice").val(res.price);
      $("#updatecolor").val(res.color);
      $("#updatedep").val(res.department);
      $("#updatedesc").val(res.description);
    }
  );
}

function deleteProduct() {
  const delBtn = $(this);
  const parent = delBtn.closest(".recipe");
  let id = parent.attr("data-id");

  $.ajax({
    type: "DELETE",
    url: "https://usman-cui-recipies.herokuapp.com/api/products/" + id,

    success: function (response) {
      console.log(response);
      loadProducts();
    },
  });
}

function loadProducts() {
  $.ajax({
    method: "GET",
    url: "https://usman-cui-recipies.herokuapp.com/api/products",
    error: function (response) {
      var products = $("#products");
      products.html("An Error has occured");
    },
    success: function (res) {
      console.log(res);
      const products = $("#products");
      products.empty();
      products.append(`<h1>Data: </h1>`);
      res.map((product) =>
        products.append(`
        <div class="recipe"  data-id="${product._id}"> 
        <h2>${product.name}</h2>
         <p><strong>Price:</strong>  ${product.price}</p>
         <p><strong>Color:</strong>  ${product.color}</p>
         <p><strong>Department:</strong>  ${product.department}</p>
         <p><strong>Description:</strong>  ${product.description}</p>
         <button id="updateButton" class="btn btn-warning"   data-toggle="modal" data-target="#updateModal" >Update</button>
         <button id="delButton" class="btn btn-danger">Delete</button>
         </div>
         `)
      );
    },
  });
}
