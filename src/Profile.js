export function Profile({ user }) {
  return (
    <>
      <menu>
        <li>Home</li>
      </menu>
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img width="300" height="300" src={user.image} alt="Profile picture" />
      <ul>
        <li>Age: {user.age}</li>
        <li>Email: {user.age}</li>
        <li>Phone: {user.age}</li>
      </ul>
    </>
  );
}
