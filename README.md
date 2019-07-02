# # Resume Verifier DApp!
  
  ## Description
  
  This decentralized application allows its users to create a resume and have their jobs and certifications verified by their respective institutions/companies
  
  ## Functionality
  
  On the first page there is a form where the user can search a user's CV by address. On top left of the page there are two buttons to select whether the user wants to search by email or ethereum address
  
  The **Register** option is enabled for the users are not registered, once they complete the registration, the **Register** option turns into **Profile** dropdown menu that has the following options: **Show Profile**, **Add Job**, **Add Certificate**
  
  For an institution or company there is also another page option called **Institution Requests**/**Company Requests**
  
  The owner has a page option called **Admin** where he can add companies and institution.
  
  
  ## Installation steps
  
  - clone the repository
  - go to the project directory
  - run the following commands:  
  **npm install --save next react react-dom**
  **npm installsemantic-ui-react**
  **npm install @material-ui/core@next**
  **npm install web3**
  
  - run the app with **npm run dev**
  
  >Note:  Try using Ubuntu
  
  ## Deploying the Dapp again/to another network
  
  Currently, the Dapp is deployed on **Modex Test Net** using Metamask. In the **web3.js** file you can change the variables to connect to another network. The address and abi of a contract can be find and modified in **verifier.js**