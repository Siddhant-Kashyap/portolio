
const Card = (props) => {
  return (
    <>
      <div className="mt-20   bg-[#000000]  shadow-custom max-w-sm p-4 rounded-2xl flex justify-center items-center ">
        <div>
            <img className="mt-1" width={100} src={props.logoSrc} />
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-white dark:text-white">
            {props.name}
          </h5>
        </div>
      </div>
    </>
  );
};

export default Card;
