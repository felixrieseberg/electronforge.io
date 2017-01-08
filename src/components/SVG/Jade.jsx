import React, { PureComponent, PropTypes } from 'react';

export default class VanillaJSSVG extends PureComponent {
  static propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
  };

  render() {
    const { height, width } = this.props;

    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" enableBackground="new 0 0 400 400" height={`${height}px`} width={`${width}px`}>
        <path fill="#C1272D" d="M296.3 219.1c1.7 1.7 2 4.6-.2 6.1-5.2 3.5-11.6 2.9-17.6 2.2-10.2-1.1-22.3-1.5-27.6-11.3l-.4-.3c-6.7-3.6 4.6-6.2 7.7-6.6 7.2-.9 14.7.9 21.7 2.5 6.2 1.5 11.8 3 16.4 7.4zm92.8 151.7c-4.7 3.4-2.6 9-6.1 13.1-3.3 3.8-11.3 3.7-15.8 3.8-18.1.2-36-1.3-54.1.2-4.5.4-8.6 1-13 2.1-1.3.3-3.4 1.1-4.8.4-3.7-1.9-7-8-11.7-6-4 1.6-6.9 7.5-11.8 3.9-8.7-6.4-16.1-.6-25.2 1.2-9.4 1.9-18.5-3.4-27.9-.7-7 2-13.6 4.2-20.8 1.8-7.3-2.4-9.2-8.1-2.9-13.3 9.9-8.1 22-9.3 34.4-8.4 18.6 1.5 37 .2 55.6-.7.5 0 .9.3 1 .7 7.9 3.2 13.2-3.3 17.6-8.7.6-.7 1.7-.4 2.1.3 6.6 9.9 14.8-1.3 23.1-.5 2.2.2 4.4.8 5.6 2.9.6.9.7 2.2.8 3.2.4 5 6.8 4 6.6-1.2 0-.8.9-1.6 1.7-1.3 6.5 2.6 15.2 6.2 20.8-.8 4.6-5.8 5.3-14.3 5.6-21.5 1-19.2-.4-38.9-1.7-58-1.2-18.6-3.2-37.6-1-56.2 2.2-18.4 2.2-36.5 1.7-55.1-.2-9.7-.5-19.4-.1-29.1.4-8.9 2-18.4.9-27.3-.9-8-5.6-14.8-6.7-22.7-1-7.2 0-14.6 1.7-21.6 1-4.4 3.1-9.5 3-14.1-.1-3.9-.4-7.8-.3-11.7.1-1.9-.3-4.9 1.1-6.5 2.3-2.7 3.4-6.6-1.8-7.2-12.5-1.4-25.4-9.4-37.4-1.8.1 2.6.4 5.7-.3 8.3.5.8 1.1 1.6 1.8 2.3 3 1.3 6.1 1.8 9.3 1.8 3.8.1 8.1-1 11.8-.6 3.3.4 5.9 3.2 4.8 6.8-.7 2.6-3.1 4.9-4.5 7.2-2.4 4-2.1 9.7-2.1 14.2-.2 11.5 0 23.1.4 34.6.3 9.6 1.3 19.2 2 28.8.2.2.8.5.8.8.4 10.7 4 21.4 4.2 32.2.1.2-2.8 13.3-2.8 13.3-.1 14-1.3 39.9-1.3 39.9-.2 23.9-4.3 47.4-.1 71.2 1.7 9.6-1.9 18.7-2.3 28.2-.5 10.4 1 20.9-.5 31.3.3.6.1 1.4-.8 1.5-21.8 4.1-43.9 4.9-66 3.6-5.5-.3-12.2-.8-17.4 1.3-2.2.9-5 2.4-7.5 2-3.2-.5-4.7-2.9-7.8-3.5-3.7-.7-7.5-1.5-11.2-2-9.8-1.3-19.2-1.9-28.5 2.1-5.1 2.2-10.4 1.4-15.5-.8-6-2.5-10.6-5.5-17.2-2.2-2.7 1.3-5.1 2.7-8.1 3.4-2.5.6-4.7-.1-7-.9-5.1-1.9-9.1-2.5-14.5-1.5.6.7.2 2.3-.9 2.3-32.3-1.7-64.7 2.2-97 2.4-1.4.4-2.6 2.1-3.6 2.1h-1c-.7 0-1-2.7-.8-3.2-4.4-4.7-3.3-20.4-3.1-25.1 1.4-30.1-2.5-60.1-3.4-90.1-.4-15-.4-29.9 2-44.8 2.8-16.7 2.8-32.7 2.4-49.6-.7-33.1 2.5-66.2 1.5-99.3 0-.6.6-.8 1-.6.1-.1.2-.2.4-.2 8.9-.8 18.6-3.3 27.4-.8.2.1.3.2.4.3l1.4.2h9.9c.4 0 .7.2.8.4 17.4.2 34.9-1.4 52.3-2.2 6.1-.3 12.4 0 18.3-1.9 3.1-1 6.6-2.5 10-2.3 7.9.5 16.2 3.1 23.9 4.7 5.5 1.2 9.3-8.3 14.2-5.2 7.5 4.7 16.1 3 24.6 3.2 4.5.1 8.9-.8 13.4-.8 2.4 0 4.5.6 6.8 1.2 2.3-.4 4.3-.1 6.7.7 13.5.3 27-1.5 40.6-1.3 8.2.1 17 .7 24.8-2.3 2-.8 3.2-1.9 3.8-3.3l-.9-2c-.6-1.2-1.2-2.4-2.1-3.4-8.6-2.9-18.8-2-27.8-2.4-12.6-.5-24.8 1.1-37.3 2.1-11.6 1-23.6 1.6-35.3.8-6.8-.5-19.8-3.6-25.6 1.1-.6.4-1.1.4-1.7 0-11.2-9.2-25.8 4.5-38.6.7-7.6-2.3-14.9-3.7-22.9-2.9-7.9.8-15.3 1.9-23.3 1.8-17.2-.1-34.5 1-51.7.4-3.7-.1-7.4-.2-11.1-.6-3-.4-7.1-1.8-10.1-.7-4.7 1.8-5.7 3.4-5.3 4.7 1.3.9-3.2 7-3.3 10-.1 2.7-.3 5.3-.3 7.9-.2 11.7-1 22.5-3.6 33.9-1.4 6.1-4.3 14.6-2.1 20.7 1.4 3.9 4.4 6.6 6.1 10.3 3 6.4 3.2 14.4 2.9 21.3-1 22.7-1 45.5-1.8 68.2-.8 22.8-2.2 45.6-1.4 68.4.7 21.1 4.1 42.7 1.3 63.7-.9 7-9.2 19.4-1.2 24.2 4.5 2.7 10.1 3.4 15.2 3.7 12.9.7 25.9-.6 38.7-2 4.7-.5 9.5-1.5 14.2-1.6 3.7-.1 7 .3 10.5 1.6 3 1.1 7.6 3.2 11.3 3.2.2.2 5.7-.2 6.1-1.8 4.8-2 8.9-3.7 15.1-2.4 5.8 1.2 11.3 1.9 17.3.7 3.2-.6 8-.9 11.2-.1.3.1 1.1 1 1.4.9 1.3-.5-.8 1.6-2 2.1-7.2 2.9-4.9 12.1-5.8 18.2-.1.5-.7.8-1.2.8-2.9 0-6.8 0-8.3-3-3.3-6.3-11.4-10.4-11.4 2.4 0 .7-.6 1.1-1.1 1.1-.6 0-1.1-.4-1.1-1.1 0-.7-8.4-5.2-9.4-5.8-4.1-2.3-9-4.9-13.8-3.3-3 1-5.6 2.7-8.3 4-5.1 6.3-10.4 13-18.1 8.9-1.5-.8-7.9-6.3-9-5-1.8 2-3.7 3.7-6.2 4.7-6.8 2.7-14.1 2.2-21.3 2.2-.5 0-1-.4-1.1-.9-.4-2.9-2-8.6-5.9-5.1l-2.6 2.4c-1.2 1-2.4 2.3-3.9 2.9-4.8 1.9-19.3-.6-21.3-4-1.4-2.5-2.1-5.1-2.6-7.9-1.2-7-.4-14.6-.7-21.8-.6-18-1.9-35.6-3.5-53.5-.8-9.2-1.5-18.5-.8-27.7.4-5.9.6-14.1 3.5-19.4 2.5-4.5.7-7.7-2.5-11.1-.8-.9-1.1-2.7-1.2-3.8-.5-6.7.6-13.6 1-20.3.3-4.9 1-9.8 1.2-14.8.1-3.8-.8-7.4-1.1-11.1-.1-1.8-.3-3.9.8-5.5 2.3-3.2 1.8-4.9.6-8.5-2.5-7.1 0-15.5.5-22.7.5-8.6.9-17.2 0-25.8-1-9.5-2.8-18.8-2.2-28.4.5-8.6 1.2-16.6 1.6-25.3.7-15.5.8-31.4.4-46.9 0 .9 0 3.7-.1 3.7 0 0-1.4-19.9 7.1-24.7 12.8-6.3 28.3-5 42.1-5.7 18.1-.8 36 1 54.1 1 10.4 0 20.8-.3 31-2.5 7.2-1.6 14.3-2.4 21.7-1.9 8.8.6 17.4 2.8 26.2 3.6 8.7.8 17.3.4 26-.3 18.9-1.3 37.9-.8 56.9 0l29.5 1.3c4.5.2 9.9 1.3 14.3.1l8.4-2.9c6.2-1.6 10.5-.1 16.5 1.3 7.4 1.8 14.9 3.4 22.3 5.3 2.5-.6 4.9-.7 6.9 1.2 4.1 3.8.1 8.5 3.2 12.8 3.7 5.2 7 8.3 7.7 15 .7 7.1 1.2 14.5-1.1 21.3-1.5 4.6-3.6 9.6-1.7 14.3 1.2 3 3.2 6 3.9 9.1 1.5 6.8 1.5 13.7 1.1 20.6-.4 8-.7 16-1.7 24-.6 5-2.6 10-2.8 15.1-.1 4.2 1.2 7.6 2 11.6 2.6 13.1-8.7 21.2-10.8 33.2-1.1 6.4 6.3 3.7 9.4 7.4 2 2.4 1 6.6.7 9.4-.7 7 1.3 13.9 1 20.8-.5 8.6-3 15.9-.9 24.6 1.2 4.9 2.1 9.8 1 14.7-1.1 4.8-6.8 17.3.7 19.5.3.1.5.4.5.7 0 2.2-.4 3.8-1.4 5.9-3.4 7.5 1.8 6.1 2.8 11 .9 4.5-1.8 6.2-2.4 10.4-1.1 6.8 2.4 12.2 2.3 18.8-.1 6.2-3.6 9.7-2.4 15.3.4 0 .7.3.8.8.6 3.1.9 6.4-.2 9.5-1.5 4.4-3.3 5.4 1.6 8.1.9.7.7 1.7 0 2.2zm-83.1-210.9c-3.1-18.6-4.8-37.9-11-55.8-2.6-7.5-4-15.6-12.7-17-11.3-1.9-7.5 7.6-6.1 16.6 2.3 14.1 3.2 28.2 6.8 42 2.5 9.5 7.3 20.9-5.4 13.4-21.4-12.6-28.7-40.8-37.3-61.8-3.9-9.4-15-32.3-22.5-37.9-3.6-2.7-21.7-6.7-25.1-4.4-7.5 5.1 15.5 40.8 18.7 47.2 7 14.2 14.5 28.4 23.5 41.4 6.4 9.2 16.7 17.5 2.2 23-15 5.7-22.2-2.6-32.5-10.4-8.1-6.2-18.4-6.9-28.6-8.2-27.8-3.5-54.5-.2-76.9 18.3-10.9 9-17.6 21.5-23.3 34.2-1.5 3.2-10.8 31.3-9.5 31.5-5.6-.9-2.4-14.1-9.6-6.4-6.4 6.9 1.8 26.6 4.7 33.4 6.5 15.3 13.3 30.3 18.4 46.1 5.2 15.9 6.2 15.5 21 16.8 18.6 1.7 36.8-4 55.1-6.3 0 0-32.5-20.1 31.7 1.9 14.2 4.9 29.4 3.6 44.3 4.2 10.7-2.5 10.9-20.8 16.5-29.4 2.1-3.2 12.3-19.4 15.6-20.7 4.6-1.8 11.2 3 15.7 3.7 26.8 4.2 35-17.8 30.8-39.3-3.7-18.9-1.5-39.6 1.2-54.3.9-5.1-4.8-16.7-5.7-21.8zm48.6 20zm-168 208.3c-2.9-2.7-7.3-3.4-10.1-6.2-1.6-1.6-2-3.5-1.7-5.3l-.2-.2c-2-3.7 2.7-7 6.1-5.6 1.7.7 4.4 1.9 4.6 4 .3 2.6-1.6 4.5-2.1 6.9 1.8 1.1 3.8 3.7 4.8 5.2.8 1-.6 1.9-1.4 1.2z" />
      </svg>
    );
  }
}