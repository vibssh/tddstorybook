import React from "react";
import PropTypes from "prop-types";
import "./Breadcrumb.scss";

const propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
      isActive: PropTypes.bool
    })
  ),
  current: PropTypes.string
};

const defaultPropTypes = {
  options: [],
  current: 'active'
};

const Breadcrumb = props => {
  const { options, current } = props;
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {options.map((option,index) => {
          const activeClass = option.isActive === true ? current : '';
          return (
            <li className={`breadcrumb-list ${activeClass}`} key={index}>
              {option.isActive !== true && <a href={option.url} className={`breadcrumb-list-link`}>
                {option.title}
              </a>
            }
            {option.isActive === true && option.title } 
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultPropTypes = defaultPropTypes;
export default Breadcrumb;
