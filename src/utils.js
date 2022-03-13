export const parseRequestUrl = () => {
  // console.log(document.location);
  const { search, pathname } = document.location;
  const params = new URLSearchParams(search);
  return {
    path: pathname,
    params: {
      page: params.get("page") || "",
      category: params.get("category") || "",
      search: params.get("search") || "",
    },
  };
  // const address = document.location.hash.slice(1).split("?")[0];
  // const queryString = document.location.hash.slice(1).split("?").length === 2 ? document.location.hash.slice(1).split("?")[1] : "";

  // const url = address.toLowerCase() || "/";
  // const r = url.split("/");
  // const q = queryString.split("=");
  // return {
  //   resource: r[1],
  //   id: r[2],
  //   verb: r[3],
  //   name: q[0],
  //   value: decodeURI(q[1]),
  // };
};
// export const rerender = async (component) => {
//   document.getElementById("main-container").innerHTML = await component.render();
//   await component.after_render();
// };

export const showLoading = () => {
  console.log("loadinggg");
  document.getElementById("loader").classList.remove("hide");
  document.getElementById("loader").classList.add("show");

  document.getElementById("main-container").classList.add("container-center");
  document.getElementById("main-content").style.display = "none";
};

export const hideLoading = () => {
  document.getElementById("loader").classList.remove("show");
  document.getElementById("loader").classList.add("hide");
  document.getElementById("main-container").classList.remove("container-center");
  document.getElementById("main-content").style.display = "block";
};

// export const showMessage = (message, callback) => {
//   document.getElementById("message-overlay").innerHTML = `
//   <div>
//     <div id="message-overlay-content">${message}</div>
//     <button id="message-overlay-close-button">OK</button>
//   </div>
//   `;
//   document.getElementById("message-overlay").classList.add("active");
//   document.getElementById("message-overlay-close-button").addEventListener("click", () => {
//     document.getElementById("message-overlay").classList.remove("active");
//     if (callback) {
//       callback();
//     }
//   });
// };
