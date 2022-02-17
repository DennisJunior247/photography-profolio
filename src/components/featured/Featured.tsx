import "./Featured.scss";

import TitleBlock from "../titleBlock/TitleBlock";

interface Props {
  collection: Array<{ name: string; image: string }>;
  title: string;
}

const Featured = ({ collection, title }: Props) => {
  return (
    <div className="featured">
      <TitleBlock subtitle="Featured" title={title} />
      <div className="featured__grid">
        {collection.map((item, index) => (
          <div
            key={item.name + index}
            className="featured__item featured__item--one"
            style={{ backgroundImage: `url('${item.image}')` }}
          >
            {/* <p className="featured__item-label">{item.name}</p> */}
          </div>
        ))}
      </div>
      <div className="featured__cta">
        {/* <div className="btn">View All</div> */}
      </div>
    </div>
  );
};

export default Featured;
