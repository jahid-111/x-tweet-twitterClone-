import { Link } from "react-router-dom";
import ImageSmall from "../images/ImageSmall";

const NotifyMessage = () => {
  return (
    <Link
      to="/go"
      className="flex gap-3 items-center hover:bg-linkColor px-2 py-3 border-b border-gray-700"
    >
      <ImageSmall />
      <p>
        <strong>Mohd.Jahid </strong> Following you{" "}
        <time dateTime="2024-12-10T12:10:00">12:10</time>
      </p>
    </Link>
  );
};

export default NotifyMessage;
