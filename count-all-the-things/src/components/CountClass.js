import { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    const { counterData } = props;
    const { startCount = 0, step = 1 } = counterData;

    // Save our defaults here so they are available in the methods without having to redefine the defaults.
    this.startCount = startCount;
    this.step = step;

    this.state = {
      count: startCount,
    };
  }

  handleClickCount = () => {
    this.setState({
      count: this.state.count + this.step,
    });
  };

  handleClickResetCount = () => {
    this.setState({
      count: this.startCount,
    });
  };

  render() {
    const { counterData } = this.props;
    const { title, imageUrl } = counterData;
    const { count } = this.state;

    const countButtonClasses = `text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800`;

    const resetButtonClasses = `text-gray-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-400 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-200`;

    return (
      <div className="w-2/5 bg-white dark:bg-gray-800 dark:border-gray-700 border border-gray-200 rounded-lg shadow mb-5">
        {imageUrl && <img className="w-full rounded-t-lg" src={imageUrl} alt="counter" />}
        <div className="p-3">
          <h2 className="text-3xl text-center font-bold text-orange-400">{count}</h2>
          <h3 className="text-2xl text-center mb-3">{title}</h3>
          <div className="flex justify-center">
            <button
              onClick={(event) => {
                this.handleClickCount();
              }}
              className={countButtonClasses}
            >
              Count
            </button>
            <button
              onClick={() => {
                this.handleClickResetCount();
              }}
              className={resetButtonClasses}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}
