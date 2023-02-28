import React, { useState } from 'react';
import styles from '/styles/Contact.module.css';
import Circle from '/components/Circle'

export default function ImageContact() {
  const [classNameImage, setClassImage] = useState(styles.circleImg);
  return (
    <Circle className={classNameImage} />
  );
}
