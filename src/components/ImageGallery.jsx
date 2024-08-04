import React from "react";
import "./ImageGallery.css";

// import imagesDataJSON from "../data/images-data.json";
// import committeeMembersData from "../data/contact-info-data.json";

const ImageGallery = ({ imagesDataJSON, sermonsDataJSON, contactInfoData }) => {
  if (imagesDataJSON) {
    return (
      <div className="grid_container">
        <div className="product_grid">
          {imagesDataJSON.imagesData.map((imgInfo) => (
            <div className="card stacked" key={imgInfo.id}>
              <img
                src={imgInfo.src}
                alt={imgInfo.landmark}
                className="card_img"
              />
              {/* <div className="card_content">
                <h2 className="card_title">{imgInfo.landmark}</h2>
                <p className="card_price">{`$${imgInfo.rating}`}</p>
                <p className="card_description">Located in {imgInfo.city}</p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (contactInfoData) {
    return (
      <div className="grid_container">
        <div className="product_grid">
          {contactInfoData.committeeMembers.map((membersInfo) => (
            <div className="members_card stacked" key={membersInfo.id}>
              <img
                src={membersInfo.imgSrc}
                alt={membersInfo.name}
                className="card_img"
              />
              <div className="card_content contact_content">
                <h6 className="card_title">{membersInfo.name}</h6>
                <p className="card_price">{`${membersInfo.role}`}</p>
                {/* <p className="card_description">Located in {membersInfo.city}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (sermonsDataJSON) {
    return (
      <div className="grid_container">
        <div className="product_grid">
          {sermonsDataJSON.sermons.map((sermonsInfo) => (
            <div className="members_card stacked" key={sermonsInfo.id}>
              <img
                src={sermonsInfo.imgSrc}
                alt={sermonsInfo.title}
                className="card_img"
              />
              <div className="card_content">
                <h6 className="card_title">
                  {
                    // sermonsInfo.split()
                    sermonsInfo.title
                  }
                </h6>
                <p className="card_price">{`${sermonsInfo.brother}`}</p>
                <p>{sermonsInfo.congregation}</p>
                {/* <p className="card_description">Located in {sermonsInfo.city}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default ImageGallery;
