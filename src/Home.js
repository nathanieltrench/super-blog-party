import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
window.Appcues.identify(
  "<<< USER_ID >>>", // unique, required
  {

    // recommended (optional) properties

    createdAt: 1566932390, // Unix timestamp of user signup date
    purchasedAd: 1566932395, // Unix timestamp of account purchase date (leave null if empty)
    planTier: "Standard", // Current user’s plan tier
    role: "Admin", // Current user’s role or permissions
    accountId: "1234", // Current user's account ID
    firstName: "John", // current user's first name

    // additional suggestions

    companyName: "Acme Corp", // Current user’s company name
    email: "john.doe@example.com", // Current user's email
    location: "90210", // a zipcode, state, or country enables location-based targeting
    version: "2.0", // users on different versions may need to see different content
    language: "spanish", // for multi-language applications
    renewalDate: 1577880288 // to remind users to renew
  }
);

export default Home;