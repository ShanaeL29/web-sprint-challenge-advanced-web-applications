# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. Explain what a token is used for.

   A token is used by a server to make decisions for data transfer based on the client's permission. The token is used to allow access to protected resources that require authentication. If a token is not found then authorization is not granted and protected resources are not displayed to the user.

2. What steps can you take in your web apps to keep your data secure?

   You can add security by setting up tokens in authorization headers and set up the headers inside of axiosWithAuth() in separate file. These tokens should be made even more secure through the backend methods rather than using localStorage in the long run.

3. Describe how web servers work.

   A web server can be both the computer that stores the code for a website as well as the program that runs it. The computer is connected to the internet and stores the different website's code so it can be shared across the world. This server is said to be "hosting" a website or app once the code is loaded onto it. The other side of "web server" is the software (program) that tells the server (computer/machine) what to do which is mainly to "serve" the web pages that it retrieves from code to users upon request. Servers share information through domain names and URLs.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

   CRUD stands for Create, Read, Update, and Delete. Create maps to POST, Read maps to GET, Update maps to PUT, and Delete maps to DELETE.
