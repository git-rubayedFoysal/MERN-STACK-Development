const React = {
  createElement: function (type, props) {
    return {
      type: type,
      props: {
        ...props,
      },
    };
  },
};

const ReactDom = {
  render: function (reactElement, root) {
    root.innerHTML = "";
    const element = document.createElement("h1");
    const { props } = reactElement;

    for (let [key, value] of Object.entries(props)) {
      if (key === "style") {
        Object.assign(element.style, props.style);
      } else if (key === "children") {
        element.textContent = value;
      } else {
        element.key = value;
      }
    }
    return element;
  },
};

const element1 = React.createElement("h1", {
  className: "element",
  id: "first",
  style: { backgroundColor: "pink", fontSize: "30px", color: "green" },
  children: "Hello World!",
});

const ele1 = ReactDom.render(element1, document.querySelector("#root"));

const element2 = React.createElement("h2", {
  className: "element",
  id: "second",
  style: { backgroundColor: "crimson", fontSize: "20px" },
  children: "This is another element",
});

const ele2 = ReactDom.render(element2, document.querySelector("#root"));

const div = document.createElement("div");
div.appendChild(ele1);
div.appendChild(ele2);
document.querySelector("#root").append(div);
