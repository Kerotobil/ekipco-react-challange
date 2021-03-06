import Link from 'next/link';

export const CardCategory = (props) => {
  return (
    <Link href={`category/${props.id}`} passHref>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description} </p>
        </div>
      </div>
    </Link>
  );
};
