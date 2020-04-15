import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import { articlePropTypes } from '../../src/components/common-prop-types';

export class SaveButton extends Component {
  componentDidMount() {
    const { isBookmarked } = this.props;
    this.setState({ buttonText: isBookmarked ? 'Saved' : 'Save' });
  }

  render() {
    const { buttonText } = this.state;

    const { article, isBookmarked, onClick } = this.props;

    const mouseOver = (_e) => {
      this.setState({ buttonText: isBookmarked ? 'Unsave' : 'Save' });
    };

    const mouseOut = (_e) => {
      this.setState({ buttonText: isBookmarked ? 'Saved' : 'Save' });
    };

    if (article.class_name === 'Article') {
      return (
        <button
          type="button"
          className={`crayons-btn fs-s ${
            isBookmarked ? 'crayons-btn--ghost' : 'crayons-btn--secondary'
          }`}
          data-initial-feed
          data-reactable-id={article.id}
          onClick={onClick}
          onMouseOver={mouseOver}
          onFocus={mouseOver}
          onMouseout={mouseOut}
          onBlur={mouseOut}
        >
          {buttonText}
        </button>
      );
    }
    if (article.class_name === 'User') {
      return (
        <button
          type="button"
          className="crayons-btn crayons-btn--secondary fs-s"
          data-info={`{"id":${article.id},"className":"User"}`}
          data-follow-action-button
        >
          &nbsp;
        </button>
      );
    }

    return null;
  }
}

SaveButton.propTypes = {
  article: articlePropTypes.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

SaveButton.displayName = 'SaveButton';
