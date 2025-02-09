import ReactLoading from "react-loading";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <ReactLoading
        type={"spin"}
        color={"#ed8936"}
        height={"10%"}
        width={"10%"}
      />
    </div>
  );
}
