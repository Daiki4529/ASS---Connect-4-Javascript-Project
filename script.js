const root = document.getElementById("root");

let nodeWrapper = {
  type: "div",
  attributes: { class: "wrapper" },
  children: [
    {
      type: "div",
      attributes: { id: "playerTurn" },
      innerHTML: "Demo Text",
      children: [],
    },
    {
      type: "div",
      attributes: { class: "container" },
      children: [],
    },
    {
      type: "div",
      attributes: { id: "information" },
      children: Array.from({ length: 2 }, (_, i) => ({
        type: "div",
        attributes: { class: `player-wrappers` },
        innerHTML: `Player ${i + 1}`,
        children: [
          {
            type: "div",
            attributes: { class: `player${i + 1}` },
            children: [],
          },
        ],
      })),
    },
  ],
};

let nodeStartScreen = {
  type: "div",
  attributes: { class: "startScreen" },
  children: [
    {
      type: "div",
      attributes: { id: "message" },
      children: [],
    },
    {
        type: "button",
        attributes: { id: "start" },
        innerHTML: "Start Game",
        children: [],
    }
  ],
};

function render(root, node) {
  const element = document.createElement(node.type);
  for (let key in node.attributes) {
    element.setAttribute(key, node.attributes[key]);
  }
  node.innerHTML && (element.innerHTML = node.innerHTML);
  node.children.forEach(child => render(element, child));
  root.appendChild(element);
}

render(root, nodeWrapper);
render(root, nodeStartScreen);