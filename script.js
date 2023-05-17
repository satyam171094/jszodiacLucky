const zodiac = document.querySelector(".zodiac");
const body = document.body;

const getColor = () => {
  switch (zodiac.value) {
    case "Aries":
      body.style.backgroundColor = "#34d8eb";
      break;
    case "Taurus":
      body.style.backgroundColor = "#2f8791";
      break;
    case "Gemini":
      body.style.backgroundColor = "#2f8791";
      break;
    case "Cancer":
      body.style.backgroundColor = "#912f4c";
      break;
    case "Leo":
      body.style.backgroundColor = "#c9b5bb";
      break;
    case "Libra":
      body.style.backgroundColor = "#363032";
      break;
    case "Scorpius":
      body.style.backgroundColor = "#0f0206";
      break;
    case "Sagittarius":
      body.style.backgroundColor = "#6b4852";
      break;
    case "Capricornus":
      body.style.backgroundColor = "#0602e0";
      break;
    case "Aquarius":
      body.style.backgroundColor = "#0b0a47";
      break;
    case "Pisces":
      body.style.backgroundColor = "#383845";
      break;
      case "Virgo":
      body.style.backgroundColor = "#0e0e2e";
      break; 
    default: 
        body.style.backgroundColor = "white"
      break;
  }
};
