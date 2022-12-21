//import settings from "./settings";
//import React from "react";
let lastKey = 0;
const nonSpamKeycodes = [
  16, 17, 18, 91, 93, 20, 27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 45, 46,
  19, 144, 37, 38, 39, 40,
];
const validKeycodes = [
  8, 9, 13, 16, 17, 18, 19, 20, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 48, 49, 50, 51, 52,
  53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
  84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107,
  109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 144, 145, 186, 187,
  188, 189, 190, 191, 192, 193, 194, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230,
  231, 232, 233, 234, 235, 236, 237,
];

export function keyDown(e: KeyboardEvent): void {
  //seek the audio element to 0 seconds and play it
  if (validKeycodes.includes(e.keyCode)) {
    const {keyCode} = e;
    const value = document.activeElement!.attributes.getNamedItem("role")?.value;
    const value2 = document.activeElement!.tagName.toLowerCase();
    if (value == "textbox" || value == "combobox" || value2 == "input") {
      if (nonSpamKeycodes.includes(keyCode) && keyCode == lastKey) {
        return;
      }
      (document.getElementById("osutype") as HTMLAudioElement).currentTime = 0;
      (document.getElementById("osutype") as HTMLAudioElement).play();
      lastKey = keyCode;
    }
  }
}
export function keyUp(e: KeyboardEvent): void {
  lastKey = 0;
}
export function start(): void {
  //add an audio element to the page root
  const audio = document.createElement("audio");
  audio.src = "https://github.com/happyori/OsuTyping/raw/master/menuclick.wav";
  audio.id = "osutype";
  audio.setAttribute("style", "display: none;");
  audio.volume = 1; //settings.get("volume", 100)/100;
  document.body.appendChild(audio);
  document.addEventListener("keydown", (e: KeyboardEvent) => {
    keyDown(e);
  });
  document.addEventListener("keyup", (e: KeyboardEvent) => {
    keyUp(e);
  });
  /*powercord.api.settings.registerSettings(this.entityID, {
      category: this.entityID,
      label: "OsuTyping",
      render: (props) => React.createElement(Settings, { main: this, ...props }),
    });*/
}
export function stop(): void {
  //remove the audio element from the page root
  document.body.removeChild(document.getElementById("osutype") as HTMLInputElement);
  document.removeEventListener("keydown", (e: KeyboardEvent) => {
    keyDown(e);
  });
  document.removeEventListener("keyup", (e: KeyboardEvent) => {
    keyUp(e);
  });
  //powercord.api.settings.unregisterSettings(this.entityID);
}
