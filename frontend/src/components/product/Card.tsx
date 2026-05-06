import type { JSX } from "react";
import { getImageUrl } from "../utils/getImageUrl";
import icon from "../../assets/icon/Extended.svg";
type CardProps = {
  imageId: string;
  discount: number;
  imageSize: number;
  title: string;
  price: number;
  extended: boolean;
};
function Card({
  imageId,
  discount,
  imageSize,
  title,
  price,
  extended,
}: CardProps): JSX.Element {
  return (
    <div className="Card size-full">
      <div className="Card-Image h-[360px] min-width=[286px]">
        {discount}
        <img
          className="Card-Image"
          src={getImageUrl(imageId)}
          alt="img"
          width={imageSize}
          height={imageSize}
        />
      </div>
      <div className="Card-Details">
        <h1 className="Card-Title">{title}</h1>
        <span className="Card-Price">{price}</span>
        <img src={icon} alt="" />
      </div>
    </div>
  );
}
export default Card;
