import "./landing.css";
import { heroImg } from "../../assets";
import { Link, useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="container grid grid--2--cols">
      <div className="content--container">
        <div className="content">
          <h1 className="heading--1">
            <span>Notes</span> App
          </h1>
          <div className="content--description">
            <p className="tagline"> Organizate. Recuerda Todo </p>
            <p>
              Notes App es un administrador de notas digital. Administre sus notas y flujo de trabajo de una menra moderna y aumente su eficiencia sin ningún esfuerzo.
            </p>
          </div>
          <div className="cta--container">
            <button
              className="btn btn--primary home--cta"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Inicie su toma de notas
            </button>
            <Link className="link link--primary m-r-1" to="/login">
              ¿Ya tienes una cuenta?
            </Link>
          </div>
        </div>
      </div>
      <div className="image--container">
        <img className="img--res" src={heroImg} alt="" />
      </div>
    </div>
  );
};
