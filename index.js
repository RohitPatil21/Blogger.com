let addPostBtnRef = document.querySelector(".add-post-btn");
let form = document.querySelector("form");

function showPost() {
  let inputPostRef = document.getElementById("inputText");

  inputPostValueRef = inputPostRef.value;

  //   create postDiv element
  let postDiv = document.createElement("div");
  postDiv.id = "postDiv";

  //   create post data
  let post = document.createElement("p");
  post.id = "post";
  post.append(inputPostValueRef);
  postDiv.append(post);

  //   create buttons
  let btnPostDiv = document.createElement("div");
  btnPostDiv.id = "btnPostDiv";

  //   create update btn
  let btnUpdate = document.createElement("button");
  btnUpdate.id = "btnUpdate";
  btnUpdate.textContent = "Update";

  //   create delete btn
  let btnDelete = document.createElement("button");
  btnDelete.id = "btnDelete";
  btnDelete.textContent = "Delete";

  //   append
  postDiv.append(btnPostDiv);
  btnPostDiv.append(btnUpdate);
  btnPostDiv.append(btnDelete);

    form.reset();

  // append child in div
  document.getElementById("post-container").appendChild(postDiv);
}


// -------------- Add event listener ------------------------

addPostBtnRef.addEventListener("click", function (event) {
  event.preventDefault();
  let inputPostRef = document.getElementById("inputText");

  if(inputPostRef.value.length < 10) {
      alert("insert more than 10 letters in textfield")
  }
  else {
    showPost();
  }
});
