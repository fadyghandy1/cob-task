import { data } from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

function Blogs() {
  return (
    <section className="blogs-section">
      <div className="container">
        <h2>Blogs</h2>
        <Swiper
          modules={[Navigation]}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          <div className="blogs-content">
            {data.map((blog) => {
              return (
                <SwiperSlide key={blog.id}>
                  <img src={blog.image} alt="" />
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
        <div className="viewall-button">
          <button>View All</button>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
