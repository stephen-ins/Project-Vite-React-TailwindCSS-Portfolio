import React from "react";

const BannerLinkedIn = () => (
  <div
    style="
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 25%;
    padding-bottom: 0;
    box-shadow: 0 2px 8px 0 rgba(63, 69, 81, 0.16);
    margin-top: 1.6em;
    margin-bottom: 0.9em;
    overflow: hidden;
    border-radius: 8px;
    will-change: transform;
  "
  >
    <iframe
      loading="lazy"
      style="
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border: none;
      padding: 0;
      margin: 0;
    "
      src="https://www.canva.com/design/DAGeQ6DsULM/OIQRUuX6klzDjCt8E_nC9g/view"
      allowfullscreen="allowfullscreen"
      allow="fullscreen"
    ></iframe>
  </div>
);

export default BannerLinkedIn;
