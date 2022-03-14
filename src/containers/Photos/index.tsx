import React, { useState } from "react";
import { useQuery } from "react-query";
import { FetchPhotos } from "../../handlers/handlers";
import { PhotoData } from "../../interfaces/interfaces";
import { PhotosStyle } from "./styles";

const Photos = () => {
  const [Page, setPage] = useState<number>(0);
  const { status, data } = useQuery<PhotoData[], Error>(
    ["Photos", Page],
    FetchPhotos
  );
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Error</div>;
  }
  return (
    <>
      <div className="mainContainer">
        <div className="photoContainer">
          {data
            ?.slice(Page * 53, 52 + Page * 53)
            .map((photo: PhotoData, photoIndex: number) => {
              return (
                <div className="photoCon" >
                  <img
                    className="photo"
                    key={photoIndex}
                    src={photo.url}
                    alt="img"
                  />
                </div>
              );
            })}
        </div>
        <div className="buttonSection">
          <button disabled={Page === 0} onClick={() => setPage(Page - 1)}>
            Previous
          </button>
          <button onClick={() => setPage(Page + 1)}>Next</button>
        </div>
      </div>
      <PhotosStyle />
    </>
  );
};

export default Photos;
