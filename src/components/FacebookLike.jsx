import { useEffect } from "react";

const FacebookLike = ({ url }) => {
    useEffect(() => {
        if (window.FB) window.FB.XFBML.parse();
    }, [url]);

    return (
        <div
            className="fb-like"
            data-href={url}
            data-layout="button"
            data-action="like"
            data-size="small"
            data-share="false"
        />
    );
};

export default FacebookLike;
