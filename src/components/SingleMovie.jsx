import React from "react";
import { useLocation } from "react-router-dom";
import StaticNav from "./StaticNav";
import Footer from "./Footer";

//Internals

function SingleMovie() {
  const location = useLocation();

  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  const {
    poster_path,
    original_title,
    title,
    vote_average,
    overview,
    release_date,
    popularity,
    vote_count,
    original_language,
  } = location.state;
  return (
    <>
      <StaticNav />
      <div className="single-movie">
        <img src={IMGPATH + poster_path} alt={title} />
        <div className="single-movie-desc">
          <h2 className="movie-title">
            {original_title} | lang = {original_language}
          </h2>
          <h4 className="movie-release">Release Date : {release_date}</h4>
          <h5 className="movie-popularity">Popularity : {popularity}</h5>
          <h6 className="movie-vote-count">{vote_count} people voted</h6>
          <h6 className="movie-vote-average">
            Average Rating : {vote_average}
          </h6>
          <div className="movie-overview">
            <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
              Short description :
            </span>{" "}
            <br /> <p>{overview}</p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
              repudiandae dolores aut, voluptas ullam accusamus minus ipsam,
              ipsum et quae, fuga pariatur soluta doloribus reiciendis qui
              consectetur tempore? Quibusdam totam repellendus maiores
              temporibus ex quam dolorum quaerat beatae officiis commodi
              similique, eum dignissimos! Obcaecati aspernatur praesentium
              reprehenderit pariatur molestiae doloribus cupiditate beatae earum
              dolore porro veniam cum quam voluptate asperiores sapiente dolorum
              repellat, magni est, distinctio, error facilis fugit quod?
              Reprehenderit rerum, nemo cumque praesentium minus, perspiciatis
              sapiente adipisci ad reiciendis labore optio odio excepturi omnis
              obcaecati at ab dolore amet, neque perferendis eum nulla est
              delectus totam fugiat? Nostrum.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque iste magni quaerat. Corrupti neque eius cumque
              temporibus non facilis eos adipisci iste quae, aliquam recusandae
              laborum labore sunt, placeat atque nihil exercitationem aut minima
              ipsam laboriosam! Vel quae illum dolorum tempora totam nemo quasi
              doloremque cum voluptatem, soluta recusandae nam, temporibus ipsam
              placeat fuga nobis aliquid ea aperiam. Iusto recusandae odit
              fugiat sit cum debitis. Dolores vitae, autem, delectus error
              dolore eaque cum illo modi, ex ratione recusandae tempore fugiat
              possimus. Accusamus rem repudiandae aspernatur voluptatem, minus
              sed. Modi odit mollitia nihil pariatur! Fuga temporibus reiciendis
              doloribus laboriosam sed tempore eligendi neque ab ad eius quasi
              quos, natus iure aspernatur ex ipsa in dolorum amet! Dolor dolorum
              odio eum debitis reprehenderit sunt neque velit perferendis minus,
              iure asperiores, repellendus sed minima voluptatum exercitationem
              voluptate quisquam? Libero earum, quam natus est nobis doloremque
              voluptatibus ad quas amet velit ducimus deserunt deleniti?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              dolorem distinctio mollitia obcaecati animi atque nemo ipsum
              eligendi, iure magnam at. Iste ipsam accusantium et blanditiis
              consequuntur cupiditate quasi sit aspernatur reprehenderit. Totam,
              natus dolorum quisquam similique, eum modi ad illum magni mollitia
              eveniet maiores perferendis quibusdam libero cupiditate veritatis
              nihil delectus vel perspiciatis dignissimos porro eius quod
              commodi voluptatum. Repellendus, est doloribus corporis aperiam
              quia aliquam maxime, nam tempore, iure laborum at. Reprehenderit
              provident iure animi, libero modi tenetur voluptates dolorum.
              Asperiores nemo voluptate modi amet quidem architecto expedita
              natus hic ea itaque exercitationem id iure veniam, esse, quia
              corrupti molestias reprehenderit distinctio magnam perferendis.
              Sapiente, mollitia ut molestiae laudantium soluta excepturi quae
              laboriosam. Quod alias animi excepturi culpa esse sequi optio
              fugiat quam nobis eligendi corporis error harum amet labore, odio
              rerum soluta. Optio, molestiae recusandae nisi, similique
              quibusdam quisquam eum, voluptatem mollitia commodi adipisci
              doloremque aspernatur architecto sequi aut! Sunt animi ea dolorem
              cum incidunt, laborum perspiciatis vel eveniet, id voluptatum
              aliquam facilis ad saepe ducimus aut unde iusto nihil assumenda
              similique hic. Nesciunt provident odit alias enim itaque ipsa
              dignissimos porro? Iusto, sequi quod! Reprehenderit illum quis
              provident esse nihil! Cupiditate modi nobis praesentium quaerat
              dolore.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SingleMovie;
