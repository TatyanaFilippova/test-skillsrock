function fetchRandomUsers() {
  const apiUrl = "https://randomuser.me/api/?results=10";
  //обработка загрузки
  document.getElementById("users-list").innerHTML = "Загрузка...";

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        document.getElementById("users-list").innerHTML =
          "Не удалось загрузить пользователей";
        //ошибка, если не удалось загрузить данные
        throw new Error("Network response was not ok");
      }
      //переводим данные в json
      return response.json();
    })
    .then((data) => {
      //создаем контейнер для списка пользователей
      const users = document.createElement("div");
      users.className = "users-wrapper";

      //пробегаюсь по списку пользователей
      for (let i = 0; i < data.results.length; i++) {
        // создаем объект для удобства
        const _user = {
          name: `${data.results[i].name.title} ${data.results[i].name.first} ${data.results[i].name.last}`,
          email: data.results[i].email,
          img: data.results[i].picture.medium,
        };
        //создаем div для пользователя
        const user = document.createElement("div");
        user.className = "user-wrapper";
        user.innerHTML = `
          <div class="name">Имя: ${_user.name}</div>
          <div class="email">Email: ${_user.email}</div>
          <img src="${_user.img}" />
        `;
        //добавляем пользователя в контейнер пользователей
        users.appendChild(user);
      }
      //убираем загрузку, после обработки выполнения запроса
      document.getElementById("users-list").innerHTML = "";
      document.getElementById("users-list").appendChild(users);
    })
    .catch((error) => {
      console.log("Error:", error);
      document.getElementById("users-list").innerHTML = "Произошла ошибка";
    });
}

fetchRandomUsers();
