import { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
const DEFAULT_TEXT = "error";
const DEFAULT_COLOR = "white";
const DEFAULT_BG_COLOR = "black";
const defaultNotFound = "not found";
//屬性 - 單純文字
export const ShowType_Text = memo(function ShowType_Text({ bgColor, zhName }) {
    return (
        <a href="#">
            <span
                style={{
                    color: bgColor ?? DEFAULT_COLOR,
                    // marginBottom: "0.1rem",
                }}>
                {zhName ?? DEFAULT_TEXT}
            </span>
        </a>
    );
});
//屬性 - 單純顏色
export const ShowType_Color = memo(function ShowType_Color({ bgColor }) {
    return (
        <a href="#">
            <span
                className="type"
                style={{
                    backgroundColor: bgColor ?? DEFAULT_BG_COLOR,
                }}>
                {"\u00A0"}
            </span>
        </a>
    );
});
//屬性 - 顏色+文字
export const ShowType_ColorText = memo(function ShowType_ColorText({
    bgColor,
    zhName,
    enName,
}) {
    return (
        // <a href="#">
        <Link to={`type/${enName}`}>
            <span
                className="type"
                style={{
                    backgroundColor: bgColor ?? DEFAULT_BG_COLOR,
                }}>
                {zhName ?? DEFAULT_TEXT}
            </span>
        </Link>
        // </a>
    );
});

//Pokemon - 顯示文字
export const CharacterShowText = memo(function CharacterShowText({
    item,
    isActive,
    handleClick,
    children,
}) {
    return (
        <div
            className={`characterText ${isActive}`}
            onClick={() => handleClick(item)}>
            <span className="characterName">
                {item?.zhName ?? defaultNotFound}
            </span>
            {children}
        </div>
    );
});
//Pokemon - 顯示圖片
export const CharacterShowImage = memo(function CharacterShowImage({
    item,
    isActive,
    handleClick,
    children,
}) {
    return (
        <div
            style={{
                display: "flex",
            }}>
            {children}
            <div style={{ position: "relative" }}>
                <img
                    src={item?.sprite ?? ""}
                    alt={item?.zhName ?? defaultNotFound}
                    title={item?.zhName ?? defaultNotFound}
                    className={`characterImg ${isActive}`}
                    onClick={() => handleClick(item)}
                    loading="lazy"
                />
                {/* <LazyLoadImage
                        src={item?.sprite ?? ""}
                        alt={item?.zhName ?? defaultNotFound}
                        title={item?.zhName ?? defaultNotFound}
                        className={`characterImg ${isActive}`}
                        onClick={() => handleClick(item)}
                        effect="blur"
                    /> */}
            </div>
            {/* <p>{item?.pokeId ?? "none"}</p> */}
        </div>
    );
});
//Pokemon - 顯示圖片和文字
export const CharacterShowTextImage = ({
    item,
    isActive,
    handleClick,
    children,
}) => {
    return (
        <div
            className={`characterImgText ${isActive}`}
            onClick={() => handleClick(item)}>
            <div>
                <span className="characterName">
                    {item?.zhName ?? defaultNotFound}
                </span>
                {children}
            </div>
            <img
                src={item?.sprite ?? ""}
                alt={item?.zhName ?? defaultNotFound}
                title={item?.zhName ?? defaultNotFound}
            />
        </div>
    );
};
