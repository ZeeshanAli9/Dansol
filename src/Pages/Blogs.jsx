import React, { useEffect, useLayoutEffect } from "react";
import Container from "../Components/Container";
import blog from "../assets/blog.png";
import Button from "../Components/reuseables/Button";

function Blogs() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="mb-10">
        <Container>
          <div>
            <div>
              <div className="my-3">
                Home / <span>Blogs</span>
              </div>
              <div className="my-8 font-bold text-3xl tracking-[3%]">Blogs</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {blogdata.map((blog) => (
                <div key={blog.id}>
                  <div className="p-3 border border-b-0 border-[#C8D0D8] rounded-t-[10px] ">
                    <img src={blog.img} alt="" className="w-full" />
                  </div>
                  <div className="bg-[#F0F4F7] p-5 rounded-md -mt-[5px]">
                    <div className="flex justify-between text-[14px]">
                      <p>{blog.date}</p>
                      <p>{blog.name}</p>
                    </div>
                    <div className="my-3">
                      <h4 className="text-[20px] font-bold md:pr-12">
                        {blog.itemname}
                      </h4>
                    </div>
                    <div className="hidden sm:block">
                      <Button classname="px-4 py-2">Read More</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Blogs;

const blogdata = [
  {
    id: 1,
    img: blog,
    date: "Feb 09 2021",
    name: "John Deo",
    itemname: "Dental Instrument Quality Test Guidelines",
  },
  {
    id: 2,
    img: blog,
    date: "Feb 09 2021",
    name: "John Deo",
    itemname: "Dental Instrument Quality Test Guidelines",
  },
  {
    id: 3,
    img: blog,
    date: "Feb 09 2021",
    name: "John Deo",
    itemname: "Dental Instrument Quality Test Guidelines",
  },
  {
    id: 4,
    img: blog,
    date: "Feb 09 2021",
    name: "John Deo",
    itemname: "Dental Instrument Quality Test Guidelines",
  },
  {
    id: 5,
    img: blog,
    date: "Feb 09 2021",
    name: "John Deo",
    itemname: "Dental Instrument Quality Test Guidelines",
  },
];
