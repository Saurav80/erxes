import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import Icon from './Icon';
import { colors } from '../styles';

const EmptyStateStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  padding: 20px;
  color: ${colors.colorCoreGray};

  img {
    max-height: 260px;
  }

  ${props => {
    if (props.size === 'small') {
      return `
        min-height: 80px;
        font-size: 12px;
        padding: 10px 20px;
      `;
    } else {
      return `
        position: ${props.position};
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        z-index: 0;
      `;
    }
  }};

  i {
    font-size: ${props => (props.size === 'small' ? '28px' : '16vh')};
    line-height: ${props => (props.size === 'small' ? '40px' : '18vh')};
    color: ${colors.colorShadowGray};
  }

  a {
    margin-top: 10px;
  }
`;

EmptyState.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  image: PropTypes.string,
  size: PropTypes.oneOf(['full', 'small']),
  linkUrl: PropTypes.string,
  linkText: PropTypes.string,
  position: PropTypes.oneOf(['absolute', 'static'])
};

function EmptyState({ text, icon, image, size, linkUrl, linkText }) {
  return (
    <EmptyStateStyled size={size}>
      {icon ? <Icon icon={icon} /> : <img src={image} alt={text} />}
      {text}
      {linkUrl && linkText ? (
        <Button btnStyle="simple" size="small" href={linkUrl}>
          {linkText}
        </Button>
      ) : null}
    </EmptyStateStyled>
  );
}

EmptyState.defaultProps = {
  size: 'small',
  position: 'absolute'
};

export default EmptyState;
