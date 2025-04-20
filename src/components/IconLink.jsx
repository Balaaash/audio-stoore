// src/components/IconLink.jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Обёртка для любой иконки-ссылки.
 * Принимает href, aria-label и дочерний элемент (SVG или <img>).
 */
export default function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="icon-link"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 24,
        height: 24,
        transition: 'opacity .2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = 0.7)}
      onMouseLeave={e => (e.currentTarget.style.opacity = 1)}
    >
      {children}
    </a>
  );
}

IconLink.propTypes = {
  href:    PropTypes.string.isRequired,
  label:   PropTypes.string,     // aria-label
  children: PropTypes.node.isRequired, // SVG или <img />
};

IconLink.defaultProps = {
  label: '',
};
