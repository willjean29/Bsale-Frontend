// function to get URL PARMAS
export const parseRequestUrl = () => {
  const { search, pathname } = document.location;
  const queryString = document.location.hash.split("/")[1];
  const params = new URLSearchParams(queryString);

  return {
    path: pathname,
    params: {
      page: params.get("page") || "",
      category: params.get("category") || "",
      search: params.get("search") || "",
    },
  };
};

// function to show or hide the load
export const showLoading = () => {
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
