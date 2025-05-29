
import ContainerFilm from "../Elements/Container/ContainerFilm";
import HeadingTitle from "../Elements/HeadingTitle/HeadingTitle";
const dummyMovies = [
  {
    id: 1,
    title: "The Dark Knight",
    name: "",
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    vote_average: 8.5,
    overview: "Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice when the Joker wreaks havoc on Gotham."
  },
  {
    id: 2,
    title: "Breaking Bad",
    name: "",
    poster_path: "/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
    vote_average: 9.4,
    overview: "A high school chemistry teacher turned methamphetamine producer partners with a former student in a bid to secure his family's future."
  },
  {
    id: 3,
    title: "Inception",
    name: "",
    poster_path: "/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    vote_average: 8.7,
    overview: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
  },
  {
    id: 4,
    title: "Stranger Things",
    name: "",
    poster_path: "/4TKdguyacjYrC1Hnbi3PjSP8r3M.jpg",
    vote_average: 8.3,
    overview: "When a young boy disappears, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl."
  },
];
const MyList = () => {
  const myList = dummyMovies;

  // useEffect(() => {
  //   console.log("User saat ini:", user); 
  //   if (user?.id) {
  //     fetchMyList(user.id);
  //   } else {
  //     console.error("⚠️ User belum login atau ID tidak tersedia!");
  //   }
  // }, [fetchMyList, user]);
  

  return (
    <div className="flex flex-col justify-center items-center w-full h-full py-6 sm:py-20 sm:my-0 px-2 sm:px-52 gap-4 sm:gap-8">
      <HeadingTitle title="Daftar Saya"  />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {myList.map((item) => (
            <ContainerFilm key={item.id} movie={item} />
          ))}
        </div>
    </div>
  );
};

export default MyList;
