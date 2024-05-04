import AnchorLink from "react-anchor-link-smooth-scroll"

const Information = () => {
  return (
    <div className="divide-y max-[768px]:w-full max-[768px]:flex max-[768px]:flex-col max-[768px]:items-center sm:flex sm:flex-col sm:items-center xl:block">
      <h1 className=" text-5xl max-[768px]:text-2xl flex items-center font-cursive font-bold">
        Nguyen Hong Quan
      </h1>
      <p className="text-xl w-5/6 text-justify font-medium mt-5">Welcome to my home. I'm Quan, a web developer with a create vision and a knack for problem-solving. With a solid foudation in HTML, CSS and Javascript, some technology like ReactJs, NodeJs,...
      With a constant thirst for learning and staying abreast of the latest technologies, I'm always eager to tackle new challenges and push the boundaries of what's possible on the web.
      </p>
      <AnchorLink href="#detail">
        <p href="" className="text-xl text-teal-600 font-medium mt-5 w-5/6">Detail</p>
      </AnchorLink>
      <p className="text-xl sm:flex sm:justify-center xl:block font-medium mt-5 w-5/6">
        Let's discover more below
      </p>
    </div>
  )
}

export default Information