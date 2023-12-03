export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRDcTtqtraPzxBSoCLV8CPMKK4Z5Zn-m64oovU_Ss9bL2dv6fcI"
          alt=""
        />
      </div>

      <div className="texts">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
          exercitationem.
        </h2>
        <p className="info">
          <a className="author">Ron Brad</a>
          <time> 2023-12-03 21:55</time>
        </p>
        <p className="summary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, vero
          repudiandae velit corporis fuga quam libero consequuntur optio quas
          id.
        </p>
      </div>
    </div>
  );
}
