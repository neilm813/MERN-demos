/**
 * A class to represent a basic counter component. This component is a
 * blueprint of the HTML, CSS, and JavaScript that is shared between all
 * counters.
 */
class Counter {
  /**
   * When constructed, this class should render this new Counter to the DOM
   * (Document Object Model).
   * @typedef {Object} Props
   * @property {number} [count] - This counter's starting count.
   * @property {string} headingText - This counter's header.
   * @property {string} color
   * 
   * @param {Props} props - Contains all the properties for this new Counter,
   *    as button text, color, etc.
   * @param {Node} parentNode - The HTML node that this new Counter should be
   *    appended into.
   * @returns {Counter} this new Counter is implicitly returned because a
   *    constructor method does not need to explicitly use the return word.
   */
  constructor(props, parentNode) {
    this.count = props.count || 0;

    const container = document.createElement("div");
    container.style.padding = "10px";
    container.style.border = `2px solid ${props.color}`;
    container.classList.add("counter");
    
    const heading = document.createElement("h2");
    heading.innerText = `${this.count} ${props.headingText}`;
    heading.style.color = props.color;
    container.appendChild(heading);

    const btn = document.createElement("button");
    btn.innerText = "Increment";
    btn.addEventListener("click", (event) => {
      // console.log(event);
      this.count++;
      // console.log(this.count);

      heading.innerText = `${this.count} ${props.headingText}`;
    });
    container.appendChild(btn);

    parentNode.appendChild(container);
  }
}

export default Counter;