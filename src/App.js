import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppcuesRouter from './AppcuesRouter';


const App = () => {
  window.Appcues.identify(
  "<<< USER_ID >>>", // unique, required
  {
    createdAt: 1566932390, // Unix timestamp of user signup date
    purchasedAd: 1566932395, // Unix timestamp of account purchase date (leave null if empty)
    planTier: "Standard", // Current user’s plan tier
    role: "Admin", // Current user’s role or permissions
    accountId: "1234", // Current user's account ID
    firstName: "John", // current user's first name
    companyName: "Acme Corp", // Current user’s company name
    email: "john.doe@example.com", // Current user's email
    location: "90210", // a zipcode, state, or country enables location-based targeting
    version: "2.0", // users on different versions may need to see different content
    language: "spanish", // for multi-language applications
    renewalDate: 1577880288 // to remind users to renew
  })

  window.Appcues.loadLaunchpad("#launchpad", {
    position: "right"
  })

  return (
    <BrowserRouter>
        <AppcuesRouter />
    </BrowserRouter>
  )
}

export default App;

