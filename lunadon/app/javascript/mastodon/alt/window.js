import React from 'react';
import PropTypes from 'prop-types';

export default class Window extends React.PureComponent {

  static propTypes = {
    style: PropTypes.object,
    title: PropTypes.string,
    favicon: PropTypes.string,
    children: PropTypes.object,
  };

  render() {
    const { style, title, favicon, children } = this.props;

    return (
      <div className={'window'} style={style}>
        <div className={'windowHeaderContainer'}>
          <img src={'/alt/windowHeaderLeftBorder.png'} />
          <div className={'windowHeader'}>
            <div className={'windowFaviconContainer'}>
              <img src={favicon} className={'windowFavicon'} />
            </div>

            <div className={'windowTitleContainer'}>
              <h1 className={'windowTitle'}>{title}</h1>
            </div>

            <div className={'windowSpacing'}></div>

            <div className={'verticalAlign'}>
              <div className={'minimizeButton'}></div>
            </div>
            <div className={'verticalAlign'}>
              <div className={'maximizeButton'}></div>
            </div>
            <div className={'verticalAlign'}>
              <div className={'closeButton'}></div>
            </div>
          </div>
          <img src={'/alt/windowHeaderRightBorder.png'} />
        </div>
        <div className={'windowBody'}>
          {children}
        </div>
      </div>
    );
  }

}
