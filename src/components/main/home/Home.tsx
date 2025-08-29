import "./Home.css";

function Home() {
  return (
    <>
      <div className="flex items-center flex-row flex-wrap justify-evenly h-screen">
        <div className="rounded-md w-96 h-80 bg-gray-400"></div>
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

export default Home;
