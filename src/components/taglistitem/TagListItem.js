import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./style.module.css";

const TagListItem = ({ album }) => {
  const { namn, link } = album;

  return <div className={styles.first}></div>;
};

TagListItem.propTypes = {
  album: PropTypes.object.isRequired
};

export default TagListItem;
