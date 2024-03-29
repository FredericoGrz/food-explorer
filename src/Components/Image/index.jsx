import Proptypes from "prop-types";
import { useEffect, useState } from "react";
import { useAlertBox } from "../../hooks/AlertBox";
import { api } from "../../services/api";

export function Image({ imgFile, imgUrl, ...rest }) {
  const { showAlertBox } = useAlertBox();
  const [img, setImg] = useState({});
  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await api.get(`/files/${imgUrl}`, {
          responseType: "arraybuffer",
        });
        const imgFormat = imgUrl.split(".")[1];
        const blob = new Blob([response.data], {
          type: `image/${imgFormat}`,
        });
        setImg(URL.createObjectURL(blob));
      } catch (error) {
        showAlertBox({ message: "Erro ao carregar imagem", type: "warning" });
        console.log(error);
      }
    }
    if (!imgFile && imgUrl) fetchImage();
  }, []);
  return (
    <img
      src={imgFile || img}
      className="w-full h-full object-cover"
      {...rest}
    />
  );
}

Image.propTypes = {
  imgFile: Proptypes.object,
  imgUrl: Proptypes.string,
};
