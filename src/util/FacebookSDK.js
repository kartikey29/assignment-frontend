export const getFacebookLoginStatus = () => {
  return new Promise((resolve, reject) => {
    window.FB.getLoginStatus((response) => {
      resolve(response);
    });
  });
};

export const fbLogin = () => {
  return new Promise((resolve, reject) => {
    window.FB.login(
      function (response) {
        resolve(response);
      },
      {
        config_id: "753895303077061",
      }
    );
  });
};

export const logout = () => {
  return new Promise((resolve, reject) => {
    getFacebookLoginStatus().then((res) => {
      window.FB.logout(function (response) {
        console.log("Logged Out!");
        resolve();
      });
    });
  });
};
