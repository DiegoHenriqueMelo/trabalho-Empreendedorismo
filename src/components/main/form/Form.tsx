import "./Form.css";

function Form() {
  return (
    <>
      <div className="flex items-center flex-row flex-wrap justify-evenly h-screen">
        <div>
            <button className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-gray-500 rounded-md">Acesse Aqui</button>
        </div>
        <div>
          <h2 className="text-3xl">Lorem ipsum</h2>
          <p className="w-2xs">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            voluptatem veritatis, dicta aliquam velit blanditiis omnis quae
            consequatur expedita, animi voluptatum voluptate esse molestiae
            nesciunt vero autem quod deleniti aperiam.
          </p>
        </div>
      </div>
    </>
  );
}

export default Form;
