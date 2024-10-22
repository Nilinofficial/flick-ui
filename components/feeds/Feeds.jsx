const Feeds = ({
  profilePhotoUrl,
  firstName,
  lastName,
  age,
  about,
  gender,
}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img width={250} height={250} src={profilePhotoUrl} alt="profile" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName} {""} {lastName}
        </h2>

        <p>Age : {age}</p>
        <p>{gender}</p>

        <div className="card-actions justify-end">
          <p className="truncate">about {about}</p>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
