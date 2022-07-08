import logo from './logo.svg';
import './App.css';

import { ProfilePreview } from './components/ProfilePreview';

function App() {
  const profiles = [
    {
      username: 'Queen',
      likeCount: 20,
      bio: 'Bow down chap.',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Queen_Elizabeth_II_in_March_2015.jpg/1200px-Queen_Elizabeth_II_in_March_2015.jpg',
    },
    {
      username: 'Bearded Lover',
      likeCount: 0,
      bio: 'Must have patience while I continue to grow my beard.',
      imgUrl:
        'https://static.boredpanda.com/blog/wp-content/uploads/2018/04/11-5ad8337c30682__700.jpg',
    },
    {
      username: 'Mikey',
      likeCount: 55,
      bio: 'NOOOOO',
      imgUrl:
        'https://media1.tenor.com/images/2c1cadebd4e93d3af72ce9b61b5ffbb2/tenor.gif?itemid=7842199',
    },
  ];

  return (
    <div className="container">
      {profiles.map((profile, i) => {
        return <ProfilePreview key={i} user={profile} />;
      })}
    </div>
  );
}

export default App;
