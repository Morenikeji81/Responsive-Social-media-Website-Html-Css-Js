// SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");

// MESSAGES
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messagesSearch = document.querySelector("#message-search");

// THEME
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");

// THEME (FONT-SIZE)
const fontSizes = document.querySelectorAll(".choose-size span");
const root = document.querySelector(":root");

// THEME (PRIMARY COLORS)
const colorPalette = document.querySelectorAll(".choose-color span");

// THEME(BACKGROUND-COLORS)
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");


// SIDEBAR
// remove active class from all menu items in Sidebar

const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

// click all menu-items at once in sidebar

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");

    // NOTIFICATIONS-POPUP
    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";

      // TO REMOVE THE NOTIFICATION-COUNT WHEN CLICKS ON NOTIFICATION
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// MESSAGES
// Searches Chats
const searchMessage = () => {
  const val = messagesSearch.value.toLowerCase();
  // console.log(val);
  message.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      // display ='flex' bcox d style in css is display ='flex'
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};
// Search Chat
messagesSearch.addEventListener("keyup", searchMessage);

// Highlight Messages card when messages menu item is clicked
messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
  // Notification count disappear when msg icon is clicked
  document.querySelector(
    "#messages-notifications .notification-count"
  ).style.display = "none";
});

//  THEME/DISPLAY CUSTOMIZATION

// OPEN MODAL(CUSTOMIZE-THEME IN INDEX.HTML)
const openModal = () => {
  themeModal.style.display = "grid";
};
theme.addEventListener("click", openModal);

// CLOSE MODAL
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};
themeModal.addEventListener("click", closeThemeModal);

// FONTSIZES
// REMOVE ACTIVE CLASS FROM SPANS OR FONT SIZES SELECTORS
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    // TO SHOW THE ACTIVE STATE(COLORED BALL) WHEN CLICKS
    size.classList.toggle("active");
    // ENDS HERE
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("----sticky-top-left", "-2rem");
      root.style.setProperty("----sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("----sticky-top-left", "-5rem");
      root.style.setProperty("----sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("----sticky-top-left", "-12rem");
      root.style.setProperty("----sticky-top-right", "-35rem");
    }

    // TO CHANGE FONT SIZE OF THE ROOT HTML ELEMENT
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// REMOVE ACTIVE CLASS FROM COLORS
const changeActiveColorClass = () => {
  colorPalette.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};
// CHANGE PRIMARY COLORS
colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primaryHue;
    changeActiveColorClass();
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    // ACTIVE CLASS
    color.classList.add("active");
    // ACTIVE ENDS HERE
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// THEME BACKGROUND VALUES
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// CHANGE BACKGROUND COLOR
const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};
// CHANGE BACKGROUND COLORS
Bg1.addEventListener("click", () => {
  // add active class
  Bg1.classList.add("active");
  // remove active class
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");
  // remove customized changes from local storage
  window.location.reload();
});

Bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  // ADD ACTIVE CLASS
  Bg2.classList.add("active");
  // REMOVE ACTIVE CLASS FROM OTHERS
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");

  changeBG();
});

Bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  // ADD ACTIVE CLASS
  Bg3.classList.add("active");
  // REMOVE ACTIVE CLASS FROM OTHERS
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");

  changeBG();
});
